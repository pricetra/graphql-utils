import { gql } from "@apollo/client";

export const CREATE_STOREFRONT_BANNER_ITEMS_MUTATION = gql(`
  mutation CreateStorefrontBannerItems($input: CreateStorefrontBannerInput!) {
    createStorefrontBannerItems(input: $input) {
      id
      bannerId
      imageId
      link
      isExternal
      title
      description
      sortOrder
      createdAt
      updatedAt
    }
  }
`);

export const APPEND_STOREFRONT_BANNER_ITEMS_MUTATION = gql(`
  mutation AppendStorefrontBannerItems($input: CreateStorefrontBannerInput!) {
    appendStorefrontBannerItems(input: $input) {
      id
      bannerId
      imageId
      link
      isExternal
      title
      description
      sortOrder
      createdAt
      updatedAt
    }
  }
`);

export const UPDATE_STOREFRONT_BANNER_ITEM_MUTATION = gql(`
  mutation UpdateStorefrontBannerItem($input: UpdateStorefrontBannerItemInput!) {
    updateStorefrontBannerItem(input: $input) {
      id
      bannerId
      imageId
      link
      isExternal
      title
      description
      sortOrder
      createdAt
      updatedAt
    }
  }
`);

export const DELETE_STOREFRONT_BANNER_ITEM_MUTATION = gql(`
  mutation DeleteStorefrontBannerItem($bannerItemId: ID!) {
    deleteStorefrontBannerItem(bannerItemId: $bannerItemId) {
      id
      bannerId
      imageId
      link
      isExternal
      title
      description
      sortOrder
      createdAt
      updatedAt
    }
  }
`);

export const DELETE_ALL_STOREFRONT_BANNER_ITEMS_MUTATION = gql(`
  mutation DeleteAllStorefrontBannerItems($storefrontBannerId: ID!) {
    deleteAllStorefrontBannerItems(storefrontBannerId: $storefrontBannerId)
  }
`);
