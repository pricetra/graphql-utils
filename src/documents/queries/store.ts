import { gql } from "@apollo/client";

export const ALL_STORES_QUERY = gql(`
  query AllStores($paginator: PaginatorInput!, $search: String) {
    allStores(paginator: $paginator, search: $search) {
      stores {
        id
        slug
        name
        logo
        website
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

export const FIND_STORE_QUERY = gql(`
  query FindStore($storeId: ID, $storeSlug: String) {
    findStore(id: $storeId, slug: $storeSlug) {
      id
      slug
      name
      logo
      website
    }
  }
`);

export const STORE_SLUG_AVAILABILITY_QUERY = gql(`
  query StoreSlugAvailability($store: String!) {
    storeSlugAvailability(store: $store)
  }
`);
