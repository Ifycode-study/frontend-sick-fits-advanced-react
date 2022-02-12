import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY ($id: ID!) {
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

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id,
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

export default function UpdateProduct({ id }) {
  // 1. Get the existing product
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id
    }
  });

  console.log(data);

  // 2a. Get the mutation to update the product
  const [ updateProduct, { data: updateData, error: updateError, loading: updateLoading } ] = useMutation(UPDATE_PRODUCT_MUTATION);

  // Create state for the form inputs
  const { inputs, handleChange, resetForm, clearForm } = useForm(data?.Product);
  console.log(inputs);

  if (loading) {
    return <p>Loading...</p>
  }


  // 3. Make form handle the update
  return (
    <Form onSubmit={async (e) => {
      e.preventDefault();
      console.log(inputs);
      // Submit input from fields to the backend
      const response = await updateProduct({
        variables: {
          id: id,
          data: {
            name: inputs.name,
            description: inputs.description,
            price: inputs.price
          }
        }
      });
      console.log(response);
    }}>
      <DisplayError error={error || updateError} />
      <fieldset disabled={loading} aria-busy={loading}>
      <label htmlFor="name">
        Name:
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
      </label>
      <label htmlFor="price">
        Price:
          <input 
            type="number" 
            id="price" 
            name="price" 
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
          />
      </label>
      <label htmlFor="description">
        Description:
          <textarea
            id="description" 
            name="description" 
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
      </label>
      </fieldset>
      <button type="submit"> Update Product </button>
    </Form>
  )
}


// method 1:

// 2a. Get the mutation to update the product
//  const [ updateProduct, { data: updateData, error: updateError, loading: updateLoading } ] = useMutation(UPDATE_PRODUCT_MUTATION, {
//   variables: {
//     id,
//     // TODO: Pass in updates to product here
//   }
// });