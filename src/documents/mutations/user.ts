import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation CreateAccount($email: String!, $name: String!, $password: String!) {
    createAccount(input: { email: $email, name: $name, password: $password }) {
      id
      name
      email
      phoneNumber
      createdAt
      updatedAt
      authPlatform
      role
    }
  }
`;

export const VERIFY_EMAIL_MUTATION = gql(`
  mutation VerifyEmail($verificationCode: String!) {
    verifyEmail(verificationCode: $verificationCode) {
      id
      name
      email
      avatar
      createdAt
      updatedAt
      active
      authPlatform
      authStateId
      role
    }
  }
`);

export const RESEND_VERIFICATION_MUTATION = gql(`
  mutation ResendVerification($email: String!) {
    resendEmailVerificationCode(email: $email)
  }
`);

export const LOGOUT_MUTATION = gql(`
  mutation Logout {
    logout
  }
`);

export const UPDATE_PROFILE_MUTATION = gql(`
  mutation UpdateProfile($input: UpdateUser!) {
    updateProfile(input: $input) {
      id
      name
      email
      avatar
      createdAt
      updatedAt
      active
      authPlatform
      authStateId
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

export const REQUEST_RESET_PASSWORD_MUTATION = gql(`
  mutation RequestResetPassword($email: String!) {
    requestPasswordReset(email: $email)
  }
`);

export const UPDATE_PASSWORD_WITH_RESET_CODE_MUTATION = gql(`
  mutation UpdatePasswordWithResetCode($email: String!, $code: String!, $newPassword: String!) {
    updatePasswordWithResetCode(
      email: $email
      code: $code
      newPassword: $newPassword
    )
  }
`);

export const REGISTER_EXPO_PUSH_TOKEN = gql(`
  mutation RegisterExpoPushToken($expoPushToken: String!) {
    registerExpoPushToken(expoPushToken: $expoPushToken) {
      id
      name
      email
      avatar
      createdAt
      updatedAt
      active
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
`);
