import { gql } from "@apollo/client";

export const GET_ALL_LISTS = gql`
  query GetAllLists($listType: ListType) {
    getAllLists(listType: $listType) {
      id
      name
      type
      userId
      createdAt
      productList {
        id
        listId
        productId
        stockId
        createdAt
      }
      branchList {
        id
        listId
        branchId
        createdAt
      }
    }
  }
`;

export const GET_ALL_PRODUCT_LISTS_BY_LIST_ID = gql(`
  query GetAllProductListsByListId($listId: ID!) {
    getAllProductListsByListId(listId: $listId) {
      id
      listId
      userId
      productId
      type
      stockId
      createdAt
      product {
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
        approximateWeight
        netWeight
        weightValue
        weightType
        quantityValue
        quantityType
        createdAt
        updatedAt
      }
      stock {
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
          createdAt
          sale
          originalPrice
          condition
          expiresAt
          unitType
        }
      }
    }
  }
`);

export const GET_ALL_BRANCH_LISTS_BY_LIST_ID = gql(`
  query GetAllBranchListsByListId($listId: ID!) {
    getAllBranchListsByListId(listId: $listId) {
      id
      listId
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
        }
        storeId
        storeSlug
        store {
          id
          slug
          name
          logo
        }
      }
      createdAt
    }
  }
`);
