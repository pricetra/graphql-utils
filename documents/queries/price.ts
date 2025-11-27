import { gql } from "@apollo/client";

export const PRICE_CHANGE_HISTORY_QUERY = gql(`
  query PriceChangeHistory($productId: ID!, $stockId: ID!, $paginator: PaginatorInput!, $filters: PriceHistoryFilter) {
    priceChangeHistory(
      productId: $productId
      stockId: $stockId
      paginator: $paginator
      filters: $filters
    ) {
      prices {
        id
        productId
        stockId
        branchId
        storeId
        amount
        originalPrice
        sale
        expiresAt
        condition
        unitType
        currencyCode
        createdBy {
          id
          name
          avatar
        }
        createdAt
      }
      paginator {
        next
        page
        prev
        limit
        total
        numPages
      }
    }
  }
`);
