import { gql } from "@apollo/client";

export const CREATE_CATEGORY_MUTATION = gql(`
  mutation CreateCategory($input: CreateCategory!) {
    createCategory(input:$input) {
      id
      name
      path
      expandedPathname
      categoryAlias
      depth
    }
  }
`);
