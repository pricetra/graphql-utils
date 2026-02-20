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

export const CATEGORIES_WITH_PRODUCTS_QUERY = gql(`
  query CategoriesWithProducts($paginator: PaginatorInput!, $productLimit: Int!, $filters: ProductSearch) {
    categoriesWithProducts(
      paginator: $paginator
      productLimit: $productLimit
      filters: $filters
    ) {
      categories {
        id
        name
        path
        expandedPathname
        categoryAlias
        products {
          id
          name
          image
          description
          brand
          code
          model
          categoryId
          category {
            id
            name
            expandedPathname
            path
          }
          stock {
            id
            productId
            storeId
            branchId
            latestPriceId
            latestPrice {
              id
              productId
              branchId
              storeId
              amount
              currencyCode
              createdAt
              sale
              originalPrice
              condition
              expiresAt
              unitType
              outOfStock
              verified
            }
            available
            createdBy {
              id
              name
              avatar
            }
            updatedBy {
              id
              name
              avatar
            }
          }
          approximateWeight
          netWeight
          weightValue
          weightType
          quantityValue
          quantityType
          createdAt
          updatedAt
          views
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
