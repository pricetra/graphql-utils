import { gql } from "@apollo/client";

export const GET_STOREFRONT_BANNER_QUERY = gql(`
  query GetStorefrontBanner($storeId: ID!, $branchId: ID) {
    getStorefrontBanner(storeId: $storeId, branchId: $branchId) {
      id
      storeId
      branchId
      bannerItems {
        id
        bannerId
        imageId
        link
        isExternal
        title
        description
        sortOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`);
