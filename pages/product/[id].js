import SingleProduct from "../../components/SingleProduct";

export default function SingleProductPage({ query }) {
  return (
    <SingleProduct id={query.id} />
  );
}


// Moved to components folder in SingleProduct.js file and then modified

// import gql from 'graphql-tag';
// import { useQuery } from '@apollo/client';

// const SINGLE_QUERY_ITEM = gql`
//   query SINGLE_QUERY_ITEM {
//     Product(where: {
//       id: "6202dd449c616ea1ac599a2b"
//     }) {
//       name
//       price
//       description
//     }
//   }
// `;

// export default function SingleProductPage({ query }) {
//   const { data, loading, error } = useQuery(SINGLE_QUERY_ITEM);
//   console.log({ data, loading, error });
//   return (
//     <div>I am a single product with unique ID: {query.id}</div>
//   );
// }
