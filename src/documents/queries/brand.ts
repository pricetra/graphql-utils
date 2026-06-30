import { gql } from "@apollo/client";

export const ALL_BRANDS_QUERY = gql(`
  query AllBrands($joinStock: Boolean, $filters: ProductSearchFilters) {
    allBrands(joinStock: $joinStock, filters: $filters) {
      brand
      products
    }
  }
`);
