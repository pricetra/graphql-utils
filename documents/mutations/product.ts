import { gql } from "@apollo/client";

export const CREATE_PRODUCT_MUTATION = gql(`
  mutation CreateProduct($input: CreateProduct!) {
    createProduct(input: $input) {
      id
      name
      image
      description
      brand
      code
      model
      categoryId
      category {
        id
        name
        expandedPathname
        path
      }
      weightValue
      weightType
      createdAt
      updatedAt
    }
  }
`);

export const UPDATE_PRODUCT_MUTATION = gql(`
  mutation UpdateProduct($id: ID!, $input: UpdateProduct!) {
    updateProduct(id: $id, input: $input) {
      id
      name
      image
      description
      brand
      code
      model
      categoryId
      category {
        id
        name
        expandedPathname
        path
      }
      weightValue
      weightType
      createdAt
      updatedAt
    }
  }
`);

export const EXTRACT_AND_CREATE_PRODUCT_FIELDS_QUERY = gql(`
  mutation ExtractAndCreateProduct($barcode: String!, $base64Image: String!) {
    extractAndCreateProduct(barcode: $barcode, base64Image: $base64Image) {
      id
      code
      brand
      name
      categoryId
      weightValue
      weightType
      quantityValue
      quantityType
      description
    }
  }
`);

export const SANITIZE_PRODUCT_MUTATION = gql(`
  mutation SanitizeProduct($id: ID!) {
    sanitizeProduct(id: $id) {
      id
      name
      image
      description
      brand
      code
      model
      categoryId
      category {
        id
        name
        categoryAlias
        expandedPathname
        path
      }
      approximateWeight
      netWeight
      weightValue
      weightType
      quantityValue
      quantityType
      createdAt
      updatedAt
      views
    }
  }
`);

