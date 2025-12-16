"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ADD_BRANCH_TO_LIST_MUTATION: () => ADD_BRANCH_TO_LIST_MUTATION,
  ADD_GROCERY_LIST_ITEMS_MUTATION: () => ADD_GROCERY_LIST_ITEMS_MUTATION,
  ADD_TO_LIST_MUTATION: () => ADD_TO_LIST_MUTATION,
  ALL_BRANCHES_QUERY: () => ALL_BRANCHES_QUERY,
  ALL_BRANDS_QUERY: () => ALL_BRANDS_QUERY,
  ALL_PRODUCTS_QUERY: () => ALL_PRODUCTS_QUERY,
  ALL_STORES_QUERY: () => ALL_STORES_QUERY,
  AddBranchToListDocument: () => AddBranchToListDocument,
  AddGroceryListItemDocument: () => AddGroceryListItemDocument,
  AddToListDocument: () => AddToListDocument,
  AllBranchesDocument: () => AllBranchesDocument,
  AllBrandsDocument: () => AllBrandsDocument,
  AllProductsDocument: () => AllProductsDocument,
  AllStoresDocument: () => AllStoresDocument,
  AuthDeviceType: () => AuthDeviceType,
  AuthPlatformType: () => AuthPlatformType,
  BARCODE_SCAN_QUERY: () => BARCODE_SCAN_QUERY,
  BRANCHES_WITH_PRODUCTS_QUERY: () => BRANCHES_WITH_PRODUCTS_QUERY,
  BRANCH_QUERY: () => BRANCH_QUERY,
  BULK_ADD_BRANCHES_TO_LIST_MUTATION: () => BULK_ADD_BRANCHES_TO_LIST_MUTATION,
  BarcodeScanDocument: () => BarcodeScanDocument,
  BranchDocument: () => BranchDocument,
  BranchesWithProductsDocument: () => BranchesWithProductsDocument,
  BulkAddBranchesToListDocument: () => BulkAddBranchesToListDocument,
  CATEGORY_SEARCH_QUERY: () => CATEGORY_SEARCH_QUERY,
  CHECK_APP_VERSION_QUERY: () => CHECK_APP_VERSION_QUERY,
  COUNT_GROCERY_LIST_ITEMS_QUERY: () => COUNT_GROCERY_LIST_ITEMS_QUERY,
  CREATE_BRANCH_MUTATION: () => CREATE_BRANCH_MUTATION,
  CREATE_BRANCH_WITH_FULL_ADDRESS_MUTATION: () => CREATE_BRANCH_WITH_FULL_ADDRESS_MUTATION,
  CREATE_CATEGORY_MUTATION: () => CREATE_CATEGORY_MUTATION,
  CREATE_PRICE_MUTATION: () => CREATE_PRICE_MUTATION,
  CREATE_PRODUCT_MUTATION: () => CREATE_PRODUCT_MUTATION,
  CREATE_STORE_MUTATION: () => CREATE_STORE_MUTATION,
  CREATE_USER_MUTATION: () => CREATE_USER_MUTATION,
  CategorySearchDocument: () => CategorySearchDocument,
  CheckAppVersionDocument: () => CheckAppVersionDocument,
  CountGroceryListItemsDocument: () => CountGroceryListItemsDocument,
  CreateAccountDocument: () => CreateAccountDocument,
  CreateBranchDocument: () => CreateBranchDocument,
  CreateBranchFromFullAddressDocument: () => CreateBranchFromFullAddressDocument,
  CreateCategoryDocument: () => CreateCategoryDocument,
  CreatePriceDocument: () => CreatePriceDocument,
  CreateProductDocument: () => CreateProductDocument,
  CreateStoreDocument: () => CreateStoreDocument,
  DEFAULT_GROCERY_LIST_ITEMS_QUERY: () => DEFAULT_GROCERY_LIST_ITEMS_QUERY,
  DELETE_GROCERY_LIST_ITEMS_MUTATION: () => DELETE_GROCERY_LIST_ITEMS_MUTATION,
  DefaultGroceryListItemsDocument: () => DefaultGroceryListItemsDocument,
  DeleteGroceryListItemDocument: () => DeleteGroceryListItemDocument,
  EXTRACT_AND_CREATE_PRODUCT_FIELDS_QUERY: () => EXTRACT_AND_CREATE_PRODUCT_FIELDS_QUERY,
  EXTRACT_PRODUCT_FIELDS_QUERY: () => EXTRACT_PRODUCT_FIELDS_QUERY,
  ExtractAndCreateProductDocument: () => ExtractAndCreateProductDocument,
  ExtractProductFieldsDocument: () => ExtractProductFieldsDocument,
  FIND_BRANCHES_BY_DISTANCE_QUERY: () => FIND_BRANCHES_BY_DISTANCE_QUERY,
  FIND_BRANCH_QUERY: () => FIND_BRANCH_QUERY,
  FIND_STORE_QUERY: () => FIND_STORE_QUERY,
  FavoriteBranchesWithPricesDocument: () => FavoriteBranchesWithPricesDocument,
  FindBranchDocument: () => FindBranchDocument,
  FindBranchesByDistanceDocument: () => FindBranchesByDistanceDocument,
  FindStoreDocument: () => FindStoreDocument,
  GET_ALL_BRANCH_LISTS_BY_LIST_ID: () => GET_ALL_BRANCH_LISTS_BY_LIST_ID,
  GET_ALL_COUNTRIES_QUERY: () => GET_ALL_COUNTRIES_QUERY,
  GET_ALL_LISTS: () => GET_ALL_LISTS,
  GET_ALL_PRODUCT_LISTS_BY_LIST_ID: () => GET_ALL_PRODUCT_LISTS_BY_LIST_ID,
  GET_ALL_USERS_QUERY: () => GET_ALL_USERS_QUERY,
  GET_CATEGORIES_QUERY: () => GET_CATEGORIES_QUERY,
  GET_CATEGORY_QUERY: () => GET_CATEGORY_QUERY,
  GET_FAVORITE_BRANCHES_WITH_PRICE_DATA_QUERY: () => GET_FAVORITE_BRANCHES_WITH_PRICE_DATA_QUERY,
  GET_GROCERY_LIST_ITEMS_QUERY: () => GET_GROCERY_LIST_ITEMS_QUERY,
  GET_PRODUCT_NUTRITION_DATA_QUERY: () => GET_PRODUCT_NUTRITION_DATA_QUERY,
  GET_PRODUCT_STOCKS_QUERY: () => GET_PRODUCT_STOCKS_QUERY,
  GET_STOCK_BY_ID: () => GET_STOCK_BY_ID,
  GET_STOCK_FROM_PRODUCT_AND_BRANCH_ID_QUERY: () => GET_STOCK_FROM_PRODUCT_AND_BRANCH_ID_QUERY,
  GOOGLE_OAUTH_QUERY: () => GOOGLE_OAUTH_QUERY,
  GROCERY_LISTS_QUERY: () => GROCERY_LISTS_QUERY,
  GetAllBranchListsByListIdDocument: () => GetAllBranchListsByListIdDocument,
  GetAllCountriesDocument: () => GetAllCountriesDocument,
  GetAllListsDocument: () => GetAllListsDocument,
  GetAllProductListsByListIdDocument: () => GetAllProductListsByListIdDocument,
  GetAllUsersDocument: () => GetAllUsersDocument,
  GetCategoriesDocument: () => GetCategoriesDocument,
  GetCategoryDocument: () => GetCategoryDocument,
  GetProductNutritionDataDocument: () => GetProductNutritionDataDocument,
  GetProductStocksDocument: () => GetProductStocksDocument,
  GetStockFromProductAndBranchIdDocument: () => GetStockFromProductAndBranchIdDocument,
  GoogleOAuthDocument: () => GoogleOAuthDocument,
  GroceryListItemsDocument: () => GroceryListItemsDocument,
  GroceryListsDocument: () => GroceryListsDocument,
  IP_TO_ADDRESS_QUERY: () => IP_TO_ADDRESS_QUERY,
  IpToAddressDocument: () => IpToAddressDocument,
  LOGIN_INTERNAL_QUERY: () => LOGIN_INTERNAL_QUERY,
  LOGOUT_MUTATION: () => LOGOUT_MUTATION,
  ListType: () => ListType,
  LoginInternalDocument: () => LoginInternalDocument,
  LogoutDocument: () => LogoutDocument,
  MARK_GROCERY_ITEM_MUTATION: () => MARK_GROCERY_ITEM_MUTATION,
  ME_QUERY: () => ME_QUERY,
  MY_PRODUCT_BILLING_DATA_QUERY: () => MY_PRODUCT_BILLING_DATA_QUERY,
  MY_PRODUCT_VIEW_HISTORY_QUERY: () => MY_PRODUCT_VIEW_HISTORY_QUERY,
  MY_SEARCH_HISTORY_QUERY: () => MY_SEARCH_HISTORY_QUERY,
  MarkGroceryListItemDocument: () => MarkGroceryListItemDocument,
  MeDocument: () => MeDocument,
  MyProductBillingDataDocument: () => MyProductBillingDataDocument,
  MyProductViewHistoryDocument: () => MyProductViewHistoryDocument,
  MySearchHistoryDocument: () => MySearchHistoryDocument,
  OrderByType: () => OrderByType,
  POPULAR_PRODUCTS_QUERY: () => POPULAR_PRODUCTS_QUERY,
  POPULAR_SEARCH_KEYWORDS_QUERY: () => POPULAR_SEARCH_KEYWORDS_QUERY,
  POST_AUTH_USER_DATA_QUERIES: () => POST_AUTH_USER_DATA_QUERIES,
  PRICE_CHANGE_HISTORY_QUERY: () => PRICE_CHANGE_HISTORY_QUERY,
  PRODUCT_BILLING_DATA_BY_USER_ID_QUERY: () => PRODUCT_BILLING_DATA_BY_USER_ID_QUERY,
  PRODUCT_BY_ID_QUERY: () => PRODUCT_BY_ID_QUERY,
  PRODUCT_SEARCH_QUERY: () => PRODUCT_SEARCH_QUERY,
  PRODUCT_SUMMARY_QUERY: () => PRODUCT_SUMMARY_QUERY,
  PopularProductsDocument: () => PopularProductsDocument,
  PopularSearchKeywordsDocument: () => PopularSearchKeywordsDocument,
  PostAuthUserDataDocument: () => PostAuthUserDataDocument,
  PriceChangeHistoryDocument: () => PriceChangeHistoryDocument,
  ProductBillingDataByUserIdDocument: () => ProductBillingDataByUserIdDocument,
  ProductDocument: () => ProductDocument,
  ProductSearchDocument: () => ProductSearchDocument,
  ProductSummaryDocument: () => ProductSummaryDocument,
  REGISTER_EXPO_PUSH_TOKEN: () => REGISTER_EXPO_PUSH_TOKEN,
  REMOVE_BRANCH_FROM_LIST_MUTATION: () => REMOVE_BRANCH_FROM_LIST_MUTATION,
  REMOVE_FROM_LIST_BY_PRODUCT_ID_MUTATION: () => REMOVE_FROM_LIST_BY_PRODUCT_ID_MUTATION,
  REMOVE_FROM_LIST_MUTATION: () => REMOVE_FROM_LIST_MUTATION,
  REQUEST_RESET_PASSWORD_MUTATION: () => REQUEST_RESET_PASSWORD_MUTATION,
  RESEND_VERIFICATION_MUTATION: () => RESEND_VERIFICATION_MUTATION,
  RegisterExpoPushTokenDocument: () => RegisterExpoPushTokenDocument,
  RemoveBranchFromListDocument: () => RemoveBranchFromListDocument,
  RemoveFromListDocument: () => RemoveFromListDocument,
  RemoveFromListWithProductIdDocument: () => RemoveFromListWithProductIdDocument,
  RequestResetPasswordDocument: () => RequestResetPasswordDocument,
  ResendVerificationDocument: () => ResendVerificationDocument,
  SANITIZE_PRODUCT_MUTATION: () => SANITIZE_PRODUCT_MUTATION,
  SEARCH_KEYWORDS_QUERY: () => SEARCH_KEYWORDS_QUERY,
  SanitizeProductDocument: () => SanitizeProductDocument,
  SearchKeywordsDocument: () => SearchKeywordsDocument,
  StockDocument: () => StockDocument,
  UPDATE_GROCERY_LIST_ITEMS_MUTATION: () => UPDATE_GROCERY_LIST_ITEMS_MUTATION,
  UPDATE_PASSWORD_WITH_RESET_CODE_MUTATION: () => UPDATE_PASSWORD_WITH_RESET_CODE_MUTATION,
  UPDATE_PRODUCT_MUTATION: () => UPDATE_PRODUCT_MUTATION,
  UPDATE_PRODUCT_NUTRITION_MUTATION: () => UPDATE_PRODUCT_NUTRITION_MUTATION,
  UPDATE_PROFILE_MUTATION: () => UPDATE_PROFILE_MUTATION,
  UPDATE_USER_BY_ID_MUTATION: () => UPDATE_USER_BY_ID_MUTATION,
  UpdateGroceryListItemDocument: () => UpdateGroceryListItemDocument,
  UpdatePasswordWithResetCodeDocument: () => UpdatePasswordWithResetCodeDocument,
  UpdateProductDocument: () => UpdateProductDocument,
  UpdateProductNutritionDataDocument: () => UpdateProductNutritionDataDocument,
  UpdateProfileDocument: () => UpdateProfileDocument,
  UpdateUserByIdDocument: () => UpdateUserByIdDocument,
  UserFieldsFragmentDoc: () => UserFieldsFragmentDoc,
  UserFragment: () => UserFragment,
  UserRole: () => UserRole,
  VERIFY_EMAIL_MUTATION: () => VERIFY_EMAIL_MUTATION,
  VERIFY_PASSWORD_RESET_CODE_QUERY: () => VERIFY_PASSWORD_RESET_CODE_QUERY,
  VerifyEmailDocument: () => VerifyEmailDocument,
  VerifyPasswordResetCodeDocument: () => VerifyPasswordResetCodeDocument,
  WEIGHT_COMPONENTS_FROM_CATEGORY_ID_QUERY: () => WEIGHT_COMPONENTS_FROM_CATEGORY_ID_QUERY,
  WeightComponentsFromCategoryIdDocument: () => WeightComponentsFromCategoryIdDocument,
  graphql: () => graphql,
  isFragmentReady: () => isFragmentReady,
  makeFragmentData: () => makeFragmentData,
  useFragment: () => useFragment
});
module.exports = __toCommonJS(src_exports);

