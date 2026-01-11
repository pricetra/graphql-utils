import { gql } from "@apollo/client";

export const MY_STORE_USERS_QUERY = gql(`
  query MyStoreUser {
    myStoreUsers {
      id
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
          fullAddress
        }
      }
      userId
      user {
        id
        name
        avatar
      }
      legalName
      email
      employeeId
      role
      approvedAt
      approvedById
      approvedByUser {
        id
        name
        avatar
      }
      approved
      createdById
      createdBy {
        id
        name
        avatar
        active
      }
      createdAt
    }
  }
`);
