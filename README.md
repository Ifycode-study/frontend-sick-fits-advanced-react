# Frontend (Advanced React)
Frontend for sickfits app from advanced React + GraphQL course by wesbos with React and Nextjs. Find the [backend repo for this project here](https://github.com/follow-course/backend-sick-fits-advanced-react).

## Apollo client setup
Summary: Find apollo setup in withData.js file. Inside _app.js, wrap MyApp function with withData. Restart your browser, app should work fine and Apollo client should now appear in the dev tools also.

## Query and mutation examples

Query and mutation examples used to get or update data from the graphQL API at http://localhost:3000/api/graphql. These are alsoo used and modified in the components where needed.

````
query ALL_PRODUCTS_QUERY {
  allProducts {
    id
    name
    price
    description
    photo {
      id
      altText
      image {
        publicUrlTransformed
      }
    }
    
  }
}
````

````
mutation CREATE_PRODUCT_MUTATION {
  createProduct(data: {
    name: "Another Sample Product",
    description: "Another sample description",
    price: 100,
    status: "AVAILABLE"
  }) {
    id
    price
    description
  }
}
````

````
query SINGLE_QUERY_ITEM {
  # Query for a product by their unique id
  Product(where: {
    id: "6202dd449c616ea1ac599a2b"
  }) {
    name
    price
    description
  }
  
  # Example of finding products by name
  # allProducts(where: {
  #   name_contains_i: "yeti"
  # }) {
  #   name
  #   price
  # }
}
````