// src/types/fragment-masking.ts
function useFragment(_documentNode, fragmentType) {
  return fragmentType;
}
function makeFragmentData(data, _fragment) {
  return data;
}
function isFragmentReady(queryNode, fragmentNode, data) {
  const deferredFields = queryNode.__meta__?.deferredFields;
  if (!deferredFields) return true;
  const fragDef = fragmentNode.definitions[0];
  const fragName = fragDef?.name?.value;
  const fields = fragName && deferredFields[fragName] || [];
  return fields.length > 0 && fields.every((field) => data && field in data);
}

// src/types/graphql.ts
var AuthDeviceType = /* @__PURE__ */ ((AuthDeviceType2) => {
  AuthDeviceType2["Android"] = "android";
  AuthDeviceType2["Ios"] = "ios";
  AuthDeviceType2["Other"] = "other";
  AuthDeviceType2["Unknown"] = "unknown";
  AuthDeviceType2["Web"] = "web";
  return AuthDeviceType2;
})(AuthDeviceType || {});
var AuthPlatformType = /* @__PURE__ */ ((AuthPlatformType2) => {
  AuthPlatformType2["Apple"] = "APPLE";
  AuthPlatformType2["Google"] = "GOOGLE";
  AuthPlatformType2["Internal"] = "INTERNAL";
  return AuthPlatformType2;
})(AuthPlatformType || {});
var ListType = /* @__PURE__ */ ((ListType2) => {
  ListType2["Favorites"] = "FAVORITES";
  ListType2["Personal"] = "PERSONAL";
  ListType2["WatchList"] = "WATCH_LIST";
  return ListType2;
})(ListType || {});
var OrderByType = /* @__PURE__ */ ((OrderByType2) => {
  OrderByType2["Asc"] = "ASC";
  OrderByType2["Desc"] = "DESC";
  return OrderByType2;
})(OrderByType || {});
var UserRole = /* @__PURE__ */ ((UserRole2) => {
  UserRole2["Admin"] = "ADMIN";
  UserRole2["Consumer"] = "CONSUMER";
  UserRole2["Contributor"] = "CONTRIBUTOR";
  UserRole2["SuperAdmin"] = "SUPER_ADMIN";
  return UserRole2;
})(UserRole || {});
var UserFieldsFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "UserFields" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "User" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authDevice" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authPlatform" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authStateId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "role" } }] } }] };
var UpdateUserByIdDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "UpdateUserById" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "userId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "UpdateUserFull" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "updateUserById" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "userId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "userId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "phoneNumber" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }, { "kind": "Field", "name": { "kind": "Name", "value": "birthDate" } }, { "kind": "Field", "name": { "kind": "Name", "value": "bio" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "role" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }] } }] } }] };
var CreateBranchFromFullAddressDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "CreateBranchFromFullAddress" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "storeId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "fullAddress" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createBranchWithFullAddress" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "storeId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "storeId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "fullAddress" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "fullAddress" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }] } }] } }] } }] };
var CreateBranchDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "CreateBranch" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "CreateBranch" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createBranch" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }] } }] } }] } }] };
var CreateCategoryDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "CreateCategory" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "CreateCategory" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createCategory" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryAlias" } }, { "kind": "Field", "name": { "kind": "Name", "value": "depth" } }] } }] } }] };
var AddGroceryListItemDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "AddGroceryListItem" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "groceryListId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "CreateGroceryListItemInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "addGroceryListItem" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "groceryListId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "groceryListId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] };
var UpdateGroceryListItemDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "UpdateGroceryListItem" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "groceryListItemId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "CreateGroceryListItemInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "updateGroceryListItem" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "groceryListItemId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "groceryListItemId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] };
var DeleteGroceryListItemDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "DeleteGroceryListItem" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "groceryListItemId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "deleteGroceryListItem" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "groceryListItemId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "groceryListItemId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] };
var MarkGroceryListItemDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "MarkGroceryListItem" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "groceryListItemId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "completed" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Boolean" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "markGroceryListItem" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "groceryListItemId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "groceryListItemId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "completed" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "completed" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "completed" } }] } }] } }] };
var AddToListDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "AddToList" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "stockId" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "addToList" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "listId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "productId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "stockId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "stockId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "userId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "listId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "stockId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }] };
var RemoveFromListDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "RemoveFromList" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "productListId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "removeFromList" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "listId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "productListId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "productListId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "userId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "listId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "stockId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }] };
var RemoveFromListWithProductIdDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "RemoveFromListWithProductId" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "stockId" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "removeFromListWithProductId" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "listId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "productId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "stockId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "stockId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "userId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "listId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "stockId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }] };
var AddBranchToListDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "AddBranchToList" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "branchId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "addBranchToList" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "listId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "branchId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "branchId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "userId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "listId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }] };
var BulkAddBranchesToListDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "BulkAddBranchesToList" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "branchIds" } }, "type": { "kind": "NonNullType", "type": { "kind": "ListType", "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "bulkAddBranchesToList" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "listId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "branchIds" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "branchIds" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "userId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "listId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }] };
var RemoveBranchFromListDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "RemoveBranchFromList" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "branchListId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "removeBranchFromList" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "listId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "branchListId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "branchListId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "userId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "listId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }] };
var CreatePriceDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "CreatePrice" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "CreatePrice" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createPrice" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "amount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "currencyCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "stockId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }] } }] } }] };
var UpdateProductNutritionDataDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "UpdateProductNutritionData" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "updateProductNutritionData" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "productId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "openfoodfactsUpdatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }] } }] } }] };
var CreateProductDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "CreateProduct" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "CreateProduct" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createProduct" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "model" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }] } }] } }] };
var UpdateProductDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "UpdateProduct" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "UpdateProduct" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "updateProduct" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "model" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }] } }] } }] };
var ExtractAndCreateProductDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "ExtractAndCreateProduct" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "barcode" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "base64Image" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "extractAndCreateProduct" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "barcode" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "barcode" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "base64Image" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "base64Image" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }] } }] } }] };
var SanitizeProductDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "SanitizeProduct" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "sanitizeProduct" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "model" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryAlias" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "approximateWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "netWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "views" } }] } }] } }] };
var CreateStoreDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "CreateStore" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "CreateStore" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createStore" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "logo" } }, { "kind": "Field", "name": { "kind": "Name", "value": "website" } }] } }] } }] };
var CreateAccountDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "CreateAccount" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "email" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "name" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "password" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createAccount" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "email" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "email" } } }, { "kind": "ObjectField", "name": { "kind": "Name", "value": "name" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "name" } } }, { "kind": "ObjectField", "name": { "kind": "Name", "value": "password" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "password" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "phoneNumber" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authPlatform" } }, { "kind": "Field", "name": { "kind": "Name", "value": "role" } }] } }] } }] };
var VerifyEmailDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "VerifyEmail" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "verificationCode" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "verifyEmail" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "verificationCode" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "verificationCode" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authPlatform" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authStateId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "role" } }] } }] } }] };
var ResendVerificationDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "ResendVerification" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "email" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "resendEmailVerificationCode" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "email" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "email" } } }] }] } }] };
var LogoutDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "Logout" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "logout" } }] } }] };
var UpdateProfileDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "UpdateProfile" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "UpdateUser" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "updateProfile" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authPlatform" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authStateId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "role" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "birthDate" } }, { "kind": "Field", "name": { "kind": "Name", "value": "phoneNumber" } }, { "kind": "Field", "name": { "kind": "Name", "value": "bio" } }] } }] } }] };
var RequestResetPasswordDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "RequestResetPassword" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "email" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "requestPasswordReset" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "email" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "email" } } }] }] } }] };
var UpdatePasswordWithResetCodeDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "UpdatePasswordWithResetCode" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "email" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "code" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "newPassword" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "updatePasswordWithResetCode" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "email" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "email" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "code" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "code" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "newPassword" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "newPassword" } } }] }] } }] };
var RegisterExpoPushTokenDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "RegisterExpoPushToken" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "expoPushToken" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "registerExpoPushToken" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "expoPushToken" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "expoPushToken" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authPlatform" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authStateId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expoPushToken" } }, { "kind": "Field", "name": { "kind": "Name", "value": "role" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }] } }] } }] } }] };
var GetAllUsersDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetAllUsers" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "PaginatorInput" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "filters" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "UserFilter" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "getAllUsers" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "paginator" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "filters" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "filters" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "users" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "phoneNumber" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }, { "kind": "Field", "name": { "kind": "Name", "value": "birthDate" } }, { "kind": "Field", "name": { "kind": "Name", "value": "bio" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "role" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "paginator" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "next" } }, { "kind": "Field", "name": { "kind": "Name", "value": "page" } }, { "kind": "Field", "name": { "kind": "Name", "value": "prev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "total" } }, { "kind": "Field", "name": { "kind": "Name", "value": "numPages" } }] } }] } }] } }] };
var ProductBillingDataByUserIdDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "ProductBillingDataByUserId" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "userId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "PaginatorInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "productBillingDataByUserId" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "userId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "userId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "paginator" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "data" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "rate" } }, { "kind": "Field", "name": { "kind": "Name", "value": "userId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "user" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "product" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "paidAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "billingRateType" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "paginator" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "next" } }, { "kind": "Field", "name": { "kind": "Name", "value": "page" } }, { "kind": "Field", "name": { "kind": "Name", "value": "prev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "total" } }, { "kind": "Field", "name": { "kind": "Name", "value": "numPages" } }] } }] } }] } }] };
var AllBranchesDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "AllBranches" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "storeId" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "storeSlug" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "PaginatorInput" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "search" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "location" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "LocationInput" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "allBranches" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "storeId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "storeId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "storeSlug" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "storeSlug" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "paginator" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "search" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "search" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "location" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "location" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "branches" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeSlug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "distance" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "paginator" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "next" } }, { "kind": "Field", "name": { "kind": "Name", "value": "page" } }, { "kind": "Field", "name": { "kind": "Name", "value": "prev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "total" } }, { "kind": "Field", "name": { "kind": "Name", "value": "numPages" } }] } }] } }] } }] };
var BranchDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "Branch" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "branchId" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "branchSlug" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "storeId" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "storeSlug" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "findBranch" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "branchId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "slug" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "branchSlug" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "storeId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "storeId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "storeSlug" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "storeSlug" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeSlug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "findStore" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "storeId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "slug" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "storeSlug" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "logo" } }, { "kind": "Field", "name": { "kind": "Name", "value": "website" } }] } }] } }] };
var FindBranchDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "FindBranch" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "branchId" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "branchSlug" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "storeId" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "storeSlug" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "findBranch" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "branchId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "slug" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "branchSlug" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "storeId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "storeId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "storeSlug" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "storeSlug" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeSlug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }] } }] } }] } }] };
var FindBranchesByDistanceDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "FindBranchesByDistance" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "lat" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Float" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "lon" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Float" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "radiusMeters" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "findBranchesByDistance" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "lat" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "lat" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "lon" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "lon" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "radiusMeters" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "radiusMeters" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeSlug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "store" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "website" } }, { "kind": "Field", "name": { "kind": "Name", "value": "logo" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "distance" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }] } }] } }] } }] };
var FavoriteBranchesWithPricesDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "FavoriteBranchesWithPrices" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "getFavoriteBranchesWithPrices" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "productId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branch" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeSlug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "store" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "logo" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "distance" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "stock" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPriceId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPrice" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "amount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "currencyCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sale" } }, { "kind": "Field", "name": { "kind": "Name", "value": "originalPrice" } }, { "kind": "Field", "name": { "kind": "Name", "value": "condition" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expiresAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "unitType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }] } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "approximatePrice" } }] } }] } }] };
var AllBrandsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "AllBrands" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "joinStock" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Boolean" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "allBrands" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "joinStock" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "joinStock" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "products" } }] } }] } }] };
var GetCategoriesDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetCategories" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "depth" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "parentId" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "getCategories" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "depth" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "depth" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "parentId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "parentId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryAlias" } }, { "kind": "Field", "name": { "kind": "Name", "value": "depth" } }] } }] } }] };
var CategorySearchDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "CategorySearch" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "search" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "quickSearchMode" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Boolean" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "categorySearch" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "search" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "search" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "quickSearchMode" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "quickSearchMode" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }] } }] } }] };
var GetCategoryDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetCategory" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "getCategory" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryAlias" } }] } }] } }] };
var GroceryListsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GroceryLists" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "groceryLists" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "default" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }] };
var GroceryListItemsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GroceryListItems" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "groceryListId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "filters" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "GroceryListItemsFilters" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "groceryListItems" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "groceryListId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "groceryListId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "filters" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "filters" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "groceryListId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "product" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityType" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantity" } }, { "kind": "Field", "name": { "kind": "Name", "value": "unit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "completed" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }] };
var DefaultGroceryListItemsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "DefaultGroceryListItems" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "filters" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "GroceryListItemsFilters" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "defaultGroceryListItems" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "filters" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "filters" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "groceryListId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "product" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityType" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantity" } }, { "kind": "Field", "name": { "kind": "Name", "value": "unit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "completed" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }] };
var CountGroceryListItemsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "CountGroceryListItems" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "groceryListId" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "includeCompleted" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Boolean" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "countGroceryListItems" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "groceryListId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "groceryListId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "includeCompleted" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "includeCompleted" } } }] }] } }] };
var GetAllListsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetAllLists" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "listType" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ListType" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "getAllLists" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "listType" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "listType" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "userId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productList" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "listId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "stockId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchList" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "listId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }] } }] };
var GetAllProductListsByListIdDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetAllProductListsByListId" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "getAllProductListsByListId" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "listId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "listId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "userId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "stockId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "product" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "model" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "approximateWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "netWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "stock" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "store" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "logo" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branch" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPriceId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPrice" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "amount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "currencyCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sale" } }, { "kind": "Field", "name": { "kind": "Name", "value": "originalPrice" } }, { "kind": "Field", "name": { "kind": "Name", "value": "condition" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expiresAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "unitType" } }] } }] } }] } }] } }] };
var GetAllBranchListsByListIdDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetAllBranchListsByListId" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "getAllBranchListsByListId" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "listId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "listId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "listId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branch" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeSlug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "store" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "logo" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }] };
var GetAllCountriesDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetAllCountries" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "getAllCountries" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivisions" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "cities" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "currency" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "currencyCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "symbol" } }, { "kind": "Field", "name": { "kind": "Name", "value": "symbolNative" } }, { "kind": "Field", "name": { "kind": "Name", "value": "decimals" } }, { "kind": "Field", "name": { "kind": "Name", "value": "numToBasic" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "callingCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "language" } }] } }] } }] };
var CheckAppVersionDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "CheckAppVersion" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "platform" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "AuthDeviceType" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "version" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "checkAppVersion" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "platform" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "platform" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "version" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "version" } } }] }] } }] };
var IpToAddressDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "IpToAddress" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "ipAddress" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "ipToAddress" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "ipAddress" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "ipAddress" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }] } }] } }] };
var PriceChangeHistoryDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "PriceChangeHistory" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "stockId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "PaginatorInput" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "filters" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "PriceHistoryFilter" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "priceChangeHistory" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "productId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "stockId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "stockId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "paginator" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "filters" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "filters" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "prices" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "stockId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "amount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "originalPrice" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sale" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expiresAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "condition" } }, { "kind": "Field", "name": { "kind": "Name", "value": "unitType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "currencyCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "paginator" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "next" } }, { "kind": "Field", "name": { "kind": "Name", "value": "page" } }, { "kind": "Field", "name": { "kind": "Name", "value": "prev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "total" } }, { "kind": "Field", "name": { "kind": "Name", "value": "numPages" } }] } }] } }] } }] };
var GetProductNutritionDataDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetProductNutritionData" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "getProductNutritionData" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "productId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "servingSize" } }, { "kind": "Field", "name": { "kind": "Name", "value": "servingSizeUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "servingSizeValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "ingredientText" } }, { "kind": "Field", "name": { "kind": "Name", "value": "ingredientList" } }, { "kind": "Field", "name": { "kind": "Name", "value": "nutriments" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "salt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "salt100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "saltValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "saltServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "saltUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sugars" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sugars100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sugarsValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sugarsServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sugarsUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "iron" } }, { "kind": "Field", "name": { "kind": "Name", "value": "iron100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "ironValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "ironServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "ironUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "ironLabel" } }, { "kind": "Field", "name": { "kind": "Name", "value": "calcium" } }, { "kind": "Field", "name": { "kind": "Name", "value": "calcium100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "calciumValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "calciumServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "calciumUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "calciumLabel" } }, { "kind": "Field", "name": { "kind": "Name", "value": "cholesterol100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "saturatedFat" } }, { "kind": "Field", "name": { "kind": "Name", "value": "saturatedFat100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "saturatedFatValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "saturatedFatServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "saturatedFatUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fat" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fat100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fatValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fatServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fatUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "transFat" } }, { "kind": "Field", "name": { "kind": "Name", "value": "transFat100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "transFatValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "transFatServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "transFatUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "transFatLabel" } }, { "kind": "Field", "name": { "kind": "Name", "value": "vitaminA" } }, { "kind": "Field", "name": { "kind": "Name", "value": "vitaminA100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "vitaminAValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "vitaminAServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "vitaminAUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "vitaminALabel" } }, { "kind": "Field", "name": { "kind": "Name", "value": "vitaminC" } }, { "kind": "Field", "name": { "kind": "Name", "value": "vitaminC100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "vitaminCValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "vitaminCServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "vitaminCUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "vitaminCLabel" } }, { "kind": "Field", "name": { "kind": "Name", "value": "proteins" } }, { "kind": "Field", "name": { "kind": "Name", "value": "proteins100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "proteinsValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "proteinsServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "proteinsUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fiber" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fiber100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fiberValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fiberServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fiberUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "carbohydrates" } }, { "kind": "Field", "name": { "kind": "Name", "value": "carbohydrates100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "carbohydratesValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "carbohydratesServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "carbohydratesUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "alcohol" } }, { "kind": "Field", "name": { "kind": "Name", "value": "alcohol100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "alcoholValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "alcoholServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "alcoholUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sodium" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sodium100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sodiumValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sodiumServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sodiumUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "potassium100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "polyunsaturatedFat100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "monounsaturatedFat100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "novaGroup" } }, { "kind": "Field", "name": { "kind": "Name", "value": "novaGroup100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "novaGroupServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "energy" } }, { "kind": "Field", "name": { "kind": "Name", "value": "energy100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "energyValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "energyServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "energyUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "energyKcal" } }, { "kind": "Field", "name": { "kind": "Name", "value": "energyKcal100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "energyKcalValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "energyKcalServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "energyKcalUnit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "nutritionScoreFr" } }, { "kind": "Field", "name": { "kind": "Name", "value": "nutritionScoreFr100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "nutritionScoreFrServing" } }, { "kind": "Field", "name": { "kind": "Name", "value": "nutritionScoreUk" } }, { "kind": "Field", "name": { "kind": "Name", "value": "nutritionScoreUk100g" } }, { "kind": "Field", "name": { "kind": "Name", "value": "nutritionScoreUkServing" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "vegan" } }, { "kind": "Field", "name": { "kind": "Name", "value": "vegetarian" } }, { "kind": "Field", "name": { "kind": "Name", "value": "glutenFree" } }, { "kind": "Field", "name": { "kind": "Name", "value": "lactoseFree" } }, { "kind": "Field", "name": { "kind": "Name", "value": "halal" } }, { "kind": "Field", "name": { "kind": "Name", "value": "kosher" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }] } }] } }] };
var BarcodeScanDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "BarcodeScan" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "barcode" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "searchMode" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Boolean" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "location" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "LocationInput" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "barcodeScan" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "barcode" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "barcode" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "searchMode" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "searchMode" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "location" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "location" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "model" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "approximateWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "netWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "stock" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPriceId" } }] } }] } }] } }] };
var ProductDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "Product" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "viewerTrail" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ViewerTrailInput" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "product" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "viewerTrail" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "viewerTrail" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "model" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryAlias" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "approximateWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "netWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "views" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productList" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "listId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "userId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "stockId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }] } }] };
var AllProductsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "AllProducts" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "PaginatorInput" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "search" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ProductSearch" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "allProducts" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "paginator" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "search" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "search" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "products" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "model" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "stock" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "store" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "logo" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branch" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "distance" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPriceId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPrice" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "amount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "currencyCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sale" } }, { "kind": "Field", "name": { "kind": "Name", "value": "originalPrice" } }, { "kind": "Field", "name": { "kind": "Name", "value": "condition" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expiresAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "unitType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "approximateWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "netWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "views" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "paginator" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "next" } }, { "kind": "Field", "name": { "kind": "Name", "value": "page" } }, { "kind": "Field", "name": { "kind": "Name", "value": "prev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "total" } }, { "kind": "Field", "name": { "kind": "Name", "value": "numPages" } }] } }] } }] } }] };
var BranchesWithProductsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "BranchesWithProducts" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "PaginatorInput" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "productLimit" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "filters" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ProductSearch" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "branchesWithProducts" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "paginator" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "productLimit" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "productLimit" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "filters" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "filters" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "branches" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeSlug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "store" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "logo" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "distance" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "products" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "model" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "stock" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPriceId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPrice" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "amount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "currencyCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sale" } }, { "kind": "Field", "name": { "kind": "Name", "value": "originalPrice" } }, { "kind": "Field", "name": { "kind": "Name", "value": "condition" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expiresAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "unitType" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "approximateWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "netWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "views" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "paginator" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "next" } }, { "kind": "Field", "name": { "kind": "Name", "value": "page" } }, { "kind": "Field", "name": { "kind": "Name", "value": "prev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "total" } }, { "kind": "Field", "name": { "kind": "Name", "value": "numPages" } }] } }] } }] } }] };
var ProductSummaryDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "ProductSummary" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "stockId" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "productSummary" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "stockId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "stockId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "store" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branch" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" } }, { "kind": "Field", "name": { "kind": "Name", "value": "price" } }, { "kind": "Field", "name": { "kind": "Name", "value": "priceCurrencyCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "originalPrice" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sale" } }, { "kind": "Field", "name": { "kind": "Name", "value": "saleExpiresAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "priceCreatedAt" } }] } }] } }] };
var ProductSearchDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "ProductSearch" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "PaginatorInput" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "search" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "filters" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ProductSearchFilters" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "productSearch" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "paginator" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "search" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "search" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "filters" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "filters" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "products" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "approximateWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "netWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightType" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "paginator" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "next" } }, { "kind": "Field", "name": { "kind": "Name", "value": "page" } }, { "kind": "Field", "name": { "kind": "Name", "value": "prev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "total" } }, { "kind": "Field", "name": { "kind": "Name", "value": "numPages" } }] } }] } }] } }] };
var ExtractProductFieldsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "ExtractProductFields" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "base64Image" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "extractProductFields" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "base64Image" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "base64Image" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "netWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantity" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }] } }] } }] } }] };
var MyProductViewHistoryDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "MyProductViewHistory" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "PaginatorInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "myProductViewHistory" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "paginator" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "products" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "model" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "stock" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "store" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "logo" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branch" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "distance" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPriceId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPrice" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "amount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "currencyCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sale" } }, { "kind": "Field", "name": { "kind": "Name", "value": "originalPrice" } }, { "kind": "Field", "name": { "kind": "Name", "value": "condition" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expiresAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "unitType" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "approximateWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "netWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "views" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "paginator" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "next" } }, { "kind": "Field", "name": { "kind": "Name", "value": "page" } }, { "kind": "Field", "name": { "kind": "Name", "value": "prev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "total" } }, { "kind": "Field", "name": { "kind": "Name", "value": "numPages" } }] } }] } }] } }] };
var PopularProductsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "PopularProducts" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "PaginatorInput" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "dateRange" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "TimestampRangeBetween" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "popularProducts" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "paginator" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "dateRange" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "dateRange" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "products" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "model" } }, { "kind": "Field", "name": { "kind": "Name", "value": "categoryId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "stock" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "store" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "logo" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branch" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "distance" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPriceId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPrice" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "amount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "currencyCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sale" } }, { "kind": "Field", "name": { "kind": "Name", "value": "originalPrice" } }, { "kind": "Field", "name": { "kind": "Name", "value": "condition" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expiresAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "unitType" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "approximateWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "netWeight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantityType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "views" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "paginator" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "next" } }, { "kind": "Field", "name": { "kind": "Name", "value": "page" } }, { "kind": "Field", "name": { "kind": "Name", "value": "prev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "total" } }, { "kind": "Field", "name": { "kind": "Name", "value": "numPages" } }] } }] } }] } }] };
var WeightComponentsFromCategoryIdDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "WeightComponentsFromCategoryId" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "categoryId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "weightComponentsFromCategoryId" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "categoryId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "categoryId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "weightValue" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightType" } }] } }] } }] };
var MySearchHistoryDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "MySearchHistory" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "PaginatorInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "mySearchHistory" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "paginator" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "searches" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "searchTerm" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "paginator" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "next" } }, { "kind": "Field", "name": { "kind": "Name", "value": "page" } }, { "kind": "Field", "name": { "kind": "Name", "value": "prev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "total" } }, { "kind": "Field", "name": { "kind": "Name", "value": "numPages" } }] } }] } }] } }] };
var PopularSearchKeywordsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "PopularSearchKeywords" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "PaginatorInput" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "dateRange" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "TimestampRangeBetween" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "popularSearchKeywords" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "paginator" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "dateRange" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "dateRange" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "searches" } }, { "kind": "Field", "name": { "kind": "Name", "value": "paginator" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "next" } }, { "kind": "Field", "name": { "kind": "Name", "value": "page" } }, { "kind": "Field", "name": { "kind": "Name", "value": "prev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "total" } }, { "kind": "Field", "name": { "kind": "Name", "value": "numPages" } }] } }] } }] } }] };
var SearchKeywordsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "SearchKeywords" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "search" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "searchKeywords" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "search" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "search" } } }] }] } }] };
var StockDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "Stock" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "stockId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "stock" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "stockId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "stockId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "store" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "logo" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branch" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "distance" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPriceId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPrice" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "amount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "currencyCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sale" } }, { "kind": "Field", "name": { "kind": "Name", "value": "originalPrice" } }, { "kind": "Field", "name": { "kind": "Name", "value": "condition" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expiresAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "unitType" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }] } }] } }] } }] };
var GetStockFromProductAndBranchIdDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetStockFromProductAndBranchId" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "branchId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "getStockFromProductAndBranchId" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "productId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "branchId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "branchId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPriceId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPrice" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "amount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "currencyCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sale" } }, { "kind": "Field", "name": { "kind": "Name", "value": "originalPrice" } }, { "kind": "Field", "name": { "kind": "Name", "value": "condition" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expiresAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "unitType" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }] } }] } }] };
var GetProductStocksDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetProductStocks" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "PaginatorInput" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "location" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "LocationInput" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "getProductStocks" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "paginator" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "productId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "productId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "location" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "location" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "stocks" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "store" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "logo" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branch" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "distance" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPriceId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPrice" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "storeId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "amount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "currencyCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sale" } }, { "kind": "Field", "name": { "kind": "Name", "value": "originalPrice" } }, { "kind": "Field", "name": { "kind": "Name", "value": "condition" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expiresAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "unitType" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "paginator" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "next" } }, { "kind": "Field", "name": { "kind": "Name", "value": "page" } }, { "kind": "Field", "name": { "kind": "Name", "value": "prev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "total" } }, { "kind": "Field", "name": { "kind": "Name", "value": "numPages" } }] } }] } }] } }] };
var AllStoresDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "AllStores" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "PaginatorInput" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "search" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "allStores" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "paginator" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "search" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "search" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "stores" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "logo" } }, { "kind": "Field", "name": { "kind": "Name", "value": "website" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "paginator" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "next" } }, { "kind": "Field", "name": { "kind": "Name", "value": "page" } }, { "kind": "Field", "name": { "kind": "Name", "value": "prev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "total" } }, { "kind": "Field", "name": { "kind": "Name", "value": "numPages" } }] } }] } }] } }] };
var FindStoreDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "FindStore" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "storeId" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "storeSlug" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "findStore" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "storeId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "slug" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "storeSlug" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "logo" } }, { "kind": "Field", "name": { "kind": "Name", "value": "website" } }] } }] } }] };
var LoginInternalDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "LoginInternal" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "email" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "password" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "ipAddress" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "device" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "AuthDeviceType" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "login" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "email" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "email" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "password" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "password" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "ipAddress" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "ipAddress" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "device" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "device" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "token" } }, { "kind": "Field", "name": { "kind": "Name", "value": "user" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authDevice" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authPlatform" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authStateId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expoPushToken" } }, { "kind": "Field", "name": { "kind": "Name", "value": "role" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }] } }] } }] } }] } }] };
var GoogleOAuthDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GoogleOAuth" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "accessToken" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "ipAddress" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "device" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "AuthDeviceType" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "googleOAuth" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "accessToken" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "accessToken" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "ipAddress" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "ipAddress" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "device" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "device" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "token" } }, { "kind": "Field", "name": { "kind": "Name", "value": "user" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authDevice" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authPlatform" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authStateId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expoPushToken" } }, { "kind": "Field", "name": { "kind": "Name", "value": "role" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "isNewUser" } }] } }] } }] };
var VerifyPasswordResetCodeDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "VerifyPasswordResetCode" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "email" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "code" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "verifyPasswordResetCode" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "email" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "email" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "code" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "code" } } }] }] } }] };
var MeDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "Me" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "me" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authDevice" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authPlatform" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authStateId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expoPushToken" } }, { "kind": "Field", "name": { "kind": "Name", "value": "role" } }, { "kind": "Field", "name": { "kind": "Name", "value": "addressId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "address" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "longitude" } }, { "kind": "Field", "name": { "kind": "Name", "value": "mapsLink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fullAddress" } }, { "kind": "Field", "name": { "kind": "Name", "value": "street" } }, { "kind": "Field", "name": { "kind": "Name", "value": "city" } }, { "kind": "Field", "name": { "kind": "Name", "value": "administrativeDivision" } }, { "kind": "Field", "name": { "kind": "Name", "value": "countryCode" } }, { "kind": "Field", "name": { "kind": "Name", "value": "country" } }, { "kind": "Field", "name": { "kind": "Name", "value": "zipCode" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "birthDate" } }, { "kind": "Field", "name": { "kind": "Name", "value": "phoneNumber" } }, { "kind": "Field", "name": { "kind": "Name", "value": "bio" } }] } }] } }] };
var MyProductBillingDataDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "MyProductBillingData" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "PaginatorInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "myProductBillingData" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "paginator" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "paginator" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "data" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "rate" } }, { "kind": "Field", "name": { "kind": "Name", "value": "userId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "user" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "avatar" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "product" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "brand" } }, { "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "category" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "expandedPathname" } }, { "kind": "Field", "name": { "kind": "Name", "value": "path" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "paidAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "billingRateType" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "paginator" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "next" } }, { "kind": "Field", "name": { "kind": "Name", "value": "page" } }, { "kind": "Field", "name": { "kind": "Name", "value": "prev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "total" } }, { "kind": "Field", "name": { "kind": "Name", "value": "numPages" } }] } }] } }] } }] };
var PostAuthUserDataDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "PostAuthUserData" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "listType" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ListType" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "getAllLists" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "listType" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "listType" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "userId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productList" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "listId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "productId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "stockId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchList" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "listId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "branchId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "groceryLists" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "default" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }] };

// src/types/gql.ts
var documents = {
  "\n  mutation UpdateUserById($userId: ID!, $input: UpdateUserFull!) {\n    updateUserById(userId: $userId, input: $input) {\n      id\n      email\n      phoneNumber\n      name\n      avatar\n      birthDate\n      bio\n      active\n      role\n      createdAt\n      updatedAt\n    }\n  }\n": UpdateUserByIdDocument,
  "\n  mutation CreateBranchFromFullAddress($storeId: ID!, $fullAddress: String!) {\n    createBranchWithFullAddress(storeId: $storeId, fullAddress: $fullAddress) {\n      id\n      name\n      addressId\n      storeId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n": CreateBranchFromFullAddressDocument,
  "\n  mutation CreateBranch($input: CreateBranch!) {\n    createBranch(input: $input) {\n      id\n      name\n      addressId\n      storeId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n": CreateBranchDocument,
  "\n  mutation CreateCategory($input: CreateCategory!) {\n    createCategory(input:$input) {\n      id\n      name\n      path\n      expandedPathname\n      categoryAlias\n      depth\n    }\n  }\n": CreateCategoryDocument,
  "\n  mutation AddGroceryListItem($groceryListId: ID!, $input: CreateGroceryListItemInput!) {\n    addGroceryListItem(groceryListId: $groceryListId, input: $input) {\n      id\n    }\n  }\n": AddGroceryListItemDocument,
  "\n  mutation UpdateGroceryListItem($groceryListItemId: ID!, $input: CreateGroceryListItemInput!) {\n    updateGroceryListItem(groceryListItemId: $groceryListItemId, input: $input) {\n      id\n    }\n  }\n": UpdateGroceryListItemDocument,
  "\n  mutation DeleteGroceryListItem($groceryListItemId: ID!) {\n    deleteGroceryListItem(groceryListItemId: $groceryListItemId) {\n      id\n    }\n  }\n": DeleteGroceryListItemDocument,
  "\n  mutation MarkGroceryListItem($groceryListItemId: ID!, $completed: Boolean!) {\n    markGroceryListItem(groceryListItemId: $groceryListItemId, completed:$completed) {\n      id\n      completed\n    }\n  }\n": MarkGroceryListItemDocument,
  "\n  mutation AddToList($listId: ID!, $productId: ID!, $stockId: ID) {\n    addToList(listId: $listId, productId: $productId, stockId: $stockId) {\n      id\n      userId\n      listId\n      productId\n      stockId\n      createdAt\n    }\n  }\n": AddToListDocument,
  "\n  mutation RemoveFromList($listId: ID!, $productListId: ID!) {\n    removeFromList(listId: $listId, productListId: $productListId) {\n      id\n      userId\n      listId\n      productId\n      stockId\n      createdAt\n    }\n  }\n": RemoveFromListDocument,
  "\n  mutation RemoveFromListWithProductId($listId: ID!, $productId: ID!, $stockId: ID) {\n    removeFromListWithProductId(listId: $listId, productId: $productId, stockId: $stockId) {\n      id\n      userId\n      listId\n      productId\n      stockId\n      createdAt\n    }\n  }\n": RemoveFromListWithProductIdDocument,
  "\n  mutation AddBranchToList($listId: ID!, $branchId: ID!) {\n    addBranchToList(listId: $listId, branchId: $branchId) {\n      id\n      userId\n      listId\n      branchId\n      createdAt\n    }\n  }\n": AddBranchToListDocument,
  "\n  mutation BulkAddBranchesToList($listId: ID!, $branchIds: [ID!]!) {\n    bulkAddBranchesToList(listId: $listId, branchIds: $branchIds) {\n      id\n      userId\n      listId\n      branchId\n      createdAt\n    }\n  }\n": BulkAddBranchesToListDocument,
  "\n  mutation RemoveBranchFromList($listId: ID!, $branchListId: ID!) {\n    removeBranchFromList(listId: $listId, branchListId: $branchListId) {\n      id\n      userId\n      listId\n      branchId\n      createdAt\n    }\n  }\n": RemoveBranchFromListDocument,
  "\n  mutation CreatePrice($input: CreatePrice!) {\n    createPrice(input: $input) {\n      id\n      amount\n      currencyCode\n      productId\n      storeId\n      stockId\n      branchId\n    }\n  }\n": CreatePriceDocument,
  "\n  mutation UpdateProductNutritionData($productId: ID!) {\n    updateProductNutritionData(productId: $productId) {\n      productId\n      openfoodfactsUpdatedAt\n      createdAt\n      updatedAt\n    }\n  }\n": UpdateProductNutritionDataDocument,
  "\n  mutation CreateProduct($input: CreateProduct!) {\n    createProduct(input: $input) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n      weightValue\n      weightType\n      createdAt\n      updatedAt\n    }\n  }\n": CreateProductDocument,
  "\n  mutation UpdateProduct($id: ID!, $input: UpdateProduct!) {\n    updateProduct(id: $id, input: $input) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n      weightValue\n      weightType\n      createdAt\n      updatedAt\n    }\n  }\n": UpdateProductDocument,
  "\n  mutation ExtractAndCreateProduct($barcode: String!, $base64Image: String!) {\n    extractAndCreateProduct(barcode: $barcode, base64Image: $base64Image) {\n      id\n      code\n      brand\n      name\n      categoryId\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      description\n    }\n  }\n": ExtractAndCreateProductDocument,
  "\n  mutation SanitizeProduct($id: ID!) {\n    sanitizeProduct(id: $id) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        categoryAlias\n        expandedPathname\n        path\n      }\n      approximateWeight\n      netWeight\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      createdAt\n      updatedAt\n      views\n    }\n  }\n": SanitizeProductDocument,
  "\n  mutation CreateStore($input: CreateStore!) {\n    createStore(input: $input) {\n      id\n      name\n      logo\n      website\n    }\n  }\n": CreateStoreDocument,
  "\n  mutation CreateAccount($email: String!, $name: String!, $password: String!) {\n    createAccount(input: { email: $email, name: $name, password: $password }) {\n      id\n      name\n      email\n      phoneNumber\n      createdAt\n      updatedAt\n      authPlatform\n      role\n    }\n  }\n": CreateAccountDocument,
  "\n  mutation VerifyEmail($verificationCode: String!) {\n    verifyEmail(verificationCode: $verificationCode) {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authPlatform\n      authStateId\n      role\n    }\n  }\n": VerifyEmailDocument,
  "\n  mutation ResendVerification($email: String!) {\n    resendEmailVerificationCode(email: $email)\n  }\n": ResendVerificationDocument,
  "\n  mutation Logout {\n    logout\n  }\n": LogoutDocument,
  "\n  mutation UpdateProfile($input: UpdateUser!) {\n    updateProfile(input: $input) {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authPlatform\n      authStateId\n      role\n      addressId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n      birthDate\n      phoneNumber\n      bio\n    }\n  }\n": UpdateProfileDocument,
  "\n  mutation RequestResetPassword($email: String!) {\n    requestPasswordReset(email: $email)\n  }\n": RequestResetPasswordDocument,
  "\n  mutation UpdatePasswordWithResetCode($email: String!, $code: String!, $newPassword: String!) {\n    updatePasswordWithResetCode(\n      email: $email\n      code: $code\n      newPassword: $newPassword\n    )\n  }\n": UpdatePasswordWithResetCodeDocument,
  "\n  mutation RegisterExpoPushToken($expoPushToken: String!) {\n    registerExpoPushToken(expoPushToken: $expoPushToken) {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authPlatform\n      authStateId\n      expoPushToken\n      role\n      addressId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n": RegisterExpoPushTokenDocument,
  "\n  query GetAllUsers($paginator: PaginatorInput!, $filters: UserFilter) {\n    getAllUsers(paginator:$paginator, filters:$filters) {\n      users {\n        id\n        email\n        phoneNumber\n        name\n        avatar\n        birthDate\n        bio\n        active\n        role\n        createdAt\n        updatedAt\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": GetAllUsersDocument,
  "\n  query ProductBillingDataByUserId($userId: ID!, $paginator: PaginatorInput!) {\n    productBillingDataByUserId(userId: $userId, paginator: $paginator) {\n      data {\n        id\n        rate\n        userId\n        user {\n          id\n          name\n          avatar\n          active\n        }\n        productId\n        product {\n          id\n          name\n          image\n          brand\n          code\n          category {\n            id\n            name\n            expandedPathname\n            path\n          }\n          createdAt\n          updatedAt\n        }\n        createdAt\n        paidAt\n        billingRateType\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": ProductBillingDataByUserIdDocument,
  "\n  query AllBranches($storeId: ID, $storeSlug: String, $paginator: PaginatorInput!, $search: String, $location: LocationInput) {\n    allBranches(storeId: $storeId, storeSlug: $storeSlug, paginator: $paginator, search: $search, location: $location) {\n      branches {\n        id\n        slug\n        name\n        addressId\n        storeId\n        storeSlug\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n          distance\n        }\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": AllBranchesDocument,
  "\n  query Branch($branchId: ID, $branchSlug: String, $storeId: ID, $storeSlug: String) {\n    findBranch(id: $branchId, slug: $branchSlug, storeId: $storeId, storeSlug: $storeSlug) {\n      id\n      slug\n      name\n      addressId\n      storeId\n      storeSlug\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n\n    findStore(id: $storeId, slug: $storeSlug) {\n      id\n      slug\n      name\n      logo\n      website\n    }\n  }\n": BranchDocument,
  "\n  query FindBranch($branchId: ID, $branchSlug: String, $storeId: ID, $storeSlug: String) {\n    findBranch(id: $branchId, slug: $branchSlug, storeId: $storeId, storeSlug: $storeSlug) {\n      id\n      slug\n      name\n      addressId\n      storeId\n      storeSlug\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n": FindBranchDocument,
  "\n  query FindBranchesByDistance($lat: Float!, $lon: Float!, $radiusMeters: Int!) {\n    findBranchesByDistance(lat: $lat, lon: $lon, radiusMeters: $radiusMeters) {\n      id\n      slug\n      name\n      storeId\n      storeSlug\n      store {\n        id\n        slug\n        name\n        website\n        logo\n      }\n      addressId\n      address {\n        id\n        distance\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n": FindBranchesByDistanceDocument,
  "\n  query FavoriteBranchesWithPrices($productId: ID!) {\n    getFavoriteBranchesWithPrices(productId: $productId) {\n      id\n      branchId\n      branch {\n        id\n        slug\n        name\n        storeId\n        storeSlug\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        addressId\n        address {\n          id\n          distance\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n      stock {\n        id\n        productId\n        storeId\n        branchId\n        latestPriceId\n        latestPrice {\n          id\n          productId\n          branchId\n          storeId\n          amount\n          currencyCode\n          createdAt\n          sale\n          originalPrice\n          condition\n          expiresAt\n          unitType\n          createdBy {\n            id\n            name\n            avatar\n          }\n        }\n      }\n      approximatePrice\n    }\n  }\n": FavoriteBranchesWithPricesDocument,
  "\n  query AllBrands($joinStock: Boolean) {\n    allBrands(joinStock: $joinStock) {\n      brand\n      products\n    }\n  }\n": AllBrandsDocument,
  "\n  query GetCategories($depth: Int, $parentId: ID) {\n    getCategories(depth: $depth, parentId: $parentId) {\n      id\n      name\n      path\n      expandedPathname\n      categoryAlias\n      depth\n    }\n  }\n": GetCategoriesDocument,
  "\n  query CategorySearch($search: String!, $quickSearchMode: Boolean) {\n    categorySearch(search: $search, quickSearchMode: $quickSearchMode) {\n      id\n      name\n    }\n  }\n": CategorySearchDocument,
  "\n  query GetCategory($id: ID!) {\n    getCategory(id: $id) {\n      id\n      name\n      path\n      expandedPathname\n      categoryAlias\n    }\n  }\n": GetCategoryDocument,
  "\n  query GroceryLists {\n    groceryLists {\n      id\n      name\n      default\n      createdAt\n    }\n  }\n": GroceryListsDocument,
  "\n  query GroceryListItems($groceryListId: ID!, $filters: GroceryListItemsFilters) {\n    groceryListItems(groceryListId: $groceryListId, filters: $filters) {\n      id\n      groceryListId\n      productId\n      product {\n        id\n        code\n        name\n        image\n        category {\n          id\n          name\n        }\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n      }\n      category\n      weight\n      quantity\n      unit\n      completed\n      createdAt\n    }\n  }\n": GroceryListItemsDocument,
  "\n  query DefaultGroceryListItems($filters: GroceryListItemsFilters) {\n    defaultGroceryListItems(filters: $filters) {\n      id\n      groceryListId\n      productId\n      product {\n        id\n        code\n        name\n        image\n        category {\n          id\n          name\n        }\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n      }\n      category\n      weight\n      quantity\n      unit\n      completed\n      createdAt\n    }\n  }\n": DefaultGroceryListItemsDocument,
  "\n  query CountGroceryListItems($groceryListId: ID, $includeCompleted: Boolean) {\n    countGroceryListItems(groceryListId: $groceryListId, includeCompleted: $includeCompleted)\n  }\n": CountGroceryListItemsDocument,
  "\n  query GetAllLists($listType: ListType) {\n    getAllLists(listType: $listType) {\n      id\n      name\n      type\n      userId\n      createdAt\n      productList {\n        id\n        listId\n        productId\n        stockId\n        createdAt\n      }\n      branchList {\n        id\n        listId\n        branchId\n        createdAt\n      }\n    }\n  }\n": GetAllListsDocument,
  "\n  query GetAllProductListsByListId($listId: ID!) {\n    getAllProductListsByListId(listId: $listId) {\n      id\n      listId\n      userId\n      productId\n      type\n      stockId\n      createdAt\n      product {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n      }\n      stock {\n        id\n        productId\n        storeId\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        branchId\n        branch {\n          id\n          slug\n          name\n          addressId\n          address {\n            id\n            latitude\n            longitude\n            mapsLink\n            fullAddress\n            street\n            city\n            administrativeDivision\n            countryCode\n            country\n            zipCode\n          }\n        }\n        latestPriceId\n        latestPrice {\n          id\n          productId\n          branchId\n          storeId\n          amount\n          currencyCode\n          createdAt\n          sale\n          originalPrice\n          condition\n          expiresAt\n          unitType\n        }\n      }\n    }\n  }\n": GetAllProductListsByListIdDocument,
  "\n  query GetAllBranchListsByListId($listId: ID!) {\n    getAllBranchListsByListId(listId: $listId) {\n      id\n      listId\n      branchId\n      branch {\n        id\n        slug\n        name\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n        storeId\n        storeSlug\n        store {\n          id\n          slug\n          name\n          logo\n        }\n      }\n      createdAt\n    }\n  }\n": GetAllBranchListsByListIdDocument,
  "\n  query GetAllCountries {\n    getAllCountries {\n      code\n      name\n      administrativeDivisions {\n        name\n        cities\n      }\n      currency {\n        currencyCode\n        name\n        symbol\n        symbolNative\n        decimals\n        numToBasic\n      }\n      callingCode\n      language\n    }\n  }\n": GetAllCountriesDocument,
  "\n  query CheckAppVersion($platform: AuthDeviceType!, $version: String!) {\n    checkAppVersion(platform: $platform, version: $version)\n  }\n": CheckAppVersionDocument,
  "\n  query IpToAddress($ipAddress: String!) {\n    ipToAddress(ipAddress: $ipAddress) {\n      id\n      latitude\n      longitude\n      mapsLink\n      fullAddress\n      street\n      city\n      administrativeDivision\n      zipCode\n      countryCode\n      country\n    }\n  }\n": IpToAddressDocument,
  "\n  query PriceChangeHistory($productId: ID!, $stockId: ID!, $paginator: PaginatorInput!, $filters: PriceHistoryFilter) {\n    priceChangeHistory(\n      productId: $productId\n      stockId: $stockId\n      paginator: $paginator\n      filters: $filters\n    ) {\n      prices {\n        id\n        productId\n        stockId\n        branchId\n        storeId\n        amount\n        originalPrice\n        sale\n        expiresAt\n        condition\n        unitType\n        currencyCode\n        createdBy {\n          id\n          name\n          avatar\n        }\n        createdAt\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": PriceChangeHistoryDocument,
  "\n  query GetProductNutritionData($productId: ID!) {\n    getProductNutritionData(productId: $productId) {\n      productId\n      servingSize\n      servingSizeUnit\n      servingSizeValue\n      ingredientText\n      ingredientList\n      nutriments {\n        salt\n        salt100g\n        saltValue\n        saltServing\n        saltUnit\n        sugars\n        sugars100g\n        sugarsValue\n        sugarsServing\n        sugarsUnit\n        iron\n        iron100g\n        ironValue\n        ironServing\n        ironUnit\n        ironLabel\n        calcium\n        calcium100g\n        calciumValue\n        calciumServing\n        calciumUnit\n        calciumLabel\n        cholesterol100g\n        saturatedFat\n        saturatedFat100g\n        saturatedFatValue\n        saturatedFatServing\n        saturatedFatUnit\n        fat\n        fat100g\n        fatValue\n        fatServing\n        fatUnit\n        transFat\n        transFat100g\n        transFatValue\n        transFatServing\n        transFatUnit\n        transFatLabel\n        vitaminA\n        vitaminA100g\n        vitaminAValue\n        vitaminAServing\n        vitaminAUnit\n        vitaminALabel\n        vitaminC\n        vitaminC100g\n        vitaminCValue\n        vitaminCServing\n        vitaminCUnit\n        vitaminCLabel\n        proteins\n        proteins100g\n        proteinsValue\n        proteinsServing\n        proteinsUnit\n        fiber\n        fiber100g\n        fiberValue\n        fiberServing\n        fiberUnit\n        carbohydrates\n        carbohydrates100g\n        carbohydratesValue\n        carbohydratesServing\n        carbohydratesUnit\n        alcohol\n        alcohol100g\n        alcoholValue\n        alcoholServing\n        alcoholUnit\n        sodium\n        sodium100g\n        sodiumValue\n        sodiumServing\n        sodiumUnit\n        potassium100g\n        polyunsaturatedFat100g\n        monounsaturatedFat100g\n        novaGroup\n        novaGroup100g\n        novaGroupServing\n        energy\n        energy100g\n        energyValue\n        energyServing\n        energyUnit\n        energyKcal\n        energyKcal100g\n        energyKcalValue\n        energyKcalServing\n        energyKcalUnit\n        nutritionScoreFr\n        nutritionScoreFr100g\n        nutritionScoreFrServing\n        nutritionScoreUk\n        nutritionScoreUk100g\n        nutritionScoreUkServing\n      }\n      vegan\n      vegetarian\n      glutenFree\n      lactoseFree\n      halal\n      kosher\n      createdAt\n      updatedAt\n    }\n  }\n": GetProductNutritionDataDocument,
  "\n  query BarcodeScan($barcode: String!, $searchMode: Boolean, $location: LocationInput) {\n    barcodeScan(barcode: $barcode, searchMode: $searchMode, location: $location) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n      approximateWeight\n      netWeight\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      createdAt\n      updatedAt\n      stock {\n        id\n        productId\n        storeId\n        branchId\n        latestPriceId\n      }\n    }\n  }\n": BarcodeScanDocument,
  "\n  query Product($productId: ID!, $viewerTrail: ViewerTrailInput) {\n    product(id: $productId, viewerTrail: $viewerTrail) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        categoryAlias\n        expandedPathname\n        path\n      }\n      approximateWeight\n      netWeight\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      createdAt\n      updatedAt\n      views\n      productList {\n        id\n        listId\n        userId\n        productId\n        type\n        stockId\n        createdAt\n      }\n    }\n  }\n": ProductDocument,
  "\n  query AllProducts($paginator: PaginatorInput!, $search: ProductSearch) {\n    allProducts(paginator: $paginator, search: $search) {\n      products {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        stock {\n          id\n          productId\n          storeId\n          store {\n            id\n            slug\n            name\n            logo\n          }\n          branchId\n          branch {\n            id\n            slug\n            name\n            addressId\n            address {\n              id\n              latitude\n              longitude\n              mapsLink\n              fullAddress\n              street\n              city\n              administrativeDivision\n              countryCode\n              country\n              zipCode\n              distance\n            }\n          }\n          latestPriceId\n          latestPrice {\n            id\n            productId\n            branchId\n            storeId\n            amount\n            currencyCode\n            createdAt\n            sale\n            originalPrice\n            condition\n            expiresAt\n            unitType\n            createdBy {\n              id\n              name\n              avatar\n            }\n          }\n          createdBy {\n            id\n            name\n            avatar\n          }\n          updatedBy {\n            id\n            name\n            avatar\n          }\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": AllProductsDocument,
  "\n  query BranchesWithProducts($paginator: PaginatorInput!, $productLimit: Int!, $filters: ProductSearch) {\n    branchesWithProducts(\n      paginator: $paginator\n      productLimit: $productLimit\n      filters: $filters\n    ) {\n      branches {\n        id\n        slug\n        name\n        storeId\n        storeSlug\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        addressId\n        address {\n          id\n          distance\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n        products {\n          id\n          name\n          image\n          description\n          brand\n          code\n          model\n          categoryId\n          category {\n            id\n            name\n            expandedPathname\n            path\n          }\n          stock {\n            id\n            productId\n            storeId\n            branchId\n            latestPriceId\n            latestPrice {\n              id\n              productId\n              branchId\n              storeId\n              amount\n              currencyCode\n              createdAt\n              sale\n              originalPrice\n              condition\n              expiresAt\n              unitType\n            }\n            createdBy {\n              id\n              name\n              avatar\n            }\n            updatedBy {\n              id\n              name\n              avatar\n            }\n          }\n          approximateWeight\n          netWeight\n          weightValue\n          weightType\n          quantityValue\n          quantityType\n          createdAt\n          updatedAt\n          views\n        }\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": BranchesWithProductsDocument,
  "\n  query ProductSummary($productId: ID!, $stockId: ID) {\n    productSummary(id: $productId, stockId: $stockId) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      store\n      branch\n      address\n      price\n      priceCurrencyCode\n      originalPrice\n      sale\n      saleExpiresAt\n      priceCreatedAt\n    }\n  }\n": ProductSummaryDocument,
  "\n  query ProductSearch($paginator: PaginatorInput!, $search: String, $filters: ProductSearchFilters) {\n    productSearch(paginator: $paginator, search: $search, filters: $filters) {\n      products {\n        id\n        code\n        brand\n        name\n        category {\n          id\n          name\n          expandedPathname\n        }\n        quantityValue\n        quantityType\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": ProductSearchDocument,
  "\n  query ExtractProductFields($base64Image: String!) {\n    extractProductFields(base64Image: $base64Image) {\n      brand\n      name\n      description\n      netWeight\n      weight\n      quantity\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n    }\n  }\n": ExtractProductFieldsDocument,
  "\n  query MyProductViewHistory($paginator: PaginatorInput!) {\n    myProductViewHistory(paginator: $paginator) {\n      products {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        stock {\n          id\n          productId\n          storeId\n          store {\n            id\n            slug\n            name\n            logo\n          }\n          branchId\n          branch {\n            id\n            slug\n            name\n            addressId\n            address {\n              id\n              latitude\n              longitude\n              mapsLink\n              fullAddress\n              street\n              city\n              administrativeDivision\n              countryCode\n              country\n              zipCode\n              distance\n            }\n          }\n          latestPriceId\n          latestPrice {\n            id\n            productId\n            branchId\n            storeId\n            amount\n            currencyCode\n            createdAt\n            sale\n            originalPrice\n            condition\n            expiresAt\n            unitType\n          }\n          createdBy {\n            id\n            name\n            avatar\n          }\n          updatedBy {\n            id\n            name\n            avatar\n          }\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": MyProductViewHistoryDocument,
  "\n  query PopularProducts($paginator: PaginatorInput!, $dateRange: TimestampRangeBetween) {\n    popularProducts(paginator: $paginator, dateRange: $dateRange) {\n      products {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        stock {\n          id\n          productId\n          storeId\n          store {\n            id\n            slug\n            name\n            logo\n          }\n          branchId\n          branch {\n            id\n            slug\n            name\n            addressId\n            address {\n              id\n              latitude\n              longitude\n              mapsLink\n              fullAddress\n              street\n              city\n              administrativeDivision\n              countryCode\n              country\n              zipCode\n              distance\n            }\n          }\n          latestPriceId\n          latestPrice {\n            id\n            productId\n            branchId\n            storeId\n            amount\n            currencyCode\n            createdAt\n            sale\n            originalPrice\n            condition\n            expiresAt\n            unitType\n          }\n          createdBy {\n            id\n            name\n            avatar\n          }\n          updatedBy {\n            id\n            name\n            avatar\n          }\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": PopularProductsDocument,
  "\n  query WeightComponentsFromCategoryId($categoryId: ID!) {\n    weightComponentsFromCategoryId(categoryId: $categoryId) {\n      weightValue\n      weightType\n    }\n  }\n": WeightComponentsFromCategoryIdDocument,
  "\n  query MySearchHistory($paginator: PaginatorInput!) {\n    mySearchHistory(paginator:$paginator) {\n      searches {\n        id\n        searchTerm\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": MySearchHistoryDocument,
  "\n  query PopularSearchKeywords($paginator: PaginatorInput!, $dateRange: TimestampRangeBetween) {\n    popularSearchKeywords(paginator:$paginator, dateRange: $dateRange) {\n      searches\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }  \n": PopularSearchKeywordsDocument,
  "\n  query SearchKeywords($search: String!) {\n    searchKeywords(search: $search)\n  }\n": SearchKeywordsDocument,
  "\n  query Stock($stockId: ID!) {\n    stock(stockId: $stockId) {\n      id\n      productId\n      storeId\n      store {\n        slug\n        id\n        name\n        logo\n      }\n      branchId\n      branch {\n        id\n        slug\n        name\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n          distance\n        }\n      }\n      latestPriceId\n      latestPrice {\n        id\n        productId\n        branchId\n        storeId\n        amount\n        currencyCode\n        sale\n        originalPrice\n        condition\n        expiresAt\n        createdAt\n        unitType\n      }\n      createdAt\n      updatedAt\n      createdBy {\n        id\n        name\n        avatar\n      }\n      updatedBy {\n        id\n        name\n        avatar\n      }\n    }\n  }\n": StockDocument,
  "\n  query GetStockFromProductAndBranchId($productId: ID!, $branchId: ID!) {\n    getStockFromProductAndBranchId(productId: $productId, branchId: $branchId) {\n      id\n      productId\n      storeId\n      branchId\n      latestPriceId\n      latestPrice {\n        id\n        productId\n        branchId\n        storeId\n        amount\n        currencyCode\n        sale\n        originalPrice\n        condition\n        expiresAt\n        createdAt\n        unitType\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": GetStockFromProductAndBranchIdDocument,
  "\n  query GetProductStocks($paginator: PaginatorInput!, $productId: ID!, $location: LocationInput) {\n    getProductStocks(paginator: $paginator, productId: $productId, location: $location) {\n      stocks {\n        id\n        productId\n        storeId\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        branchId\n        branch {\n          id\n          slug\n          name\n          address {\n            id\n            latitude\n            longitude\n            mapsLink\n            fullAddress\n            street\n            city\n            administrativeDivision\n            countryCode\n            country\n            zipCode\n            distance\n          }\n        }\n        latestPriceId\n        latestPrice {\n          id\n          productId\n          branchId\n          storeId\n          amount\n          currencyCode\n          sale\n          originalPrice\n          condition\n          expiresAt\n          unitType\n        }\n        createdAt\n        updatedAt\n        createdBy {\n          id\n          name\n          avatar\n        }\n        updatedBy {\n          id\n          name\n          avatar\n        }\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": GetProductStocksDocument,
  "\n  query AllStores($paginator: PaginatorInput!, $search: String) {\n    allStores(paginator: $paginator, search: $search) {\n      stores {\n        id\n        slug\n        name\n        logo\n        website\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": AllStoresDocument,
  "\n  query FindStore($storeId: ID, $storeSlug: String) {\n    findStore(id: $storeId, slug: $storeSlug) {\n      id\n      slug\n      name\n      logo\n      website\n    }\n  }\n": FindStoreDocument,
  "\n  fragment UserFields on User {\n    id\n    name\n    email\n    avatar\n    createdAt\n    updatedAt\n    active\n    authDevice\n    authPlatform\n    authStateId\n    role\n  }\n": UserFieldsFragmentDoc,
  "\n  query LoginInternal(\n    $email: String!\n    $password: String!\n    $ipAddress: String\n    $device: AuthDeviceType\n  ) {\n    login(email: $email, password: $password, ipAddress: $ipAddress, device: $device) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authDevice\n        authPlatform\n        authStateId\n        expoPushToken\n        role\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n    }\n  }\n": LoginInternalDocument,
  "\n  query GoogleOAuth($accessToken: String!, $ipAddress: String, $device: AuthDeviceType) {\n    googleOAuth(accessToken: $accessToken, ipAddress: $ipAddress, device: $device) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authDevice\n        authPlatform\n        authStateId\n        expoPushToken\n        role\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n      isNewUser\n    }\n  }\n": GoogleOAuthDocument,
  "\n  query VerifyPasswordResetCode($email: String!, $code: String!) {\n    verifyPasswordResetCode(email: $email, code: $code)\n  }\n": VerifyPasswordResetCodeDocument,
  "\n  query Me {\n    me {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authDevice\n      authPlatform\n      authStateId\n      expoPushToken\n      role\n      addressId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n      birthDate\n      phoneNumber\n      bio\n    }\n  }\n": MeDocument,
  "\n  query MyProductBillingData($paginator: PaginatorInput!) {\n    myProductBillingData(paginator: $paginator) {\n      data {\n        id\n        rate\n        userId\n        user {\n          id\n          name\n          avatar\n          active\n        }\n        productId\n        product {\n          id\n          name\n          image\n          brand\n          code\n          category {\n            id\n            name\n            expandedPathname\n            path\n          }\n          createdAt\n          updatedAt\n        }\n        createdAt\n        paidAt\n        billingRateType\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": MyProductBillingDataDocument,
  "\n  query PostAuthUserData($listType: ListType) {\n    getAllLists(listType: $listType) {\n      id\n      name\n      type\n      userId\n      createdAt\n      productList {\n        id\n        listId\n        productId\n        stockId\n        createdAt\n      }\n      branchList {\n        id\n        listId\n        branchId\n        createdAt\n      }\n    }\n\n    groceryLists {\n      id\n      name\n      default\n      createdAt\n    }\n  }\n": PostAuthUserDataDocument
};
function graphql(source) {
  return documents[source] ?? {};
}

// src/documents/queries/admin.ts
var import_client = require("@apollo/client");
var GET_ALL_USERS_QUERY = (0, import_client.gql)(`
  query GetAllUsers($paginator: PaginatorInput!, $filters: UserFilter) {
    getAllUsers(paginator:$paginator, filters:$filters) {
      users {
        id
        email
        phoneNumber
        name
        avatar
        birthDate
        bio
        active
        role
        createdAt
        updatedAt
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
var PRODUCT_BILLING_DATA_BY_USER_ID_QUERY = (0, import_client.gql)(`
  query ProductBillingDataByUserId($userId: ID!, $paginator: PaginatorInput!) {
    productBillingDataByUserId(userId: $userId, paginator: $paginator) {
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

// src/documents/queries/branch.ts
var import_client2 = require("@apollo/client");
var ALL_BRANCHES_QUERY = (0, import_client2.gql)(`
  query AllBranches($storeId: ID, $storeSlug: String, $paginator: PaginatorInput!, $search: String, $location: LocationInput) {
    allBranches(storeId: $storeId, storeSlug: $storeSlug, paginator: $paginator, search: $search, location: $location) {
      branches {
        id
        slug
        name
        addressId
        storeId
        storeSlug
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
var BRANCH_QUERY = (0, import_client2.gql)(`
  query Branch($branchId: ID, $branchSlug: String, $storeId: ID, $storeSlug: String) {
    findBranch(id: $branchId, slug: $branchSlug, storeId: $storeId, storeSlug: $storeSlug) {
      id
      slug
      name
      addressId
      storeId
      storeSlug
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

    findStore(id: $storeId, slug: $storeSlug) {
      id
      slug
      name
      logo
      website
    }
  }
`);
var FIND_BRANCH_QUERY = (0, import_client2.gql)(`
  query FindBranch($branchId: ID, $branchSlug: String, $storeId: ID, $storeSlug: String) {
    findBranch(id: $branchId, slug: $branchSlug, storeId: $storeId, storeSlug: $storeSlug) {
      id
      slug
      name
      addressId
      storeId
      storeSlug
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
var FIND_BRANCHES_BY_DISTANCE_QUERY = (0, import_client2.gql)(`
  query FindBranchesByDistance($lat: Float!, $lon: Float!, $radiusMeters: Int!) {
    findBranchesByDistance(lat: $lat, lon: $lon, radiusMeters: $radiusMeters) {
      id
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
    }
  }
`);
var GET_FAVORITE_BRANCHES_WITH_PRICE_DATA_QUERY = (0, import_client2.gql)(`
  query FavoriteBranchesWithPrices($productId: ID!) {
    getFavoriteBranchesWithPrices(productId: $productId) {
      id
      branchId
      branch {
        id
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
          createdBy {
            id
            name
            avatar
          }
        }
      }
      approximatePrice
    }
  }
`);

// src/documents/queries/brand.ts
var import_client3 = require("@apollo/client");
var ALL_BRANDS_QUERY = (0, import_client3.gql)(`
  query AllBrands($joinStock: Boolean) {
    allBrands(joinStock: $joinStock) {
      brand
      products
    }
  }
`);

// src/documents/queries/category.ts
var import_client4 = require("@apollo/client");
var GET_CATEGORIES_QUERY = (0, import_client4.gql)(`
  query GetCategories($depth: Int, $parentId: ID) {
    getCategories(depth: $depth, parentId: $parentId) {
      id
      name
      path
      expandedPathname
      categoryAlias
      depth
    }
  }
`);
var CATEGORY_SEARCH_QUERY = (0, import_client4.gql)(`
  query CategorySearch($search: String!, $quickSearchMode: Boolean) {
    categorySearch(search: $search, quickSearchMode: $quickSearchMode) {
      id
      name
    }
  }
`);
var GET_CATEGORY_QUERY = (0, import_client4.gql)(`
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      path
      expandedPathname
      categoryAlias
    }
  }
`);

// src/documents/queries/grocery-list.ts
var import_client5 = require("@apollo/client");
var GROCERY_LISTS_QUERY = (0, import_client5.gql)(`
  query GroceryLists {
    groceryLists {
      id
      name
      default
      createdAt
    }
  }
`);
var GET_GROCERY_LIST_ITEMS_QUERY = (0, import_client5.gql)(`
  query GroceryListItems($groceryListId: ID!, $filters: GroceryListItemsFilters) {
    groceryListItems(groceryListId: $groceryListId, filters: $filters) {
      id
      groceryListId
      productId
      product {
        id
        code
        name
        image
        category {
          id
          name
        }
        weightValue
        weightType
        quantityValue
        quantityType
      }
      category
      weight
      quantity
      unit
      completed
      createdAt
    }
  }
`);
var DEFAULT_GROCERY_LIST_ITEMS_QUERY = (0, import_client5.gql)(`
  query DefaultGroceryListItems($filters: GroceryListItemsFilters) {
    defaultGroceryListItems(filters: $filters) {
      id
      groceryListId
      productId
      product {
        id
        code
        name
        image
        category {
          id
          name
        }
        weightValue
        weightType
        quantityValue
        quantityType
      }
      category
      weight
      quantity
      unit
      completed
      createdAt
    }
  }
`);
var COUNT_GROCERY_LIST_ITEMS_QUERY = (0, import_client5.gql)(`
  query CountGroceryListItems($groceryListId: ID, $includeCompleted: Boolean) {
    countGroceryListItems(groceryListId: $groceryListId, includeCompleted: $includeCompleted)
  }
`);

// src/documents/queries/list.ts
var import_client6 = require("@apollo/client");
var GET_ALL_LISTS = import_client6.gql`
  query GetAllLists($listType: ListType) {
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
  }
`;
var GET_ALL_PRODUCT_LISTS_BY_LIST_ID = (0, import_client6.gql)(`
  query GetAllProductListsByListId($listId: ID!) {
    getAllProductListsByListId(listId: $listId) {
      id
      listId
      userId
      productId
      type
      stockId
      createdAt
      product {
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
        approximateWeight
        netWeight
        weightValue
        weightType
        quantityValue
        quantityType
        createdAt
        updatedAt
      }
      stock {
        id
        productId
        storeId
        store {
          id
          slug
          name
          logo
        }
        branchId
        branch {
          id
          slug
          name
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
        }
      }
    }
  }
`);
var GET_ALL_BRANCH_LISTS_BY_LIST_ID = (0, import_client6.gql)(`
  query GetAllBranchListsByListId($listId: ID!) {
    getAllBranchListsByListId(listId: $listId) {
      id
      listId
      branchId
      branch {
        id
        slug
        name
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
        storeId
        storeSlug
        store {
          id
          slug
          name
          logo
        }
      }
      createdAt
    }
  }
`);

// src/documents/queries/metadata.ts
var import_client7 = require("@apollo/client");
var GET_ALL_COUNTRIES_QUERY = import_client7.gql`
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
var CHECK_APP_VERSION_QUERY = (0, import_client7.gql)(`
  query CheckAppVersion($platform: AuthDeviceType!, $version: String!) {
    checkAppVersion(platform: $platform, version: $version)
  }
`);
var IP_TO_ADDRESS_QUERY = (0, import_client7.gql)(`
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

// src/documents/queries/price.ts
var import_client8 = require("@apollo/client");
var PRICE_CHANGE_HISTORY_QUERY = (0, import_client8.gql)(`
  query PriceChangeHistory($productId: ID!, $stockId: ID!, $paginator: PaginatorInput!, $filters: PriceHistoryFilter) {
    priceChangeHistory(
      productId: $productId
      stockId: $stockId
      paginator: $paginator
      filters: $filters
    ) {
      prices {
        id
        productId
        stockId
        branchId
        storeId
        amount
        originalPrice
        sale
        expiresAt
        condition
        unitType
        currencyCode
        createdBy {
          id
          name
          avatar
        }
        createdAt
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

// src/documents/queries/product-nutrition.ts
var import_client9 = require("@apollo/client");
var GET_PRODUCT_NUTRITION_DATA_QUERY = (0, import_client9.gql)(`
  query GetProductNutritionData($productId: ID!) {
    getProductNutritionData(productId: $productId) {
      productId
      servingSize
      servingSizeUnit
      servingSizeValue
      ingredientText
      ingredientList
      nutriments {
        salt
        salt100g
        saltValue
        saltServing
        saltUnit
        sugars
        sugars100g
        sugarsValue
        sugarsServing
        sugarsUnit
        iron
        iron100g
        ironValue
        ironServing
        ironUnit
        ironLabel
        calcium
        calcium100g
        calciumValue
        calciumServing
        calciumUnit
        calciumLabel
        cholesterol100g
        saturatedFat
        saturatedFat100g
        saturatedFatValue
        saturatedFatServing
        saturatedFatUnit
        fat
        fat100g
        fatValue
        fatServing
        fatUnit
        transFat
        transFat100g
        transFatValue
        transFatServing
        transFatUnit
        transFatLabel
        vitaminA
        vitaminA100g
        vitaminAValue
        vitaminAServing
        vitaminAUnit
        vitaminALabel
        vitaminC
        vitaminC100g
        vitaminCValue
        vitaminCServing
        vitaminCUnit
        vitaminCLabel
        proteins
        proteins100g
        proteinsValue
        proteinsServing
        proteinsUnit
        fiber
        fiber100g
        fiberValue
        fiberServing
        fiberUnit
        carbohydrates
        carbohydrates100g
        carbohydratesValue
        carbohydratesServing
        carbohydratesUnit
        alcohol
        alcohol100g
        alcoholValue
        alcoholServing
        alcoholUnit
        sodium
        sodium100g
        sodiumValue
        sodiumServing
        sodiumUnit
        potassium100g
        polyunsaturatedFat100g
        monounsaturatedFat100g
        novaGroup
        novaGroup100g
        novaGroupServing
        energy
        energy100g
        energyValue
        energyServing
        energyUnit
        energyKcal
        energyKcal100g
        energyKcalValue
        energyKcalServing
        energyKcalUnit
        nutritionScoreFr
        nutritionScoreFr100g
        nutritionScoreFrServing
        nutritionScoreUk
        nutritionScoreUk100g
        nutritionScoreUkServing
      }
      vegan
      vegetarian
      glutenFree
      lactoseFree
      halal
      kosher
      createdAt
      updatedAt
    }
  }
`);

// src/documents/queries/product.ts
var import_client10 = require("@apollo/client");
var BARCODE_SCAN_QUERY = (0, import_client10.gql)(`
  query BarcodeScan($barcode: String!, $searchMode: Boolean, $location: LocationInput) {
    barcodeScan(barcode: $barcode, searchMode: $searchMode, location: $location) {
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
      approximateWeight
      netWeight
      weightValue
      weightType
      quantityValue
      quantityType
      createdAt
      updatedAt
      stock {
        id
        productId
        storeId
        branchId
        latestPriceId
      }
    }
  }
`);
var PRODUCT_BY_ID_QUERY = (0, import_client10.gql)(`
  query Product($productId: ID!, $viewerTrail: ViewerTrailInput) {
    product(id: $productId, viewerTrail: $viewerTrail) {
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
        categoryAlias
        expandedPathname
        path
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
      productList {
        id
        listId
        userId
        productId
        type
        stockId
        createdAt
      }
    }
  }
`);
var ALL_PRODUCTS_QUERY = (0, import_client10.gql)(`
  query AllProducts($paginator: PaginatorInput!, $search: ProductSearch) {
    allProducts(paginator: $paginator, search: $search) {
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
          store {
            id
            slug
            name
            logo
          }
          branchId
          branch {
            id
            slug
            name
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
          }
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
            createdBy {
              id
              name
              avatar
            }
          }
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
var BRANCHES_WITH_PRODUCTS_QUERY = (0, import_client10.gql)(`
  query BranchesWithProducts($paginator: PaginatorInput!, $productLimit: Int!, $filters: ProductSearch) {
    branchesWithProducts(
      paginator: $paginator
      productLimit: $productLimit
      filters: $filters
    ) {
      branches {
        id
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
            }
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
var PRODUCT_SUMMARY_QUERY = (0, import_client10.gql)(`
  query ProductSummary($productId: ID!, $stockId: ID) {
    productSummary(id: $productId, stockId: $stockId) {
      id
      name
      image
      description
      brand
      code
      store
      branch
      address
      price
      priceCurrencyCode
      originalPrice
      sale
      saleExpiresAt
      priceCreatedAt
    }
  }
`);
var PRODUCT_SEARCH_QUERY = (0, import_client10.gql)(`
  query ProductSearch($paginator: PaginatorInput!, $search: String, $filters: ProductSearchFilters) {
    productSearch(paginator: $paginator, search: $search, filters: $filters) {
      products {
        id
        code
        brand
        name
        category {
          id
          name
          expandedPathname
        }
        quantityValue
        quantityType
        approximateWeight
        netWeight
        weightValue
        weightType
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
var EXTRACT_PRODUCT_FIELDS_QUERY = (0, import_client10.gql)(`
  query ExtractProductFields($base64Image: String!) {
    extractProductFields(base64Image: $base64Image) {
      brand
      name
      description
      netWeight
      weight
      quantity
      categoryId
      category {
        id
        name
        expandedPathname
        path
      }
    }
  }
`);
var MY_PRODUCT_VIEW_HISTORY_QUERY = (0, import_client10.gql)(`
  query MyProductViewHistory($paginator: PaginatorInput!) {
    myProductViewHistory(paginator: $paginator) {
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
          store {
            id
            slug
            name
            logo
          }
          branchId
          branch {
            id
            slug
            name
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
          }
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
          }
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
var POPULAR_PRODUCTS_QUERY = (0, import_client10.gql)(`
  query PopularProducts($paginator: PaginatorInput!, $dateRange: TimestampRangeBetween) {
    popularProducts(paginator: $paginator, dateRange: $dateRange) {
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
          store {
            id
            slug
            name
            logo
          }
          branchId
          branch {
            id
            slug
            name
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
          }
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
          }
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
var WEIGHT_COMPONENTS_FROM_CATEGORY_ID_QUERY = (0, import_client10.gql)(`
  query WeightComponentsFromCategoryId($categoryId: ID!) {
    weightComponentsFromCategoryId(categoryId: $categoryId) {
      weightValue
      weightType
    }
  }
`);

// src/documents/queries/search.ts
var import_client11 = require("@apollo/client");
var MY_SEARCH_HISTORY_QUERY = (0, import_client11.gql)(`
  query MySearchHistory($paginator: PaginatorInput!) {
    mySearchHistory(paginator:$paginator) {
      searches {
        id
        searchTerm
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
var POPULAR_SEARCH_KEYWORDS_QUERY = (0, import_client11.gql)(`
  query PopularSearchKeywords($paginator: PaginatorInput!, $dateRange: TimestampRangeBetween) {
    popularSearchKeywords(paginator:$paginator, dateRange: $dateRange) {
      searches
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
var SEARCH_KEYWORDS_QUERY = (0, import_client11.gql)(`
  query SearchKeywords($search: String!) {
    searchKeywords(search: $search)
  }
`);

// src/documents/queries/stock.ts
var import_client12 = require("@apollo/client");
var GET_STOCK_BY_ID = (0, import_client12.gql)(`
  query Stock($stockId: ID!) {
    stock(stockId: $stockId) {
      id
      productId
      storeId
      store {
        slug
        id
        name
        logo
      }
      branchId
      branch {
        id
        slug
        name
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
      }
      latestPriceId
      latestPrice {
        id
        productId
        branchId
        storeId
        amount
        currencyCode
        sale
        originalPrice
        condition
        expiresAt
        createdAt
        unitType
      }
      createdAt
      updatedAt
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
  }
`);
var GET_STOCK_FROM_PRODUCT_AND_BRANCH_ID_QUERY = (0, import_client12.gql)(`
  query GetStockFromProductAndBranchId($productId: ID!, $branchId: ID!) {
    getStockFromProductAndBranchId(productId: $productId, branchId: $branchId) {
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
        sale
        originalPrice
        condition
        expiresAt
        createdAt
        unitType
      }
      createdAt
      updatedAt
    }
  }
`);
var GET_PRODUCT_STOCKS_QUERY = (0, import_client12.gql)(`
  query GetProductStocks($paginator: PaginatorInput!, $productId: ID!, $location: LocationInput) {
    getProductStocks(paginator: $paginator, productId: $productId, location: $location) {
      stocks {
        id
        productId
        storeId
        store {
          id
          slug
          name
          logo
        }
        branchId
        branch {
          id
          slug
          name
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
        }
        latestPriceId
        latestPrice {
          id
          productId
          branchId
          storeId
          amount
          currencyCode
          sale
          originalPrice
          condition
          expiresAt
          unitType
        }
        createdAt
        updatedAt
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

// src/documents/queries/store.ts
var import_client13 = require("@apollo/client");
var ALL_STORES_QUERY = (0, import_client13.gql)(`
  query AllStores($paginator: PaginatorInput!, $search: String) {
    allStores(paginator: $paginator, search: $search) {
      stores {
        id
        slug
        name
        logo
        website
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
var FIND_STORE_QUERY = (0, import_client13.gql)(`
  query FindStore($storeId: ID, $storeSlug: String) {
    findStore(id: $storeId, slug: $storeSlug) {
      id
      slug
      name
      logo
      website
    }
  }
`);

// src/documents/queries/user.ts
var import_client14 = require("@apollo/client");
var UserFragment = (0, import_client14.gql)(`
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
var LOGIN_INTERNAL_QUERY = (0, import_client14.gql)(`
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
var GOOGLE_OAUTH_QUERY = (0, import_client14.gql)(`
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
var VERIFY_PASSWORD_RESET_CODE_QUERY = (0, import_client14.gql)(`
  query VerifyPasswordResetCode($email: String!, $code: String!) {
    verifyPasswordResetCode(email: $email, code: $code)
  }
`);
var ME_QUERY = (0, import_client14.gql)(`
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
var MY_PRODUCT_BILLING_DATA_QUERY = (0, import_client14.gql)(`
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
var POST_AUTH_USER_DATA_QUERIES = (0, import_client14.gql)(`
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

// src/documents/mutations/admin.ts
var import_client15 = require("@apollo/client");
var UPDATE_USER_BY_ID_MUTATION = (0, import_client15.gql)(`
  mutation UpdateUserById($userId: ID!, $input: UpdateUserFull!) {
    updateUserById(userId: $userId, input: $input) {
      id
      email
      phoneNumber
      name
      avatar
      birthDate
      bio
      active
      role
      createdAt
      updatedAt
    }
  }
`);

// src/documents/mutations/branch.ts
var import_client16 = require("@apollo/client");
var CREATE_BRANCH_WITH_FULL_ADDRESS_MUTATION = (0, import_client16.gql)(`
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
var CREATE_BRANCH_MUTATION = (0, import_client16.gql)(`
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

// src/documents/mutations/category.ts
var import_client17 = require("@apollo/client");
var CREATE_CATEGORY_MUTATION = (0, import_client17.gql)(`
  mutation CreateCategory($input: CreateCategory!) {
    createCategory(input:$input) {
      id
      name
      path
      expandedPathname
      categoryAlias
      depth
    }
  }
`);

// src/documents/mutations/grocery-list.ts
var import_client18 = require("@apollo/client");
var ADD_GROCERY_LIST_ITEMS_MUTATION = (0, import_client18.gql)(`
  mutation AddGroceryListItem($groceryListId: ID!, $input: CreateGroceryListItemInput!) {
    addGroceryListItem(groceryListId: $groceryListId, input: $input) {
      id
    }
  }
`);
var UPDATE_GROCERY_LIST_ITEMS_MUTATION = (0, import_client18.gql)(`
  mutation UpdateGroceryListItem($groceryListItemId: ID!, $input: CreateGroceryListItemInput!) {
    updateGroceryListItem(groceryListItemId: $groceryListItemId, input: $input) {
      id
    }
  }
`);
var DELETE_GROCERY_LIST_ITEMS_MUTATION = (0, import_client18.gql)(`
  mutation DeleteGroceryListItem($groceryListItemId: ID!) {
    deleteGroceryListItem(groceryListItemId: $groceryListItemId) {
      id
    }
  }
`);
var MARK_GROCERY_ITEM_MUTATION = (0, import_client18.gql)(`
  mutation MarkGroceryListItem($groceryListItemId: ID!, $completed: Boolean!) {
    markGroceryListItem(groceryListItemId: $groceryListItemId, completed:$completed) {
      id
      completed
    }
  }
`);

// src/documents/mutations/list.ts
var import_client19 = require("@apollo/client");
var ADD_TO_LIST_MUTATION = (0, import_client19.gql)(`
  mutation AddToList($listId: ID!, $productId: ID!, $stockId: ID) {
    addToList(listId: $listId, productId: $productId, stockId: $stockId) {
      id
      userId
      listId
      productId
      stockId
      createdAt
    }
  }
`);
var REMOVE_FROM_LIST_MUTATION = (0, import_client19.gql)(`
  mutation RemoveFromList($listId: ID!, $productListId: ID!) {
    removeFromList(listId: $listId, productListId: $productListId) {
      id
      userId
      listId
      productId
      stockId
      createdAt
    }
  }
`);
var REMOVE_FROM_LIST_BY_PRODUCT_ID_MUTATION = (0, import_client19.gql)(`
  mutation RemoveFromListWithProductId($listId: ID!, $productId: ID!, $stockId: ID) {
    removeFromListWithProductId(listId: $listId, productId: $productId, stockId: $stockId) {
      id
      userId
      listId
      productId
      stockId
      createdAt
    }
  }
`);
var ADD_BRANCH_TO_LIST_MUTATION = (0, import_client19.gql)(`
  mutation AddBranchToList($listId: ID!, $branchId: ID!) {
    addBranchToList(listId: $listId, branchId: $branchId) {
      id
      userId
      listId
      branchId
      createdAt
    }
  }
`);
var BULK_ADD_BRANCHES_TO_LIST_MUTATION = (0, import_client19.gql)(`
  mutation BulkAddBranchesToList($listId: ID!, $branchIds: [ID!]!) {
    bulkAddBranchesToList(listId: $listId, branchIds: $branchIds) {
      id
      userId
      listId
      branchId
      createdAt
    }
  }
`);
var REMOVE_BRANCH_FROM_LIST_MUTATION = (0, import_client19.gql)(`
  mutation RemoveBranchFromList($listId: ID!, $branchListId: ID!) {
    removeBranchFromList(listId: $listId, branchListId: $branchListId) {
      id
      userId
      listId
      branchId
      createdAt
    }
  }
`);

// src/documents/mutations/price.ts
var import_client20 = require("@apollo/client");
var CREATE_PRICE_MUTATION = (0, import_client20.gql)(`
  mutation CreatePrice($input: CreatePrice!) {
    createPrice(input: $input) {
      id
      amount
      currencyCode
      productId
      storeId
      stockId
      branchId
    }
  }
`);

// src/documents/mutations/product-nutrition.ts
var import_client21 = require("@apollo/client");
var UPDATE_PRODUCT_NUTRITION_MUTATION = (0, import_client21.gql)(`
  mutation UpdateProductNutritionData($productId: ID!) {
    updateProductNutritionData(productId: $productId) {
      productId
      openfoodfactsUpdatedAt
      createdAt
      updatedAt
    }
  }
`);

// src/documents/mutations/product.ts
var import_client22 = require("@apollo/client");
var CREATE_PRODUCT_MUTATION = (0, import_client22.gql)(`
  mutation CreateProduct($input: CreateProduct!) {
    createProduct(input: $input) {
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
      weightValue
      weightType
      createdAt
      updatedAt
    }
  }
`);
var UPDATE_PRODUCT_MUTATION = (0, import_client22.gql)(`
  mutation UpdateProduct($id: ID!, $input: UpdateProduct!) {
    updateProduct(id: $id, input: $input) {
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
      weightValue
      weightType
      createdAt
      updatedAt
    }
  }
`);
var EXTRACT_AND_CREATE_PRODUCT_FIELDS_QUERY = (0, import_client22.gql)(`
  mutation ExtractAndCreateProduct($barcode: String!, $base64Image: String!) {
    extractAndCreateProduct(barcode: $barcode, base64Image: $base64Image) {
      id
      code
      brand
      name
      categoryId
      weightValue
      weightType
      quantityValue
      quantityType
      description
    }
  }
`);
var SANITIZE_PRODUCT_MUTATION = (0, import_client22.gql)(`
  mutation SanitizeProduct($id: ID!) {
    sanitizeProduct(id: $id) {
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
        categoryAlias
        expandedPathname
        path
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
`);

// src/documents/mutations/store.ts
var import_client23 = require("@apollo/client");
var CREATE_STORE_MUTATION = (0, import_client23.gql)(`
  mutation CreateStore($input: CreateStore!) {
    createStore(input: $input) {
      id
      name
      logo
      website
    }
  }
`);

// src/documents/mutations/user.ts
var import_client24 = require("@apollo/client");
var CREATE_USER_MUTATION = import_client24.gql`
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
var VERIFY_EMAIL_MUTATION = (0, import_client24.gql)(`
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
var RESEND_VERIFICATION_MUTATION = (0, import_client24.gql)(`
  mutation ResendVerification($email: String!) {
    resendEmailVerificationCode(email: $email)
  }
`);
var LOGOUT_MUTATION = (0, import_client24.gql)(`
  mutation Logout {
    logout
  }
`);
var UPDATE_PROFILE_MUTATION = (0, import_client24.gql)(`
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
var REQUEST_RESET_PASSWORD_MUTATION = (0, import_client24.gql)(`
  mutation RequestResetPassword($email: String!) {
    requestPasswordReset(email: $email)
  }
`);
var UPDATE_PASSWORD_WITH_RESET_CODE_MUTATION = (0, import_client24.gql)(`
  mutation UpdatePasswordWithResetCode($email: String!, $code: String!, $newPassword: String!) {
    updatePasswordWithResetCode(
      email: $email
      code: $code
      newPassword: $newPassword
    )
  }
`);
var REGISTER_EXPO_PUSH_TOKEN = (0, import_client24.gql)(`
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ADD_BRANCH_TO_LIST_MUTATION,
  ADD_GROCERY_LIST_ITEMS_MUTATION,
  ADD_TO_LIST_MUTATION,
  ALL_BRANCHES_QUERY,
  ALL_BRANDS_QUERY,
  ALL_PRODUCTS_QUERY,
  ALL_STORES_QUERY,
  AddBranchToListDocument,
  AddGroceryListItemDocument,
  AddToListDocument,
  AllBranchesDocument,
  AllBrandsDocument,
  AllProductsDocument,
  AllStoresDocument,
  AuthDeviceType,
  AuthPlatformType,
  BARCODE_SCAN_QUERY,
  BRANCHES_WITH_PRODUCTS_QUERY,
  BRANCH_QUERY,
  BULK_ADD_BRANCHES_TO_LIST_MUTATION,
  BarcodeScanDocument,
  BranchDocument,
  BranchesWithProductsDocument,
  BulkAddBranchesToListDocument,
  CATEGORY_SEARCH_QUERY,
  CHECK_APP_VERSION_QUERY,
  COUNT_GROCERY_LIST_ITEMS_QUERY,
  CREATE_BRANCH_MUTATION,
  CREATE_BRANCH_WITH_FULL_ADDRESS_MUTATION,
  CREATE_CATEGORY_MUTATION,
  CREATE_PRICE_MUTATION,
  CREATE_PRODUCT_MUTATION,
  CREATE_STORE_MUTATION,
  CREATE_USER_MUTATION,
  CategorySearchDocument,
  CheckAppVersionDocument,
  CountGroceryListItemsDocument,
  CreateAccountDocument,
  CreateBranchDocument,
  CreateBranchFromFullAddressDocument,
  CreateCategoryDocument,
  CreatePriceDocument,
  CreateProductDocument,
  CreateStoreDocument,
  DEFAULT_GROCERY_LIST_ITEMS_QUERY,
  DELETE_GROCERY_LIST_ITEMS_MUTATION,
  DefaultGroceryListItemsDocument,
  DeleteGroceryListItemDocument,
  EXTRACT_AND_CREATE_PRODUCT_FIELDS_QUERY,
  EXTRACT_PRODUCT_FIELDS_QUERY,
  ExtractAndCreateProductDocument,
  ExtractProductFieldsDocument,
  FIND_BRANCHES_BY_DISTANCE_QUERY,
  FIND_BRANCH_QUERY,
  FIND_STORE_QUERY,
  FavoriteBranchesWithPricesDocument,
  FindBranchDocument,
  FindBranchesByDistanceDocument,
  FindStoreDocument,
  GET_ALL_BRANCH_LISTS_BY_LIST_ID,
  GET_ALL_COUNTRIES_QUERY,
  GET_ALL_LISTS,
  GET_ALL_PRODUCT_LISTS_BY_LIST_ID,
  GET_ALL_USERS_QUERY,
  GET_CATEGORIES_QUERY,
  GET_CATEGORY_QUERY,
  GET_FAVORITE_BRANCHES_WITH_PRICE_DATA_QUERY,
  GET_GROCERY_LIST_ITEMS_QUERY,
  GET_PRODUCT_NUTRITION_DATA_QUERY,
  GET_PRODUCT_STOCKS_QUERY,
  GET_STOCK_BY_ID,
  GET_STOCK_FROM_PRODUCT_AND_BRANCH_ID_QUERY,
  GOOGLE_OAUTH_QUERY,
  GROCERY_LISTS_QUERY,
  GetAllBranchListsByListIdDocument,
  GetAllCountriesDocument,
  GetAllListsDocument,
  GetAllProductListsByListIdDocument,
  GetAllUsersDocument,
  GetCategoriesDocument,
  GetCategoryDocument,
  GetProductNutritionDataDocument,
  GetProductStocksDocument,
  GetStockFromProductAndBranchIdDocument,
  GoogleOAuthDocument,
  GroceryListItemsDocument,
  GroceryListsDocument,
  IP_TO_ADDRESS_QUERY,
  IpToAddressDocument,
  LOGIN_INTERNAL_QUERY,
  LOGOUT_MUTATION,
  ListType,
  LoginInternalDocument,
  LogoutDocument,
  MARK_GROCERY_ITEM_MUTATION,
  ME_QUERY,
  MY_PRODUCT_BILLING_DATA_QUERY,
  MY_PRODUCT_VIEW_HISTORY_QUERY,
  MY_SEARCH_HISTORY_QUERY,
  MarkGroceryListItemDocument,
  MeDocument,
  MyProductBillingDataDocument,
  MyProductViewHistoryDocument,
  MySearchHistoryDocument,
  OrderByType,
  POPULAR_PRODUCTS_QUERY,
  POPULAR_SEARCH_KEYWORDS_QUERY,
  POST_AUTH_USER_DATA_QUERIES,
  PRICE_CHANGE_HISTORY_QUERY,
  PRODUCT_BILLING_DATA_BY_USER_ID_QUERY,
  PRODUCT_BY_ID_QUERY,
  PRODUCT_SEARCH_QUERY,
  PRODUCT_SUMMARY_QUERY,
  PopularProductsDocument,
  PopularSearchKeywordsDocument,
  PostAuthUserDataDocument,
  PriceChangeHistoryDocument,
  ProductBillingDataByUserIdDocument,
  ProductDocument,
  ProductSearchDocument,
  ProductSummaryDocument,
  REGISTER_EXPO_PUSH_TOKEN,
  REMOVE_BRANCH_FROM_LIST_MUTATION,
  REMOVE_FROM_LIST_BY_PRODUCT_ID_MUTATION,
  REMOVE_FROM_LIST_MUTATION,
  REQUEST_RESET_PASSWORD_MUTATION,
  RESEND_VERIFICATION_MUTATION,
  RegisterExpoPushTokenDocument,
  RemoveBranchFromListDocument,
  RemoveFromListDocument,
  RemoveFromListWithProductIdDocument,
  RequestResetPasswordDocument,
  ResendVerificationDocument,
  SANITIZE_PRODUCT_MUTATION,
  SEARCH_KEYWORDS_QUERY,
  SanitizeProductDocument,
  SearchKeywordsDocument,
  StockDocument,
  UPDATE_GROCERY_LIST_ITEMS_MUTATION,
  UPDATE_PASSWORD_WITH_RESET_CODE_MUTATION,
  UPDATE_PRODUCT_MUTATION,
  UPDATE_PRODUCT_NUTRITION_MUTATION,
  UPDATE_PROFILE_MUTATION,
  UPDATE_USER_BY_ID_MUTATION,
  UpdateGroceryListItemDocument,
  UpdatePasswordWithResetCodeDocument,
  UpdateProductDocument,
  UpdateProductNutritionDataDocument,
  UpdateProfileDocument,
  UpdateUserByIdDocument,
  UserFieldsFragmentDoc,
  UserFragment,
  UserRole,
  VERIFY_EMAIL_MUTATION,
  VERIFY_PASSWORD_RESET_CODE_QUERY,
  VerifyEmailDocument,
  VerifyPasswordResetCodeDocument,
  WEIGHT_COMPONENTS_FROM_CATEGORY_ID_QUERY,
  WeightComponentsFromCategoryIdDocument,
  graphql,
  isFragmentReady,
  makeFragmentData,
  useFragment
});
//# sourceMappingURL=index.js.map