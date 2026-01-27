import { gql } from "@apollo/client";

export const CREATE_PRICE_MUTATION = gql(`
  mutation CreatePrice($input: CreatePrice!) {
    createPrice(input: $input) {
      id
      amount
      currencyCode
      productId
      storeId
      stockId
      branchId
      outOfStock
      verified
    }
  }
`);
