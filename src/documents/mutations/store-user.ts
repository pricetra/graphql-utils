import { gql } from "@apollo/client";

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

