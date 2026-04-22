import { gql } from "@apollo/client"

export const STOREFRONT_FLYER_QUERY = gql(`
  query StorefrontFlyer($uid: String!) {
    storefrontFlyer(uid: $uid) {
      id
      uid
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
      }
      title
      description
      flyerImageId
      flyerStyles
      status
      createdAt
      startsAt
      expiresAt
      pages {
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
  }
`);

export const STOREFRONT_FLYERS_QUERY = gql(`
  query StorefrontFlyers($storeId: ID!, $branchId: ID, $paginator: PaginatorInput!) {
    storefrontFlyers(storeId: $storeId, branchId: $branchId, paginator: $paginator) {
      flyers {
        id
        uid
        storeId
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
