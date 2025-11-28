import { gql } from "@apollo/client";

export const CREATE_BRANCH_WITH_FULL_ADDRESS_MUTATION = gql(`
  mutation CreateBranchFromFullAddress($storeId: ID!, $fullAddress: String!) {
    createBranchWithFullAddress(storeId: $storeId, fullAddress: $fullAddress) {
      id
      name
      addressId
      storeId
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
      addressId
      storeId
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
