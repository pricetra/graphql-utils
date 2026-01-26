import { gql } from "@apollo/client";

export const UserFragment = gql(`
  fragment UserFields on User {
    id
    name
    email
    avatar
    createdAt
    updatedAt
    active
    authDevice
    authPlatform
    authStateId
    role
  }
`);

export const LOGIN_INTERNAL_QUERY = gql(`
  query LoginInternal(
    $email: String!
    $password: String!
    $ipAddress: String
    $device: AuthDeviceType
  ) {
    login(email: $email, password: $password, ipAddress: $ipAddress, device: $device) {
      token
      user {
        id
        name
        email
        avatar
        createdAt
        updatedAt
        active
        authDevice
        authPlatform
        authStateId
        expoPushToken
        role
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
      }
    }
  }
`);

export const GOOGLE_OAUTH_QUERY = gql(`
  query GoogleOAuth($accessToken: String!, $ipAddress: String, $device: AuthDeviceType) {
    googleOAuth(accessToken: $accessToken, ipAddress: $ipAddress, device: $device) {
      token
      user {
        id
        name
        email
        avatar
        createdAt
        updatedAt
        active
        authDevice
        authPlatform
        authStateId
        expoPushToken
        role
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
      }
      isNewUser
    }
  }
`);

export const APPLE_OAUTH_QUERY = gql(`
  query AppleOAuth(
    $code: String!
    $appleRawUser: String
    $ipAddress: String
    $device: AuthDeviceType
  ) {
    appleOAuth(
      code: $code
      appleRawUser: $appleRawUser
      ipAddress: $ipAddress
      device: $device
    ) {
      token
      user {
        id
        name
        email
        avatar
        createdAt
        updatedAt
        active
        authDevice
        authPlatform
        authStateId
        expoPushToken
        role
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
      }
      isNewUser
    }
  }
`);

export const YAHOO_OAUTH_QUERY = gql(`
  query YahooOAuth($code: String!, $codeVerifier: String, $ipAddress: String, $device: AuthDeviceType) {
    yahooOAuth(code: $code, codeVerifier: $codeVerifier, ipAddress: $ipAddress, device: $device) {
      token
      user {
        id
        name
        email
        avatar
        createdAt
        updatedAt
        active
        authDevice
        authPlatform
        authStateId
        expoPushToken
        role
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
      }
      isNewUser
    }
  }
`);

export const VERIFY_PASSWORD_RESET_CODE_QUERY = gql(`
  query VerifyPasswordResetCode($email: String!, $code: String!) {
    verifyPasswordResetCode(email: $email, code: $code)
  }
`);

export const ME_QUERY = gql(`
  query Me {
    me {
      id
      name
      email
      avatar
      createdAt
      updatedAt
      active
      authDevice
      authPlatform
      authStateId
      expoPushToken
      role
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
      birthDate
      phoneNumber
      bio
    }
  }
`);

export const MY_PRODUCT_BILLING_DATA_QUERY = gql(`
  query MyProductBillingData($paginator: PaginatorInput!) {
    myProductBillingData(paginator: $paginator) {
      data {
        id
        rate
        userId
        user {
          id
          name
          avatar
          active
        }
        productId
        product {
          id
          name
          image
          brand
          code
          category {
            id
            name
            expandedPathname
            path
          }
          createdAt
          updatedAt
        }
        createdAt
        paidAt
        billingRateType
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

export const POST_AUTH_USER_DATA_QUERIES = gql(`
  query PostAuthUserData($listType: ListType) {
    getAllLists(listType: $listType) {
      id
      name
      type
      userId
      createdAt
      productList {
        id
        listId
        productId
        stockId
        createdAt
      }
      branchList {
        id
        listId
        branchId
        createdAt
      }
    }

    groceryLists {
      id
      name
      default
      createdAt
    }
  }
`);
