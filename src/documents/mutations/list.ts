import { gql } from "@apollo/client";

export const ADD_TO_LIST_MUTATION = gql(`
  mutation AddToList($listId: ID!, $productId: ID!, $stockId: ID) {
    addToList(listId: $listId, productId: $productId, stockId: $stockId) {
      id
      userId
      listId
      productId
      stockId
      createdAt
    }
  }
`);

export const REMOVE_FROM_LIST_MUTATION = gql(`
  mutation RemoveFromList($listId: ID!, $productListId: ID!) {
    removeFromList(listId: $listId, productListId: $productListId) {
      id
      userId
      listId
      productId
      stockId
      createdAt
    }
  }
`);

export const REMOVE_FROM_LIST_BY_PRODUCT_ID_MUTATION = gql(`
  mutation RemoveFromListWithProductId($listId: ID!, $productId: ID!, $stockId: ID) {
    removeFromListWithProductId(listId: $listId, productId: $productId, stockId: $stockId) {
      id
      userId
      listId
      productId
      stockId
      createdAt
    }
  }
`);

export const ADD_BRANCH_TO_LIST_MUTATION = gql(`
  mutation AddBranchToList($listId: ID!, $branchId: ID!) {
    addBranchToList(listId: $listId, branchId: $branchId) {
      id
      userId
      listId
      branchId
      createdAt
    }
  }
`);

export const BULK_ADD_BRANCHES_TO_LIST_MUTATION = gql(`
  mutation BulkAddBranchesToList($listId: ID!, $branchIds: [ID!]!) {
    bulkAddBranchesToList(listId: $listId, branchIds: $branchIds) {
      id
      userId
      listId
      branchId
      createdAt
    }
  }
`);

export const REMOVE_BRANCH_FROM_LIST_MUTATION = gql(`
  mutation RemoveBranchFromList($listId: ID!, $branchListId: ID!) {
    removeBranchFromList(listId: $listId, branchListId: $branchListId) {
      id
      userId
      listId
      branchId
      createdAt
    }
  }
`);
