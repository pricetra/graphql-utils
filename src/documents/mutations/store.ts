import { gql } from "@apollo/client";

export const CREATE_STORE_MUTATION = gql(`
  mutation CreateStore($input: CreateStore!) {
    createStore(input: $input) {
      id
      name
      logo
      website
    }
  }
`);

export const BUSINESS_SIGN_UP_FORM_MUTATION = gql(`
  mutation BusinessSingUpForm($input: BusinessFormInput!) {
    businessSingUpForm(input: $input) {
      id
      firstName
      lastName
      email
      phoneNumber
      storeName
      storeAddress
      storeUrl
      storeLogo
      additionalInformation
      storeId
    }
  }
`);
