import { gql } from "@apollo/client";

export const GET_CATEGORIES_QUERY = gql(`
  query GetCategories($depth: Int, $parentId: ID) {
    getCategories(depth: $depth, parentId: $parentId) {
      id
      name
      path
      expandedPathname
      categoryAlias
      depth
    }
  }
`);

export const CATEGORY_SEARCH_QUERY = gql(`
  query CategorySearch($search: String!, $quickSearchMode: Boolean) {
    categorySearch(search: $search, quickSearchMode: $quickSearchMode) {
      id
      name
    }
  }
`);

export const GET_CATEGORY_QUERY = gql(`
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      path
      expandedPathname
      categoryAlias
    }
  }
`);
