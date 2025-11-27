import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES_QUERY = gql`
  query GetAllCountries {
    getAllCountries {
      code
      name
      administrativeDivisions {
        name
        cities
      }
      currency {
        currencyCode
        name
        symbol
        symbolNative
        decimals
        numToBasic
      }
      callingCode
      language
    }
  }
`;

export const CHECK_APP_VERSION_QUERY = gql(`
  query CheckAppVersion($platform: AuthDeviceType!, $version: String!) {
    checkAppVersion(platform: $platform, version: $version)
  }
`);

export const IP_TO_ADDRESS_QUERY = gql(`
  query IpToAddress($ipAddress: String!) {
    ipToAddress(ipAddress: $ipAddress) {
      id
      latitude
      longitude
      mapsLink
      fullAddress
      street
      city
      administrativeDivision
      zipCode
      countryCode
      country
    }
  }
`);
