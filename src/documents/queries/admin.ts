import { gql } from '@apollo/client';

export const GET_ALL_USERS_QUERY = gql(`
  query GetAllUsers($paginator: PaginatorInput!, $filters: UserFilter) {
    getAllUsers(paginator:$paginator, filters:$filters) {
      users {
        id
        email
        phoneNumber
        name
        avatar
        birthDate
        bio
        active
        role
        createdAt
        updatedAt
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

export const PRODUCT_BILLING_DATA_BY_USER_ID_QUERY = gql(`
  query ProductBillingDataByUserId($userId: ID!, $paginator: PaginatorInput!) {
    productBillingDataByUserId(userId: $userId, paginator: $paginator) {
      data {
        id
        rate
        userId
        user {
          id
          name
          avatar
          active
        }
        productId
        product {
          id
          name
          image
          brand
          code
          category {
            id
            name
            expandedPathname
            path
          }
          createdAt
          updatedAt
        }
        createdAt
        paidAt
        billingRateType
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

export const PAGINATED_ADMIN_AUTH_SESSIONS_QUERY = gql(`
  query PaginatedAdminAuthSessions($paginator: PaginatorInput!, $filters: UserFilter) {
    paginatedAdminAuthSessions(paginator: $paginator, filters: $filters) {
      authSessions {
        id
        loggedInAt
        userId
        user {
          id
          name
          avatar
          active
          createdAt
          updatedAt
        }
        ipAddress
        platform
        device
        expoPushToken
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

export const PAGINATED_ADMIN_PRODUCT_VIEW_ENTRIES = gql(`
  query PaginatedAdminProductViewEntries($paginator: PaginatorInput!) {
    paginatedAdminProductViewEntries(paginator: $paginator) {
      productViewEntries {
        id
        productId
        product {
          id
          code
          name
          image
        }
        stockId
        stock {
          id
        }
        userId
        user {
          id
          name
          avatar
          active
        }
        origin
        platform
        createdAt
        referrer
        metadata
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

export const PAGINATED_STOCKS_QUERY = gql(`
  query PaginatedStocks($paginator: PaginatorInput!, $filters: StockFilters!) {
    paginatedStocks(paginator: $paginator, filters: $filters) {
      stocks {
        id
        productId
        product {
          id
          code
          name
          image
          brand
          category {
            id
            name
            expandedPathname
            path
          }
          createdAt
          updatedAt
        }
        storeId
        store {
          id
          name
          logo
        }
        branchId
        branch {
          id
          name
          type
          slug
        }
        latestPriceId
        latestPrice {
          id
          amount
          sale
          expiresAt
          createdAt
        }
        available
        onlineItem {
          id
          itemId
          url
        }
        createdAt
        updatedAt
        createdById
        createdBy {
          id
          name
          avatar
        }
        updatedById
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
