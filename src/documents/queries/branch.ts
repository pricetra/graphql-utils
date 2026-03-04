import { gql } from "@apollo/client";

export const ALL_BRANCHES_QUERY = gql(`
  query AllBranches($storeId: ID, $storeSlug: String, $paginator: PaginatorInput!, $search: String, $location: LocationInput) {
    allBranches(storeId: $storeId, storeSlug: $storeSlug, paginator: $paginator, search: $search, location: $location) {
      branches {
        id
        type
        slug
        name
        storeId
        storeSlug
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
        onlineAddressId
        onlineAddress {
          id
          storeId
          url
          itemUrlTemplate
          referralCode
          referralQueryParam
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

export const BRANCH_QUERY = gql(`
  query Branch($branchId: ID, $branchSlug: String, $storeId: ID, $storeSlug: String) {
    findBranch(id: $branchId, slug: $branchSlug, storeId: $storeId, storeSlug: $storeSlug) {
      id
      type
      slug
      name
      storeId
      storeSlug
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
      }
      onlineAddressId
      onlineAddress {
        id
        storeId
        url
        itemUrlTemplate
        referralCode
        referralQueryParam
      }
    }

    findStore(id: $storeId, slug: $storeSlug) {
      id
      slug
      name
      logo
      website
    }
  }
`);

export const FIND_BRANCH_QUERY = gql(`
  query FindBranch($branchId: ID, $branchSlug: String, $storeId: ID, $storeSlug: String) {
    findBranch(id: $branchId, slug: $branchSlug, storeId: $storeId, storeSlug: $storeSlug) {
      id
      type
      slug
      name
      storeId
      storeSlug
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
      }
      onlineAddressId
      onlineAddress {
        id
        storeId
        url
        itemUrlTemplate
        referralCode
        referralQueryParam
      }
    }
  }
`);

export const FIND_BRANCHES_BY_DISTANCE_QUERY = gql(`
  query FindBranchesByDistance($lat: Float!, $lon: Float!, $radiusMeters: Int!) {
    findBranchesByDistance(lat: $lat, lon: $lon, radiusMeters: $radiusMeters) {
      id
      type
      slug
      name
      storeId
      storeSlug
      store {
        id
        slug
        name
        website
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
      onlineAddressId
      onlineAddress {
        id
        storeId
        url
        itemUrlTemplate
        referralCode
        referralQueryParam
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
        type
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
        onlineAddressId
        onlineAddress {
          id
          storeId
          url
          itemUrlTemplate
          referralCode
          referralQueryParam
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

export const GET_FAVORITE_BRANCHES_WITH_PRICE_DATA_QUERY = gql(`
  query FavoriteBranchesWithPrices($productId: ID!) {
    getFavoriteBranchesWithPrices(productId: $productId) {
      id
      branchId
      branch {
        id
        type
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
        onlineAddressId
        onlineAddress {
          id
          storeId
          url
          itemUrlTemplate
          referralCode
          referralQueryParam
        }
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
          createdBy {
            id
            name
            avatar
          }
        }
        available
      }
      approximatePrice
    }
  }
`);
