import { gql } from "@apollo/client";

export const ALL_BRANDS_QUERY = gql(`
  query AllBrands($joinStock: Boolean, $filters: ProductSearch) {
    allBrands(joinStock: $joinStock, filters: $filters) {
      brand
      products
    }
  }
`);
