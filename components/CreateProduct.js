import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Products';
import Form from './styles/Form';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name,
        description: $description,
        price: $price,
        status: "AVAILABLE",
        photo: {
          create: {
            image: $image,
            altText: $name
          }
        }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    image: '',
    name: 'A product',
    price: 3450,
    description: 'A product description'
  });

  const [ createProduct, { loading, error, data } ] = useMutation(CREATE_PRODUCT_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: ALL_PRODUCTS_QUERY }]
  });

  return (
    <Form onSubmit={async (e) => {
      e.preventDefault();
      console.log(inputs);
      // Submit input from fields to the backend
      const response = await createProduct();
      //console.log(response);
      clearForm();
    }}>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
      <label htmlFor="image">
       Upload Image:
          <input 
            required
            type="file" 
            id="image" 
            name="image" 
            onChange={handleChange}
          />
      </label>
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
      <button type="submit"> + Add Product </button>
    </Form>
  );
}



//------------------------------------------

      // <button 
      //   type="button" 
      //   onClick={clearForm}
      // > Clear form </button>
      // <button 
      //   type="button" 
      //   onClick={resetForm}
      // > Reset form </button>
// Once you set type to button for buttons, you don't need e.preventDefault()


//-----------------------------------------

// import { useState } from 'react';

// export default function CreateProduct() {
//   const [ name, setName ] = useState('Ifeoma');
//   return (
//     <form>
//       <label htmlFor="name">
//         Name:
//           <input 
//             type="text" 
//             id="name" 
//             name="name" 
//             placeholder="Name"
//             value={name}
//             onChange={(e) => {
//               console.log(e.target.value);
//               setName(e.target.value);
//             }}
//           />
//       </label>
//     </form>
//   );
// }

