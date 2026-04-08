import { gql } from "@apollo/client";

export const CREATE_BRANCH_WITH_FULL_ADDRESS_MUTATION = gql(`
  mutation CreateBranchFromFullAddress($storeId: ID!, $fullAddress: String!) {
    createBranchWithFullAddress(storeId: $storeId, fullAddress: $fullAddress) {
      id
      name
      storeId
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
`);

export const CREATE_BRANCH_MUTATION = gql(`
  mutation CreateBranch($input: CreateBranch!) {
    createBranch(input: $input) {
      id
      name
      storeId
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

export const UPDATE_BRANCH_MUTATION = gql(`
  mutation UpdateBranch($storeId: ID!, $branchId: ID!, $input: UpdateBranch!) {
    updateBranch(storeId: $storeId, branchId: $branchId, input: $input) {
      id
      name
      storeId
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
