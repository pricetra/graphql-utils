import { gql } from "@apollo/client";

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

export const ADDRESS_AUTOCOMPLETE_QUERY = gql(`
  query AddressAutocomplete($input: String!, $locationBias: LocationInput) {
    addressAutocomplete(input: $input, locationBias: $locationBias) {
      place
      placeId
      addressText
    }
  }
`);

export const ADDRESS_FROM_RAW_STRING = gql(`
  query AddressFromRawString($fullAddress: String!) {
    addressFromRawString(fullAddress: $fullAddress) {
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

export const ADDRESS_FROM_PLACE_ID = gql(`
  query AddressFromPlaceId($placeId: String!) {
    addressFromPlaceId(placeId: $placeId) {
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
