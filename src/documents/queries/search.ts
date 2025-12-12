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

export const POPULAR_SEARCH_KEYWORDS_QUERY = gql(`
  query PopularSearchKeywords($paginator: PaginatorInput!, $dateRange: TimestampRangeBetween) {
    popularSearchKeywords(paginator:$paginator, dateRange: $dateRange) {
      searches
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
