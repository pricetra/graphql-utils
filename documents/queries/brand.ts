import { gql } from "@apollo/client";

export const ALL_BRANDS_QUERY = gql(`
  query AllBrands($joinStock: Boolean) {
    allBrands(joinStock: $joinStock) {
      brand
      products
    }
  }
`);
