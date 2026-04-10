import { gql } from "@apollo/client";

export const STORE_USER_AUTHORIZED_QUERY = gql(`
  query StoreUserAuthorized($storeId: ID!, $branchId: ID) {
    storeUserAuthorized(storeId: $storeId, branchId: $branchId) {
      id
      storeId
      branchId
      userId
      legalName
      email
      employeeId
      role
      approvedAt
      approved
    }
  }
`);

export const ACCEPT_PENDING_STORE_USER_INVITE_MUTATION = gql(`
  mutation AcceptPendingStoreUserInvite($data: String!) {
    acceptPendingStoreUserInvite(data: $data) {
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

export const DECLINE_PENDING_STORE_USER_INVITE_MUTATION = gql(`
  mutation DeclinePendingStoreUserInvite($data: String!) {
    declinePendingStoreUserInvite(data: $data)
  }
`);

