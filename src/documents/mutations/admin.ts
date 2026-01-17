import { gql } from '@apollo/client';

export const UPDATE_USER_BY_ID_MUTATION = gql(`
  mutation UpdateUserById($userId: ID!, $input: UpdateUserFull!) {
    updateUserById(userId: $userId, input: $input) {
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
  }
`);

export const CREATE_STORE_USER_ADMIN = gql(`
  mutation CreateStoreUserAdmin($input: CreateStoreUserAdmin!) {
    createStoreUserAdmin(input:$input) {
      id
      storeId
      branchId
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
      approved
      createdBy {
        id
        name
        avatar
        active
      }
      createdAt
      encodedId
    }
  }
`);

export const ADMIN_REMOVE_AUTH_SESSION_MUTATION = gql(`
  mutation AdminRemoveAuthSession($authStateId: String!) {
    adminRemoveAuthSession(authStateId: $authStateId)
  }
`);
