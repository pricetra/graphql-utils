import { gql } from '@apollo/client';

export const UPDATE_PRODUCT_NUTRITION_MUTATION = gql(`
  mutation UpdateProductNutritionData($productId: ID!) {
    updateProductNutritionData(productId: $productId) {
      productId
      openfoodfactsUpdatedAt
      createdAt
      updatedAt
    }
  }
`);
