import { gql } from "@apollo/client";

export const CREATE_STOREFRONT_FLYER_MUTATION = gql(`
  mutation CreateStorefrontFlyer($input: StorefrontFlyerInput!) {
    createStorefrontFlyer(input: $input) {
      id
      uid
      storeId
      store {
        id
        slug
        name
      }
      branchId
      title
      description
      flyerImageId
      flyerStyles
      status
      createdAt
      startsAt
      expiresAt
    }
  }
`);

export const CREATE_STOREFRONT_FLYER_PAGE_MUTATION = gql(`
  mutation CreateStorefrontFlyerPage($input: StorefrontFlyerPageInput!) {
    createStorefrontFlyerPage(input: $input) {
      id
      storefrontFlyerId
      pageNumber
      title
      description
      pageImageId
      heroImageId
      bgImageId
      styles
      layout
      sections {
        id
        storefrontFlyerPageId
        title
        description
        bgImageId
        styles
        layout
        sortOrder
        items {
          id
          storefrontFlyerSectionId
          sortOrder
          productId
          product {
            id
            name
            image
            description
            brand
            code
            model
            categoryId
            approximateWeight
            netWeight
            weightValue
            weightType
            quantityValue
            quantityType
            createdAt
            updatedAt
            views
          }
          stockId
          stock {
            id
            productId
            storeId
            branchId
            latestPriceId
            available
          }
          priceId
          price {
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
            outOfStock
            verified
          }
        }
      }
    }
  }
`);

export const PUBLISH_DRAFT_STOREFRONT_FLYER_MUTATION = gql(`
  mutation PublishDraftStorefrontFlyer($id: ID!) {
    publishDraftStorefrontFlyer(id: $id) {
      id
      uid
      storeId
      store {
        id
        slug
        name
      }
      branchId
      title
      description
      flyerImageId
      flyerStyles
      status
      createdAt
      startsAt
      expiresAt
    }
  }
`);
