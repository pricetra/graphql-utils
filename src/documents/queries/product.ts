import { gql } from "@apollo/client";

export const BARCODE_SCAN_QUERY = gql(`
  query BarcodeScan($barcode: String!, $searchMode: Boolean, $location: LocationInput) {
    barcodeScan(barcode: $barcode, searchMode: $searchMode, location: $location) {
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
      approximateWeight
      netWeight
      weightValue
      weightType
      quantityValue
      quantityType
      createdAt
      updatedAt
      stock {
        id
        productId
        storeId
        branchId
        latestPriceId
      }
    }
  }
`);

export const PRODUCT_BY_ID_QUERY = gql(`
  query Product($productId: ID!, $viewerTrail: ViewerTrailInput) {
    product(id: $productId, viewerTrail: $viewerTrail) {
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
        categoryAlias
        expandedPathname
        path
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
      productList {
        id
        listId
        userId
        productId
        type
        stockId
        createdAt
      }
    }
  }
`);

export const ALL_PRODUCTS_QUERY = gql(`
  query AllProducts($paginator: PaginatorInput!, $search: ProductSearch) {
    allProducts(paginator: $paginator, search: $search) {
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
            addressId
            address {
              id
              latitude
              longitude
              mapsLink
              fullAddress
              street
              city
              administrativeDivision
              countryCode
              country
              zipCode
              distance
            }
          }
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
            createdBy {
              id
              name
              avatar
            }
          }
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

export const BRANCHES_WITH_PRODUCTS_QUERY = gql(`
  query BranchesWithProducts($paginator: PaginatorInput!, $productLimit: Int!, $filters: ProductSearch) {
    branchesWithProducts(
      paginator: $paginator
      productLimit: $productLimit
      filters: $filters
    ) {
      branches {
        id
        slug
        name
        storeId
        storeSlug
        store {
          id
          slug
          name
          logo
        }
        addressId
        address {
          id
          distance
          latitude
          longitude
          mapsLink
          fullAddress
          street
          city
          administrativeDivision
          countryCode
          country
          zipCode
        }
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
            }
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

export const PRODUCT_SUMMARY_QUERY = gql(`
  query ProductSummary($productId: ID!, $stockId: ID) {
    productSummary(id: $productId, stockId: $stockId) {
      id
      name
      image
      description
      brand
      code
      store
      storeLogo
      storeSlug
      branch
      branchSlug
      address
      price
      priceCurrencyCode
      originalPrice
      sale
      saleExpiresAt
      priceCreatedAt
    }
  }
`);

export const PRODUCT_SEARCH_QUERY = gql(`
  query ProductSearch($paginator: PaginatorInput!, $search: String, $filters: ProductSearchFilters) {
    productSearch(paginator: $paginator, search: $search, filters: $filters) {
      products {
        id
        code
        brand
        name
        category {
          id
          name
          expandedPathname
        }
        quantityValue
        quantityType
        approximateWeight
        netWeight
        weightValue
        weightType
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

export const EXTRACT_PRODUCT_FIELDS_QUERY = gql(`
  query ExtractProductFields($base64Image: String!) {
    extractProductFields(base64Image: $base64Image) {
      brand
      name
      description
      netWeight
      weight
      quantity
      categoryId
      category {
        id
        name
        expandedPathname
        path
      }
    }
  }
`);

export const MY_PRODUCT_VIEW_HISTORY_QUERY = gql(`
  query MyProductViewHistory($paginator: PaginatorInput!) {
    myProductViewHistory(paginator: $paginator) {
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
            addressId
            address {
              id
              latitude
              longitude
              mapsLink
              fullAddress
              street
              city
              administrativeDivision
              countryCode
              country
              zipCode
              distance
            }
          }
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
          }
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

export const POPULAR_PRODUCTS_QUERY = gql(`
  query PopularProducts($paginator: PaginatorInput!, $dateRange: TimestampRangeBetween) {
    popularProducts(paginator: $paginator, dateRange: $dateRange) {
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
            addressId
            address {
              id
              latitude
              longitude
              mapsLink
              fullAddress
              street
              city
              administrativeDivision
              countryCode
              country
              zipCode
              distance
            }
          }
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
          }
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

export const WEIGHT_COMPONENTS_FROM_CATEGORY_ID_QUERY = gql(`
  query WeightComponentsFromCategoryId($categoryId: ID!) {
    weightComponentsFromCategoryId(categoryId: $categoryId) {
      weightValue
      weightType
    }
  }
`);
