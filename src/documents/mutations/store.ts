import { gql } from "@apollo/client";

export const CREATE_STORE_MUTATION = gql(`
  mutation CreateStore($input: CreateStore!) {
    createStore(input: $input) {
      id
      name
      logo
      website
    }
  }
`);
