import { gql } from "@apollo/client";

export const GET_STOCK_BY_ID = gql(`
  query Stock($stockId: ID!) {
    stock(stockId: $stockId) {
      id
      productId
      storeId
      store {
        slug
        id
        name
        logo
      }
      branchId
      branch {
        id
        slug
        name
        addressId
        address {
          id
          latitude
          longitude
          mapsLink
          fullAddress
          street
          city
          administrativeDivision
          countryCode
          country
          zipCode
          distance
        }
      }
      latestPriceId
      latestPrice {
        id
        productId
        branchId
        storeId
        amount
        currencyCode
        sale
        originalPrice
        condition
        expiresAt
        createdAt
        unitType
      }
      createdAt
      updatedAt
      createdBy {
        id
        name
        avatar
      }
      updatedBy {
        id
        name
        avatar
      }
    }
  }
`);

export const GET_STOCK_FROM_PRODUCT_AND_BRANCH_ID_QUERY = gql(`
  query GetStockFromProductAndBranchId($productId: ID!, $branchId: ID!) {
    getStockFromProductAndBranchId(productId: $productId, branchId: $branchId) {
      id
      productId
      storeId
      branchId
      latestPriceId
      latestPrice {
        id
        productId
        branchId
        storeId
        amount
        currencyCode
        sale
        originalPrice
        condition
        expiresAt
        createdAt
        unitType
      }
      createdAt
      updatedAt
    }
  }
`);

export const GET_PRODUCT_STOCKS_QUERY = gql(`
  query GetProductStocks($paginator: PaginatorInput!, $productId: ID!, $location: LocationInput) {
    getProductStocks(paginator: $paginator, productId: $productId, location: $location) {
      stocks {
        id
        productId
        storeId
        store {
          id
          slug
          name
          logo
        }
        branchId
        branch {
          id
          slug
          name
          address {
            id
            latitude
            longitude
            mapsLink
            fullAddress
            street
            city
            administrativeDivision
            countryCode
            country
            zipCode
            distance
          }
        }
        latestPriceId
        latestPrice {
          id
          productId
          branchId
          storeId
          amount
          currencyCode
          sale
          originalPrice
          condition
          expiresAt
          unitType
        }
        createdAt
        updatedAt
        createdBy {
          id
          name
          avatar
        }
        updatedBy {
          id
          name
          avatar
        }
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
