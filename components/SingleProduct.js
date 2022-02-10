import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Head from 'next/head';
import DisplayError from './ErrorMessage';
import styled from 'styled-components';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_QUERY_ITEM = gql`
  query SINGLE_QUERY_ITEM ($id: ID!) {
    Product(where: {
      id: $id
    }) {
      name
      price
      description
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_QUERY_ITEM, {
    variables: {
      id
    }
  });
  //console.log({ data, loading, error });

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <DisplayError error={error} />
  }

  const { Product } = data;

  return (
    <ProductStyles>
      <Head>
        <title> Sick Fits | {Product.name} </title>
      </Head>
      <img src={Product.photo.image.publicUrlTransformed} alt={Product.photo.altText} />
      <h2>{Product.name}</h2>
      <p>{Product.description}</p>
      <div>I am a single product with unique ID: {id} </div>
    </ProductStyles>
  )
}