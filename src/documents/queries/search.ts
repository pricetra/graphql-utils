import { gql } from "@apollo/client";

export const MY_SEARCH_HISTORY_QUERY = gql(`
  query MySearchHistory($paginator: PaginatorInput!) {
    mySearchHistory(paginator:$paginator) {
      searches {
        id
        searchTerm
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
