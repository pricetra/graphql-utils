import { TypedDocumentNode, DocumentTypeDecoration, ResultOf } from '@graphql-typed-document-node/core';
import * as graphql$1 from 'graphql';

type Maybe<T> = T | null;
type InputMaybe<T> = T | null | undefined;
type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
    ID: {
        input: number;
        output: number;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    Int64: {
        input: any;
        output: any;
    };
    Time: {
        input: any;
        output: any;
    };
    Upload: {
        input: any;
        output: any;
    };
    Void: {
        input: any;
        output: any;
    };
};
type Address = {
    __typename?: 'Address';
    administrativeDivision: Scalars['String']['output'];
    city: Scalars['String']['output'];
    country?: Maybe<Scalars['String']['output']>;
    countryCode: Scalars['String']['output'];
    createdAt: Scalars['Time']['output'];
    distance?: Maybe<Scalars['Float']['output']>;
    fullAddress: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    latitude: Scalars['Float']['output'];
    longitude: Scalars['Float']['output'];
    mapsLink: Scalars['String']['output'];
    street?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['Time']['output'];
    zipCode: Scalars['String']['output'];
};
type AdministrativeDivision = {
    __typename?: 'AdministrativeDivision';
    cities: Scalars['String']['output'];
    name: Scalars['String']['output'];
};
type ApprovedByUser = {
    __typename?: 'ApprovedByUser';
    avatar?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
};
type Auth = {
    __typename?: 'Auth';
    isNewUser?: Maybe<Scalars['Boolean']['output']>;
    token: Scalars['String']['output'];
    user: User;
};
declare enum AuthDeviceType {
    Android = "android",
    Ios = "ios",
    Other = "other",
    Unknown = "unknown",
    Web = "web"
}
declare enum AuthPlatformType {
    Apple = "APPLE",
    Google = "GOOGLE",
    Internal = "INTERNAL"
}
type AuthSession = {
    __typename?: 'AuthSession';
    device?: Maybe<AuthDeviceType>;
    expoPushToken?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    ipAddress?: Maybe<Scalars['String']['output']>;
    loggedInAt: Scalars['Time']['output'];
    platform: AuthPlatformType;
    user?: Maybe<User>;
    userId: Scalars['ID']['output'];
};
type Branch = {
    __typename?: 'Branch';
    address: Address;
    addressId: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    products?: Maybe<Array<ProductSimple>>;
    slug: Scalars['String']['output'];
    store?: Maybe<Store>;
    storeId: Scalars['ID']['output'];
    storeSlug?: Maybe<Scalars['String']['output']>;
};
type BranchFlat = {
    __typename?: 'BranchFlat';
    address: Address;
    addressId: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    slug: Scalars['String']['output'];
    storeId: Scalars['ID']['output'];
    storeSlug?: Maybe<Scalars['String']['output']>;
};
type BranchList = {
    __typename?: 'BranchList';
    branch?: Maybe<Branch>;
    branchId: Scalars['ID']['output'];
    createdAt: Scalars['Time']['output'];
    id: Scalars['ID']['output'];
    listId: Scalars['ID']['output'];
    userId: Scalars['ID']['output'];
};
type BranchListWithPrices = {
    __typename?: 'BranchListWithPrices';
    approximatePrice?: Maybe<Scalars['Float']['output']>;
    branch?: Maybe<Branch>;
    branchId: Scalars['ID']['output'];
    createdAt: Scalars['Time']['output'];
    id: Scalars['ID']['output'];
    stock?: Maybe<Stock>;
};
type Brand = {
    __typename?: 'Brand';
    brand: Scalars['String']['output'];
    products: Scalars['Int64']['output'];
};
type Category = {
    __typename?: 'Category';
    categoryAlias?: Maybe<Scalars['String']['output']>;
    depth?: Maybe<Scalars['Int']['output']>;
    expandedPathname: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    path: Scalars['String']['output'];
};
type Country = {
    __typename?: 'Country';
    administrativeDivisions: Array<AdministrativeDivision>;
    callingCode?: Maybe<Scalars['String']['output']>;
    code: Scalars['String']['output'];
    currency?: Maybe<Currency>;
    language?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
};
type CreateAccountInput = {
    email: Scalars['String']['input'];
    name: Scalars['String']['input'];
    password: Scalars['String']['input'];
    phoneNumber?: InputMaybe<Scalars['String']['input']>;
};
type CreateAddress = {
    administrativeDivision: Scalars['String']['input'];
    city: Scalars['String']['input'];
    countryCode: Scalars['String']['input'];
    fullAddress: Scalars['String']['input'];
    latitude: Scalars['Float']['input'];
    longitude: Scalars['Float']['input'];
    mapsLink: Scalars['String']['input'];
    street?: InputMaybe<Scalars['String']['input']>;
    zipCode: Scalars['String']['input'];
};
type CreateBranch = {
    address: CreateAddress;
    name: Scalars['String']['input'];
    storeId: Scalars['ID']['input'];
};
type CreateCategory = {
    name: Scalars['String']['input'];
    parentPath: Array<Scalars['Int']['input']>;
};
type CreateGroceryListInput = {
    name: Scalars['String']['input'];
};
type CreateGroceryListItemInput = {
    category?: InputMaybe<Scalars['String']['input']>;
    completed?: InputMaybe<Scalars['Boolean']['input']>;
    productId?: InputMaybe<Scalars['ID']['input']>;
    quantity?: InputMaybe<Scalars['Int']['input']>;
    unit?: InputMaybe<Scalars['String']['input']>;
    weight?: InputMaybe<Scalars['String']['input']>;
};
type CreatePrice = {
    amount: Scalars['Float']['input'];
    branchId: Scalars['ID']['input'];
    condition?: InputMaybe<Scalars['String']['input']>;
    currencyCode?: InputMaybe<Scalars['String']['input']>;
    expiresAt?: InputMaybe<Scalars['Time']['input']>;
    imageFile?: InputMaybe<Scalars['Upload']['input']>;
    imageId?: InputMaybe<Scalars['String']['input']>;
    originalPrice?: InputMaybe<Scalars['Float']['input']>;
    productId: Scalars['ID']['input'];
    sale: Scalars['Boolean']['input'];
    unitType: Scalars['String']['input'];
};
type CreateProduct = {
    approximateWeight?: InputMaybe<Scalars['Boolean']['input']>;
    brand: Scalars['String']['input'];
    categoryId: Scalars['ID']['input'];
    code: Scalars['String']['input'];
    description: Scalars['String']['input'];
    imageBase64?: InputMaybe<Scalars['String']['input']>;
    imageFile?: InputMaybe<Scalars['Upload']['input']>;
    imageUrl?: InputMaybe<Scalars['String']['input']>;
    model?: InputMaybe<Scalars['String']['input']>;
    name: Scalars['String']['input'];
    netWeight?: InputMaybe<Scalars['Boolean']['input']>;
    quantityType?: InputMaybe<Scalars['String']['input']>;
    quantityValue?: InputMaybe<Scalars['Int']['input']>;
    weight?: InputMaybe<Scalars['String']['input']>;
};
type CreateStock = {
    branchId: Scalars['ID']['input'];
    productId: Scalars['ID']['input'];
    storeId: Scalars['ID']['input'];
};
type CreateStore = {
    logoBase64?: InputMaybe<Scalars['String']['input']>;
    logoFile?: InputMaybe<Scalars['Upload']['input']>;
    name: Scalars['String']['input'];
    website: Scalars['String']['input'];
};
type CreateStoreUserAdmin = {
    branchId?: InputMaybe<Scalars['ID']['input']>;
    email: Scalars['String']['input'];
    employeeId?: InputMaybe<Scalars['String']['input']>;
    firstName: Scalars['String']['input'];
    lastName: Scalars['String']['input'];
    role: StoreUserRole;
    storeId: Scalars['ID']['input'];
    userId?: InputMaybe<Scalars['ID']['input']>;
};
type CreatedByUser = {
    __typename?: 'CreatedByUser';
    active?: Maybe<Scalars['Boolean']['output']>;
    avatar?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
};
type Currency = {
    __typename?: 'Currency';
    currencyCode: Scalars['String']['output'];
    decimals: Scalars['Int']['output'];
    name: Scalars['String']['output'];
    numToBasic?: Maybe<Scalars['Int']['output']>;
    symbol: Scalars['String']['output'];
    symbolNative: Scalars['String']['output'];
};
type GroceryList = {
    __typename?: 'GroceryList';
    createdAt: Scalars['Time']['output'];
    default: Scalars['Boolean']['output'];
    groceryListItems?: Maybe<Array<GroceryListItem>>;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    updatedAt: Scalars['Time']['output'];
    userId: Scalars['ID']['output'];
};
type GroceryListItem = {
    __typename?: 'GroceryListItem';
    category?: Maybe<Scalars['String']['output']>;
    completed: Scalars['Boolean']['output'];
    createdAt: Scalars['Time']['output'];
    groceryList?: Maybe<GroceryList>;
    groceryListId: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    product?: Maybe<Product>;
    productId?: Maybe<Scalars['ID']['output']>;
    quantity: Scalars['Int']['output'];
    unit?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['Time']['output'];
    weight?: Maybe<Scalars['String']['output']>;
};
type GroceryListItemsFilters = {
    completed?: InputMaybe<Scalars['Boolean']['input']>;
    sortByCreation?: InputMaybe<Scalars['String']['input']>;
};
type List = {
    __typename?: 'List';
    branchList?: Maybe<Array<BranchList>>;
    createdAt: Scalars['Time']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    productList?: Maybe<Array<ProductList>>;
    type: ListType;
    userId: Scalars['ID']['output'];
};
declare enum ListType {
    Favorites = "FAVORITES",
    Personal = "PERSONAL",
    WatchList = "WATCH_LIST"
}
type LocationInput = {
    latitude: Scalars['Float']['input'];
    longitude: Scalars['Float']['input'];
    radiusMeters?: InputMaybe<Scalars['Int']['input']>;
};
type Mutation = {
    __typename?: 'Mutation';
    acceptPendingStoreUserInvite: StoreUser;
    addBranchToList: BranchList;
    addGroceryListItem: GroceryListItem;
    addToList: ProductList;
    adminRemoveAuthSession: Scalars['Boolean']['output'];
    bulkAddBranchesToList: Array<BranchList>;
    clearSearchHistory: Scalars['Boolean']['output'];
    createAccount: User;
    createBranch: Branch;
    createBranchWithFullAddress: Branch;
    createCategory: Category;
    createList: List;
    createPrice: Price;
    createProduct: Product;
    createStore: Store;
    createStoreUserAdmin: StoreUser;
    declinePendingStoreUserInvite: Scalars['Boolean']['output'];
    deleteGroceryListItem: GroceryListItem;
    deleteList: List;
    deleteMyAccount: Scalars['Boolean']['output'];
    deleteSearchById: Scalars['Boolean']['output'];
    extractAndCreateProduct: Product;
    logout: Scalars['Boolean']['output'];
    markGroceryListItem: GroceryListItem;
    registerExpoPushToken: User;
    removeBranchFromList: BranchList;
    removeFromList: ProductList;
    removeFromListWithProductId: ProductList;
    requestPasswordReset: Scalars['Boolean']['output'];
    resendEmailVerificationCode: Scalars['Boolean']['output'];
    sanitizeProduct: Product;
    saveProductsFromUPCItemDb: SearchResult;
    updateGroceryListItem: GroceryListItem;
    updatePasswordWithResetCode: Scalars['Boolean']['output'];
    updateProduct: Product;
    updateProductNutritionData: ProductNutrition;
    updateProfile: User;
    updateUserById: User;
    verifyEmail: User;
};
type MutationAcceptPendingStoreUserInviteArgs = {
    data: Scalars['String']['input'];
};
type MutationAddBranchToListArgs = {
    branchId: Scalars['ID']['input'];
    listId: Scalars['ID']['input'];
};
type MutationAddGroceryListItemArgs = {
    groceryListId?: InputMaybe<Scalars['ID']['input']>;
    input: CreateGroceryListItemInput;
};
type MutationAddToListArgs = {
    listId: Scalars['ID']['input'];
    productId: Scalars['ID']['input'];
    stockId?: InputMaybe<Scalars['ID']['input']>;
};
type MutationAdminRemoveAuthSessionArgs = {
    authStateId: Scalars['String']['input'];
};
type MutationBulkAddBranchesToListArgs = {
    branchIds: Array<Scalars['ID']['input']>;
    listId: Scalars['ID']['input'];
};
type MutationCreateAccountArgs = {
    input: CreateAccountInput;
};
type MutationCreateBranchArgs = {
    input: CreateBranch;
};
type MutationCreateBranchWithFullAddressArgs = {
    fullAddress: Scalars['String']['input'];
    storeId: Scalars['ID']['input'];
};
type MutationCreateCategoryArgs = {
    input: CreateCategory;
};
type MutationCreateListArgs = {
    name: Scalars['String']['input'];
};
type MutationCreatePriceArgs = {
    input: CreatePrice;
};
type MutationCreateProductArgs = {
    input: CreateProduct;
};
type MutationCreateStoreArgs = {
    input: CreateStore;
};
type MutationCreateStoreUserAdminArgs = {
    input: CreateStoreUserAdmin;
};
type MutationDeclinePendingStoreUserInviteArgs = {
    data: Scalars['String']['input'];
};
type MutationDeleteGroceryListItemArgs = {
    groceryListItemId: Scalars['ID']['input'];
};
type MutationDeleteListArgs = {
    listId: Scalars['ID']['input'];
};
type MutationDeleteSearchByIdArgs = {
    id: Scalars['ID']['input'];
};
type MutationExtractAndCreateProductArgs = {
    barcode: Scalars['String']['input'];
    base64Image: Scalars['String']['input'];
};
type MutationMarkGroceryListItemArgs = {
    completed: Scalars['Boolean']['input'];
    groceryListItemId: Scalars['ID']['input'];
};
type MutationRegisterExpoPushTokenArgs = {
    expoPushToken: Scalars['String']['input'];
};
type MutationRemoveBranchFromListArgs = {
    branchListId: Scalars['ID']['input'];
    listId: Scalars['ID']['input'];
};
type MutationRemoveFromListArgs = {
    listId: Scalars['ID']['input'];
    productListId: Scalars['ID']['input'];
};
type MutationRemoveFromListWithProductIdArgs = {
    listId: Scalars['ID']['input'];
    productId: Scalars['ID']['input'];
    stockId?: InputMaybe<Scalars['ID']['input']>;
};
type MutationRequestPasswordResetArgs = {
    email: Scalars['String']['input'];
};
type MutationResendEmailVerificationCodeArgs = {
    email: Scalars['String']['input'];
};
type MutationSanitizeProductArgs = {
    id: Scalars['ID']['input'];
};
type MutationSaveProductsFromUpcItemDbArgs = {
    input: SaveExternalProductInput;
};
type MutationUpdateGroceryListItemArgs = {
    groceryListItemId: Scalars['ID']['input'];
    input: CreateGroceryListItemInput;
};
type MutationUpdatePasswordWithResetCodeArgs = {
    code: Scalars['String']['input'];
    email: Scalars['String']['input'];
    newPassword: Scalars['String']['input'];
};
type MutationUpdateProductArgs = {
    id: Scalars['ID']['input'];
    input: UpdateProduct;
};
type MutationUpdateProductNutritionDataArgs = {
    productId: Scalars['ID']['input'];
};
type MutationUpdateProfileArgs = {
    input: UpdateUser;
};
type MutationUpdateUserByIdArgs = {
    input: UpdateUserFull;
    userId: Scalars['ID']['input'];
};
type MutationVerifyEmailArgs = {
    verificationCode: Scalars['String']['input'];
};
declare enum OrderByType {
    Asc = "ASC",
    Desc = "DESC"
}
type PaginatedAuthSessions = {
    __typename?: 'PaginatedAuthSessions';
    authSessions: Array<AuthSession>;
    paginator: Paginator;
};
type PaginatedBranches = {
    __typename?: 'PaginatedBranches';
    branches: Array<Branch>;
    paginator: Paginator;
};
type PaginatedPriceHistory = {
    __typename?: 'PaginatedPriceHistory';
    paginator: Paginator;
    prices: Array<Price>;
};
type PaginatedProductBilling = {
    __typename?: 'PaginatedProductBilling';
    data: Array<ProductBilling>;
    paginator: Paginator;
};
type PaginatedProductViews = {
    __typename?: 'PaginatedProductViews';
    paginator: Paginator;
    productViewEntries: Array<ProductView>;
};
type PaginatedProducts = {
    __typename?: 'PaginatedProducts';
    paginator: Paginator;
    products: Array<Product>;
};
type PaginatedSearch = {
    __typename?: 'PaginatedSearch';
    paginator: Paginator;
    searches: Array<SearchHistory>;
};
type PaginatedSearchKeywords = {
    __typename?: 'PaginatedSearchKeywords';
    paginator: Paginator;
    searches: Array<Scalars['String']['output']>;
};
type PaginatedStocks = {
    __typename?: 'PaginatedStocks';
    paginator: Paginator;
    stocks: Array<Stock>;
};
type PaginatedStores = {
    __typename?: 'PaginatedStores';
    paginator: Paginator;
    stores: Array<Store>;
};
type PaginatedUsers = {
    __typename?: 'PaginatedUsers';
    paginator: Paginator;
    users: Array<User>;
};
type Paginator = {
    __typename?: 'Paginator';
    limit: Scalars['Int']['output'];
    next?: Maybe<Scalars['Int']['output']>;
    numPages: Scalars['Int']['output'];
    page: Scalars['Int']['output'];
    prev?: Maybe<Scalars['Int']['output']>;
    total: Scalars['Int']['output'];
};
type PaginatorInput = {
    limit: Scalars['Int']['input'];
    page: Scalars['Int']['input'];
};
type Price = {
    __typename?: 'Price';
    amount: Scalars['Float']['output'];
    branchId: Scalars['ID']['output'];
    condition?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['Time']['output'];
    createdBy?: Maybe<CreatedByUser>;
    createdById?: Maybe<Scalars['ID']['output']>;
    currencyCode: Scalars['String']['output'];
    expiresAt?: Maybe<Scalars['Time']['output']>;
    id: Scalars['ID']['output'];
    imageId?: Maybe<Scalars['String']['output']>;
    originalPrice?: Maybe<Scalars['Float']['output']>;
    productId: Scalars['ID']['output'];
    sale: Scalars['Boolean']['output'];
    stockId: Scalars['ID']['output'];
    storeId: Scalars['ID']['output'];
    unitType: Scalars['String']['output'];
};
type PriceHistoryFilter = {
    orderBy?: InputMaybe<OrderByType>;
};
type Product = {
    __typename?: 'Product';
    approximateWeight: Scalars['Boolean']['output'];
    brand: Scalars['String']['output'];
    category?: Maybe<Category>;
    categoryId: Scalars['ID']['output'];
    code: Scalars['String']['output'];
    createdAt: Scalars['Time']['output'];
    description: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    image: Scalars['String']['output'];
    model?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
    netWeight: Scalars['Boolean']['output'];
    productList: Array<ProductList>;
    quantityType: Scalars['String']['output'];
    quantityValue: Scalars['Int']['output'];
    stock?: Maybe<Stock>;
    updatedAt: Scalars['Time']['output'];
    views: Scalars['Int']['output'];
    weightType?: Maybe<Scalars['String']['output']>;
    weightValue?: Maybe<Scalars['Float']['output']>;
};
type ProductBilling = {
    __typename?: 'ProductBilling';
    billingRateType: Scalars['String']['output'];
    createdAt: Scalars['Time']['output'];
    id: Scalars['ID']['output'];
    paidAt?: Maybe<Scalars['Time']['output']>;
    product?: Maybe<Product>;
    productId: Scalars['ID']['output'];
    rate: Scalars['Float']['output'];
    user?: Maybe<UserShallow>;
    userId: Scalars['ID']['output'];
};
type ProductExtractionFields = {
    __typename?: 'ProductExtractionFields';
    brand: Scalars['String']['output'];
    category: Scalars['String']['output'];
    description: Scalars['String']['output'];
    netWeight?: Maybe<Scalars['Boolean']['output']>;
    productName: Scalars['String']['output'];
    quantity?: Maybe<Scalars['Int']['output']>;
    weight?: Maybe<Scalars['String']['output']>;
};
type ProductExtractionResponse = {
    __typename?: 'ProductExtractionResponse';
    brand: Scalars['String']['output'];
    category?: Maybe<Category>;
    categoryId?: Maybe<Scalars['ID']['output']>;
    description: Scalars['String']['output'];
    name: Scalars['String']['output'];
    netWeight?: Maybe<Scalars['Boolean']['output']>;
    quantity?: Maybe<Scalars['Int']['output']>;
    weight?: Maybe<Scalars['String']['output']>;
};
type ProductList = {
    __typename?: 'ProductList';
    createdAt: Scalars['Time']['output'];
    id: Scalars['ID']['output'];
    listId: Scalars['ID']['output'];
    product?: Maybe<Product>;
    productId: Scalars['ID']['output'];
    stock?: Maybe<Stock>;
    stockId?: Maybe<Scalars['ID']['output']>;
    type?: Maybe<ListType>;
    userId: Scalars['ID']['output'];
};
type ProductNutriment = {
    __typename?: 'ProductNutriment';
    alcohol?: Maybe<Scalars['Float']['output']>;
    alcohol100g?: Maybe<Scalars['Float']['output']>;
    alcoholServing?: Maybe<Scalars['Float']['output']>;
    alcoholUnit?: Maybe<Scalars['String']['output']>;
    alcoholValue?: Maybe<Scalars['Float']['output']>;
    calcium?: Maybe<Scalars['Float']['output']>;
    calcium100g?: Maybe<Scalars['Float']['output']>;
    calciumLabel?: Maybe<Scalars['String']['output']>;
    calciumServing?: Maybe<Scalars['Float']['output']>;
    calciumUnit?: Maybe<Scalars['String']['output']>;
    calciumValue?: Maybe<Scalars['Float']['output']>;
    carbohydrates?: Maybe<Scalars['Float']['output']>;
    carbohydrates100g?: Maybe<Scalars['Float']['output']>;
    carbohydratesServing?: Maybe<Scalars['Float']['output']>;
    carbohydratesUnit?: Maybe<Scalars['String']['output']>;
    carbohydratesValue?: Maybe<Scalars['Float']['output']>;
    cholesterol100g?: Maybe<Scalars['Float']['output']>;
    energy?: Maybe<Scalars['Float']['output']>;
    energy100g?: Maybe<Scalars['Float']['output']>;
    energyKcal?: Maybe<Scalars['Float']['output']>;
    energyKcal100g?: Maybe<Scalars['Float']['output']>;
    energyKcalServing?: Maybe<Scalars['Float']['output']>;
    energyKcalUnit?: Maybe<Scalars['String']['output']>;
    energyKcalValue?: Maybe<Scalars['Float']['output']>;
    energyServing?: Maybe<Scalars['Float']['output']>;
    energyUnit?: Maybe<Scalars['String']['output']>;
    energyValue?: Maybe<Scalars['Float']['output']>;
    fat?: Maybe<Scalars['Float']['output']>;
    fat100g?: Maybe<Scalars['Float']['output']>;
    fatServing?: Maybe<Scalars['Float']['output']>;
    fatUnit?: Maybe<Scalars['String']['output']>;
    fatValue?: Maybe<Scalars['Float']['output']>;
    fiber?: Maybe<Scalars['Float']['output']>;
    fiber100g?: Maybe<Scalars['Float']['output']>;
    fiberServing?: Maybe<Scalars['Float']['output']>;
    fiberUnit?: Maybe<Scalars['String']['output']>;
    fiberValue?: Maybe<Scalars['Float']['output']>;
    iron?: Maybe<Scalars['Float']['output']>;
    iron100g?: Maybe<Scalars['Float']['output']>;
    ironLabel?: Maybe<Scalars['String']['output']>;
    ironServing?: Maybe<Scalars['Float']['output']>;
    ironUnit?: Maybe<Scalars['String']['output']>;
    ironValue?: Maybe<Scalars['Float']['output']>;
    monounsaturatedFat100g?: Maybe<Scalars['Float']['output']>;
    novaGroup?: Maybe<Scalars['Float']['output']>;
    novaGroup100g?: Maybe<Scalars['Float']['output']>;
    novaGroupServing?: Maybe<Scalars['Float']['output']>;
    nutritionScoreFr?: Maybe<Scalars['Float']['output']>;
    nutritionScoreFr100g?: Maybe<Scalars['Float']['output']>;
    nutritionScoreFrServing?: Maybe<Scalars['Float']['output']>;
    nutritionScoreUk?: Maybe<Scalars['Float']['output']>;
    nutritionScoreUk100g?: Maybe<Scalars['Float']['output']>;
    nutritionScoreUkServing?: Maybe<Scalars['Float']['output']>;
    polyunsaturatedFat100g?: Maybe<Scalars['Float']['output']>;
    potassium100g?: Maybe<Scalars['Float']['output']>;
    proteins?: Maybe<Scalars['Float']['output']>;
    proteins100g?: Maybe<Scalars['Float']['output']>;
    proteinsServing?: Maybe<Scalars['Float']['output']>;
    proteinsUnit?: Maybe<Scalars['String']['output']>;
    proteinsValue?: Maybe<Scalars['Float']['output']>;
    salt?: Maybe<Scalars['Float']['output']>;
    salt100g?: Maybe<Scalars['Float']['output']>;
    saltServing?: Maybe<Scalars['Float']['output']>;
    saltUnit?: Maybe<Scalars['String']['output']>;
    saltValue?: Maybe<Scalars['Float']['output']>;
    saturatedFat?: Maybe<Scalars['Float']['output']>;
    saturatedFat100g?: Maybe<Scalars['Float']['output']>;
    saturatedFatServing?: Maybe<Scalars['Float']['output']>;
    saturatedFatUnit?: Maybe<Scalars['String']['output']>;
    saturatedFatValue?: Maybe<Scalars['Float']['output']>;
    sodium?: Maybe<Scalars['Float']['output']>;
    sodium100g?: Maybe<Scalars['Float']['output']>;
    sodiumServing?: Maybe<Scalars['Float']['output']>;
    sodiumUnit?: Maybe<Scalars['String']['output']>;
    sodiumValue?: Maybe<Scalars['Float']['output']>;
    sugars?: Maybe<Scalars['Float']['output']>;
    sugars100g?: Maybe<Scalars['Float']['output']>;
    sugarsServing?: Maybe<Scalars['Float']['output']>;
    sugarsUnit?: Maybe<Scalars['String']['output']>;
    sugarsValue?: Maybe<Scalars['Float']['output']>;
    transFat?: Maybe<Scalars['Float']['output']>;
    transFat100g?: Maybe<Scalars['Float']['output']>;
    transFatLabel?: Maybe<Scalars['String']['output']>;
    transFatServing?: Maybe<Scalars['Float']['output']>;
    transFatUnit?: Maybe<Scalars['String']['output']>;
    transFatValue?: Maybe<Scalars['Float']['output']>;
    vitaminA?: Maybe<Scalars['Float']['output']>;
    vitaminA100g?: Maybe<Scalars['Float']['output']>;
    vitaminALabel?: Maybe<Scalars['String']['output']>;
    vitaminAServing?: Maybe<Scalars['Float']['output']>;
    vitaminAUnit?: Maybe<Scalars['String']['output']>;
    vitaminAValue?: Maybe<Scalars['Float']['output']>;
    vitaminC?: Maybe<Scalars['Float']['output']>;
    vitaminC100g?: Maybe<Scalars['Float']['output']>;
    vitaminCLabel?: Maybe<Scalars['String']['output']>;
    vitaminCServing?: Maybe<Scalars['Float']['output']>;
    vitaminCUnit?: Maybe<Scalars['String']['output']>;
    vitaminCValue?: Maybe<Scalars['Float']['output']>;
};
type ProductNutrition = {
    __typename?: 'ProductNutrition';
    createdAt: Scalars['Time']['output'];
    glutenFree?: Maybe<Scalars['Boolean']['output']>;
    halal?: Maybe<Scalars['Boolean']['output']>;
    ingredientList?: Maybe<Array<Scalars['String']['output']>>;
    ingredientText?: Maybe<Scalars['String']['output']>;
    kosher?: Maybe<Scalars['Boolean']['output']>;
    lactoseFree?: Maybe<Scalars['Boolean']['output']>;
    nutriments?: Maybe<ProductNutriment>;
    openfoodfactsUpdatedAt: Scalars['String']['output'];
    productId: Scalars['ID']['output'];
    servingSize?: Maybe<Scalars['String']['output']>;
    servingSizeUnit?: Maybe<Scalars['String']['output']>;
    servingSizeValue?: Maybe<Scalars['Float']['output']>;
    updatedAt: Scalars['Time']['output'];
    vegan?: Maybe<Scalars['Boolean']['output']>;
    vegetarian?: Maybe<Scalars['Boolean']['output']>;
};
type ProductReferrer = {
    sharedByUser?: InputMaybe<Scalars['String']['input']>;
    sharedFromPlatform?: InputMaybe<Scalars['String']['input']>;
    sharedOn?: InputMaybe<Scalars['String']['input']>;
};
type ProductSearch = {
    branchId?: InputMaybe<Scalars['ID']['input']>;
    branchIds?: InputMaybe<Array<Scalars['ID']['input']>>;
    brand?: InputMaybe<Scalars['String']['input']>;
    category?: InputMaybe<Scalars['String']['input']>;
    categoryId?: InputMaybe<Scalars['ID']['input']>;
    location?: InputMaybe<LocationInput>;
    quantity?: InputMaybe<Scalars['Int']['input']>;
    query?: InputMaybe<Scalars['String']['input']>;
    sale?: InputMaybe<Scalars['Boolean']['input']>;
    sortByPrice?: InputMaybe<Scalars['String']['input']>;
    storeId?: InputMaybe<Scalars['ID']['input']>;
    weight?: InputMaybe<Scalars['String']['input']>;
};
type ProductSearchFilters = {
    brand?: InputMaybe<Scalars['String']['input']>;
    category?: InputMaybe<Scalars['String']['input']>;
    categoryId?: InputMaybe<Scalars['ID']['input']>;
};
type ProductSimple = {
    __typename?: 'ProductSimple';
    approximateWeight: Scalars['Boolean']['output'];
    brand: Scalars['String']['output'];
    category?: Maybe<Category>;
    categoryId: Scalars['ID']['output'];
    code: Scalars['String']['output'];
    createdAt: Scalars['Time']['output'];
    description: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    image: Scalars['String']['output'];
    model?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
    netWeight: Scalars['Boolean']['output'];
    quantityType: Scalars['String']['output'];
    quantityValue: Scalars['Int']['output'];
    stock?: Maybe<StockSimple>;
    updatedAt: Scalars['Time']['output'];
    views: Scalars['Int']['output'];
    weightType?: Maybe<Scalars['String']['output']>;
    weightValue?: Maybe<Scalars['Float']['output']>;
};
type ProductSummary = {
    __typename?: 'ProductSummary';
    address?: Maybe<Scalars['String']['output']>;
    branch?: Maybe<Scalars['String']['output']>;
    branchId?: Maybe<Scalars['ID']['output']>;
    branchSlug?: Maybe<Scalars['String']['output']>;
    brand: Scalars['String']['output'];
    code: Scalars['String']['output'];
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    image: Scalars['String']['output'];
    name: Scalars['String']['output'];
    originalPrice?: Maybe<Scalars['Float']['output']>;
    price?: Maybe<Scalars['Float']['output']>;
    priceCreatedAt?: Maybe<Scalars['Time']['output']>;
    priceCurrencyCode?: Maybe<Scalars['String']['output']>;
    sale?: Maybe<Scalars['Boolean']['output']>;
    saleExpiresAt?: Maybe<Scalars['Time']['output']>;
    stockId?: Maybe<Scalars['ID']['output']>;
    store?: Maybe<Scalars['String']['output']>;
    storeId?: Maybe<Scalars['ID']['output']>;
    storeLogo?: Maybe<Scalars['String']['output']>;
    storeSlug?: Maybe<Scalars['String']['output']>;
};
type ProductSummaryBranchInput = {
    branchId?: InputMaybe<Scalars['ID']['input']>;
    branchSlug?: InputMaybe<Scalars['String']['input']>;
};
type ProductView = {
    __typename?: 'ProductView';
    createdAt: Scalars['Time']['output'];
    id: Scalars['ID']['output'];
    metadata?: Maybe<Scalars['String']['output']>;
    origin?: Maybe<Scalars['String']['output']>;
    platform?: Maybe<AuthDeviceType>;
    product?: Maybe<Product>;
    productId: Scalars['ID']['output'];
    referrer?: Maybe<Scalars['String']['output']>;
    stock?: Maybe<Stock>;
    stockId?: Maybe<Scalars['ID']['output']>;
    user?: Maybe<UserShallow>;
    userId?: Maybe<Scalars['ID']['output']>;
};
type ProductViewerMetadata = {
    browser?: InputMaybe<Scalars['String']['input']>;
    device?: InputMaybe<Scalars['String']['input']>;
    ipAddress?: InputMaybe<Scalars['String']['input']>;
    userAgent?: InputMaybe<Scalars['String']['input']>;
};
type ProductWeightComponents = {
    __typename?: 'ProductWeightComponents';
    weightType: Scalars['String']['output'];
    weightValue: Scalars['Float']['output'];
};
type Query = {
    __typename?: 'Query';
    allBranches: PaginatedBranches;
    allBrands: Array<Brand>;
    allProducts: PaginatedProducts;
    allStores: PaginatedStores;
    appleOAuth: Auth;
    barcodeScan: Product;
    branchesWithProducts: PaginatedBranches;
    categorySearch: Array<Category>;
    checkAppVersion: Scalars['Boolean']['output'];
    countGroceryListItems: Scalars['Int']['output'];
    defaultGroceryListItems: Array<GroceryListItem>;
    extractProductFields: ProductExtractionResponse;
    findBranch: Branch;
    findBranchesByDistance: Array<Branch>;
    findStore: Store;
    getAllBranchListsByListId: Array<BranchList>;
    getAllCountries: Array<Country>;
    getAllLists: Array<List>;
    getAllProductListsByListId: Array<ProductList>;
    getAllUsers: PaginatedUsers;
    getCategories: Array<Category>;
    getCategory: Category;
    getFavoriteBranchesWithPrices: Array<BranchListWithPrices>;
    getProductNutritionData: ProductNutrition;
    getProductStocks: PaginatedStocks;
    getStockFromProductAndBranchId: Stock;
    googleOAuth: Auth;
    groceryList: GroceryList;
    groceryListItems: Array<GroceryListItem>;
    groceryLists: Array<GroceryList>;
    ipToAddress: Address;
    login: Auth;
    me: User;
    myProductBillingData: PaginatedProductBilling;
    myProductViewHistory: PaginatedProducts;
    mySearchHistory: PaginatedSearch;
    myStoreUsers: Array<StoreUser>;
    paginatedAdminAuthSessions: PaginatedAuthSessions;
    paginatedAdminProductViewEntries: PaginatedProductViews;
    popularProducts: PaginatedProducts;
    popularSearchKeywords: PaginatedSearchKeywords;
    priceChangeHistory: PaginatedPriceHistory;
    product: Product;
    productBillingDataByUserId: PaginatedProductBilling;
    productSearch: PaginatedProducts;
    productSummary: ProductSummary;
    searchKeywords?: Maybe<Array<Scalars['String']['output']>>;
    stock: Stock;
    verifyPasswordResetCode: Scalars['Boolean']['output'];
    weightComponentsFromCategoryId: Array<ProductWeightComponents>;
    yahooOAuth: Auth;
};
type QueryAllBranchesArgs = {
    location?: InputMaybe<LocationInput>;
    paginator: PaginatorInput;
    search?: InputMaybe<Scalars['String']['input']>;
    storeId?: InputMaybe<Scalars['ID']['input']>;
    storeSlug?: InputMaybe<Scalars['String']['input']>;
};
type QueryAllBrandsArgs = {
    joinStock?: InputMaybe<Scalars['Boolean']['input']>;
};
type QueryAllProductsArgs = {
    paginator: PaginatorInput;
    search?: InputMaybe<ProductSearch>;
};
type QueryAllStoresArgs = {
    paginator: PaginatorInput;
    search?: InputMaybe<Scalars['String']['input']>;
};
type QueryAppleOAuthArgs = {
    appleRawUser?: InputMaybe<Scalars['String']['input']>;
    code: Scalars['String']['input'];
    device?: InputMaybe<AuthDeviceType>;
    ipAddress?: InputMaybe<Scalars['String']['input']>;
};
type QueryBarcodeScanArgs = {
    barcode: Scalars['String']['input'];
    location?: InputMaybe<LocationInput>;
    searchMode?: InputMaybe<Scalars['Boolean']['input']>;
};
type QueryBranchesWithProductsArgs = {
    filters?: InputMaybe<ProductSearch>;
    paginator: PaginatorInput;
    productLimit: Scalars['Int']['input'];
};
type QueryCategorySearchArgs = {
    quickSearchMode?: InputMaybe<Scalars['Boolean']['input']>;
    search: Scalars['String']['input'];
};
type QueryCheckAppVersionArgs = {
    platform: AuthDeviceType;
    version: Scalars['String']['input'];
};
type QueryCountGroceryListItemsArgs = {
    groceryListId?: InputMaybe<Scalars['ID']['input']>;
    includeCompleted?: InputMaybe<Scalars['Boolean']['input']>;
};
type QueryDefaultGroceryListItemsArgs = {
    filters?: InputMaybe<GroceryListItemsFilters>;
};
type QueryExtractProductFieldsArgs = {
    base64Image: Scalars['String']['input'];
};
type QueryFindBranchArgs = {
    id?: InputMaybe<Scalars['ID']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    storeId?: InputMaybe<Scalars['ID']['input']>;
    storeSlug?: InputMaybe<Scalars['String']['input']>;
};
type QueryFindBranchesByDistanceArgs = {
    lat: Scalars['Float']['input'];
    lon: Scalars['Float']['input'];
    radiusMeters: Scalars['Int']['input'];
};
type QueryFindStoreArgs = {
    id?: InputMaybe<Scalars['ID']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
};
type QueryGetAllBranchListsByListIdArgs = {
    listId: Scalars['ID']['input'];
};
type QueryGetAllListsArgs = {
    listType?: InputMaybe<ListType>;
};
type QueryGetAllProductListsByListIdArgs = {
    listId: Scalars['ID']['input'];
};
type QueryGetAllUsersArgs = {
    filters?: InputMaybe<UserFilter>;
    paginator: PaginatorInput;
};
type QueryGetCategoriesArgs = {
    depth?: InputMaybe<Scalars['Int']['input']>;
    parentId?: InputMaybe<Scalars['ID']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
};
type QueryGetCategoryArgs = {
    id: Scalars['ID']['input'];
};
type QueryGetFavoriteBranchesWithPricesArgs = {
    productId: Scalars['ID']['input'];
};
type QueryGetProductNutritionDataArgs = {
    productId: Scalars['ID']['input'];
};
type QueryGetProductStocksArgs = {
    location?: InputMaybe<LocationInput>;
    paginator: PaginatorInput;
    productId: Scalars['ID']['input'];
};
type QueryGetStockFromProductAndBranchIdArgs = {
    branchId: Scalars['ID']['input'];
    productId: Scalars['ID']['input'];
};
type QueryGoogleOAuthArgs = {
    accessToken: Scalars['String']['input'];
    device?: InputMaybe<AuthDeviceType>;
    ipAddress?: InputMaybe<Scalars['String']['input']>;
};
type QueryGroceryListArgs = {
    groceryListId: Scalars['ID']['input'];
};
type QueryGroceryListItemsArgs = {
    filters?: InputMaybe<GroceryListItemsFilters>;
    groceryListId: Scalars['ID']['input'];
};
type QueryIpToAddressArgs = {
    ipAddress: Scalars['String']['input'];
};
type QueryLoginArgs = {
    device?: InputMaybe<AuthDeviceType>;
    email: Scalars['String']['input'];
    ipAddress?: InputMaybe<Scalars['String']['input']>;
    password: Scalars['String']['input'];
};
type QueryMyProductBillingDataArgs = {
    paginator: PaginatorInput;
};
type QueryMyProductViewHistoryArgs = {
    paginator: PaginatorInput;
};
type QueryMySearchHistoryArgs = {
    paginator: PaginatorInput;
};
type QueryPaginatedAdminAuthSessionsArgs = {
    filters?: InputMaybe<UserFilter>;
    paginator: PaginatorInput;
};
type QueryPaginatedAdminProductViewEntriesArgs = {
    paginator: PaginatorInput;
};
type QueryPopularProductsArgs = {
    dateRange?: InputMaybe<TimestampRangeBetween>;
    paginator: PaginatorInput;
};
type QueryPopularSearchKeywordsArgs = {
    dateRange?: InputMaybe<TimestampRangeBetween>;
    paginator: PaginatorInput;
};
type QueryPriceChangeHistoryArgs = {
    filters?: InputMaybe<PriceHistoryFilter>;
    paginator: PaginatorInput;
    productId: Scalars['ID']['input'];
    stockId: Scalars['ID']['input'];
};
type QueryProductArgs = {
    id: Scalars['ID']['input'];
    viewerTrail?: InputMaybe<ViewerTrailInput>;
};
type QueryProductBillingDataByUserIdArgs = {
    paginator: PaginatorInput;
    userId: Scalars['ID']['input'];
};
type QueryProductSearchArgs = {
    filters?: InputMaybe<ProductSearchFilters>;
    paginator: PaginatorInput;
    search?: InputMaybe<Scalars['String']['input']>;
};
type QueryProductSummaryArgs = {
    branch?: InputMaybe<ProductSummaryBranchInput>;
    id: Scalars['ID']['input'];
    stockId?: InputMaybe<Scalars['ID']['input']>;
};
type QuerySearchKeywordsArgs = {
    search: Scalars['String']['input'];
};
type QueryStockArgs = {
    stockId: Scalars['ID']['input'];
};
type QueryVerifyPasswordResetCodeArgs = {
    code: Scalars['String']['input'];
    email: Scalars['String']['input'];
};
type QueryWeightComponentsFromCategoryIdArgs = {
    categoryId: Scalars['ID']['input'];
};
type QueryYahooOAuthArgs = {
    code: Scalars['String']['input'];
    codeVerifier?: InputMaybe<Scalars['String']['input']>;
    device?: InputMaybe<AuthDeviceType>;
    ipAddress?: InputMaybe<Scalars['String']['input']>;
};
type SaveExternalProductInput = {
    brand?: InputMaybe<Scalars['String']['input']>;
    category?: InputMaybe<Scalars['String']['input']>;
    numPagesToQuery: Scalars['Int']['input'];
    offset?: InputMaybe<Scalars['Int']['input']>;
    search: Scalars['String']['input'];
    upc?: InputMaybe<Scalars['String']['input']>;
};
type SearchHistory = {
    __typename?: 'SearchHistory';
    createdAt: Scalars['Time']['output'];
    id: Scalars['ID']['output'];
    searchTerm: Scalars['String']['output'];
};
type SearchResult = {
    __typename?: 'SearchResult';
    added: Scalars['Int']['output'];
    failed: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};
type Stock = {
    __typename?: 'Stock';
    branch?: Maybe<BranchFlat>;
    branchId: Scalars['ID']['output'];
    createdAt: Scalars['Time']['output'];
    createdBy?: Maybe<CreatedByUser>;
    createdById?: Maybe<Scalars['ID']['output']>;
    id: Scalars['ID']['output'];
    latestPrice?: Maybe<Price>;
    latestPriceId: Scalars['ID']['output'];
    product?: Maybe<Product>;
    productId: Scalars['ID']['output'];
    store?: Maybe<Store>;
    storeId: Scalars['ID']['output'];
    updatedAt: Scalars['Time']['output'];
    updatedBy?: Maybe<UpdatedByUser>;
    updatedById?: Maybe<Scalars['ID']['output']>;
};
type StockSimple = {
    __typename?: 'StockSimple';
    branchId: Scalars['ID']['output'];
    createdAt: Scalars['Time']['output'];
    createdBy?: Maybe<CreatedByUser>;
    createdById?: Maybe<Scalars['ID']['output']>;
    id: Scalars['ID']['output'];
    latestPrice?: Maybe<Price>;
    latestPriceId: Scalars['ID']['output'];
    productId: Scalars['ID']['output'];
    storeId: Scalars['ID']['output'];
    updatedAt: Scalars['Time']['output'];
    updatedBy?: Maybe<UpdatedByUser>;
    updatedById?: Maybe<Scalars['ID']['output']>;
};
type Store = {
    __typename?: 'Store';
    id: Scalars['ID']['output'];
    logo: Scalars['String']['output'];
    name: Scalars['String']['output'];
    slug: Scalars['String']['output'];
    website: Scalars['String']['output'];
};
type StoreUser = {
    __typename?: 'StoreUser';
    approved: Scalars['Boolean']['output'];
    approvedAt?: Maybe<Scalars['Time']['output']>;
    approvedById?: Maybe<Scalars['ID']['output']>;
    approvedByUser?: Maybe<ApprovedByUser>;
    branch?: Maybe<BranchFlat>;
    branchId?: Maybe<Scalars['ID']['output']>;
    createdAt: Scalars['Time']['output'];
    createdBy?: Maybe<CreatedByUser>;
    createdById: Scalars['ID']['output'];
    email: Scalars['String']['output'];
    employeeId?: Maybe<Scalars['String']['output']>;
    encodedId?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    legalName: Scalars['String']['output'];
    role: StoreUserRole;
    store?: Maybe<Store>;
    storeId: Scalars['ID']['output'];
    user?: Maybe<UserShallow>;
    userId?: Maybe<Scalars['ID']['output']>;
};
type StoreUserData = {
    __typename?: 'StoreUserData';
    email: Scalars['String']['output'];
    storeUserId: Scalars['ID']['output'];
};
declare enum StoreUserRole {
    Accounting = "ACCOUNTING",
    Admin = "ADMIN",
    Associate = "ASSOCIATE",
    Auditor = "AUDITOR",
    Inventory = "INVENTORY",
    It = "IT",
    Manager = "MANAGER",
    Marketing = "MARKETING",
    Other = "OTHER",
    Owner = "OWNER",
    Sales = "SALES",
    Supervisor = "SUPERVISOR"
}
type TimestampRangeBetween = {
    from: Scalars['Time']['input'];
    to: Scalars['Time']['input'];
};
type UpdateProduct = {
    approximateWeight?: InputMaybe<Scalars['Boolean']['input']>;
    brand?: InputMaybe<Scalars['String']['input']>;
    categoryId?: InputMaybe<Scalars['ID']['input']>;
    code?: InputMaybe<Scalars['String']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    imageBase64?: InputMaybe<Scalars['String']['input']>;
    imageFile?: InputMaybe<Scalars['Upload']['input']>;
    model?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    netWeight?: InputMaybe<Scalars['Boolean']['input']>;
    quantityType?: InputMaybe<Scalars['String']['input']>;
    quantityValue?: InputMaybe<Scalars['Int']['input']>;
    weight?: InputMaybe<Scalars['String']['input']>;
};
type UpdateUser = {
    address?: InputMaybe<Scalars['String']['input']>;
    avatarBase64?: InputMaybe<Scalars['String']['input']>;
    avatarFile?: InputMaybe<Scalars['Upload']['input']>;
    bio?: InputMaybe<Scalars['String']['input']>;
    birthDate?: InputMaybe<Scalars['Time']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
};
type UpdateUserFull = {
    active?: InputMaybe<Scalars['Boolean']['input']>;
    address?: InputMaybe<Scalars['String']['input']>;
    avatarBase64?: InputMaybe<Scalars['String']['input']>;
    avatarFile?: InputMaybe<Scalars['Upload']['input']>;
    bio?: InputMaybe<Scalars['String']['input']>;
    birthDate?: InputMaybe<Scalars['Time']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    phoneNumber?: InputMaybe<Scalars['String']['input']>;
    role?: InputMaybe<UserRole>;
};
type UpdatedByUser = {
    __typename?: 'UpdatedByUser';
    active?: Maybe<Scalars['Boolean']['output']>;
    avatar?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
};
type User = {
    __typename?: 'User';
    active: Scalars['Boolean']['output'];
    address?: Maybe<Address>;
    addressId?: Maybe<Scalars['ID']['output']>;
    authDevice?: Maybe<AuthDeviceType>;
    authPlatform?: Maybe<AuthPlatformType>;
    authStateId?: Maybe<Scalars['String']['output']>;
    avatar?: Maybe<Scalars['String']['output']>;
    bio?: Maybe<Scalars['String']['output']>;
    birthDate?: Maybe<Scalars['Time']['output']>;
    createdAt: Scalars['Time']['output'];
    email: Scalars['String']['output'];
    expoPushToken?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    phoneNumber?: Maybe<Scalars['String']['output']>;
    role: UserRole;
    updatedAt: Scalars['Time']['output'];
};
type UserFilter = {
    email?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    role?: InputMaybe<UserRole>;
};
declare enum UserRole {
    Admin = "ADMIN",
    Consumer = "CONSUMER",
    Contributor = "CONTRIBUTOR",
    SuperAdmin = "SUPER_ADMIN"
}
type UserShallow = {
    __typename?: 'UserShallow';
    active?: Maybe<Scalars['Boolean']['output']>;
    avatar?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
};
type ViewerTrailInput = {
    metadata?: InputMaybe<ProductViewerMetadata>;
    origin?: InputMaybe<Scalars['String']['input']>;
    referrer?: InputMaybe<ProductReferrer>;
    stockId?: InputMaybe<Scalars['ID']['input']>;
};
type UpdateUserByIdMutationVariables = Exact<{
    userId: Scalars['ID']['input'];
    input: UpdateUserFull;
}>;
type UpdateUserByIdMutation = {
    __typename?: 'Mutation';
    updateUserById: {
        __typename?: 'User';
        id: number;
        email: string;
        phoneNumber?: string | null;
        name: string;
        avatar?: string | null;
        birthDate?: any | null;
        bio?: string | null;
        active: boolean;
        role: UserRole;
        createdAt: any;
        updatedAt: any;
    };
};
type CreateStoreUserAdminMutationVariables = Exact<{
    input: CreateStoreUserAdmin;
}>;
type CreateStoreUserAdminMutation = {
    __typename?: 'Mutation';
    createStoreUserAdmin: {
        __typename?: 'StoreUser';
        id: number;
        storeId: number;
        branchId?: number | null;
        userId?: number | null;
        legalName: string;
        email: string;
        employeeId?: string | null;
        role: StoreUserRole;
        approved: boolean;
        createdAt: any;
        encodedId?: string | null;
        user?: {
            __typename?: 'UserShallow';
            id: number;
            name: string;
            avatar?: string | null;
        } | null;
        createdBy?: {
            __typename?: 'CreatedByUser';
            id: number;
            name: string;
            avatar?: string | null;
            active?: boolean | null;
        } | null;
    };
};
type AdminRemoveAuthSessionMutationVariables = Exact<{
    authStateId: Scalars['String']['input'];
}>;
type AdminRemoveAuthSessionMutation = {
    __typename?: 'Mutation';
    adminRemoveAuthSession: boolean;
};
type CreateBranchFromFullAddressMutationVariables = Exact<{
    storeId: Scalars['ID']['input'];
    fullAddress: Scalars['String']['input'];
}>;
type CreateBranchFromFullAddressMutation = {
    __typename?: 'Mutation';
    createBranchWithFullAddress: {
        __typename?: 'Branch';
        id: number;
        name: string;
        addressId: number;
        storeId: number;
        address: {
            __typename?: 'Address';
            id: number;
            latitude: number;
            longitude: number;
            mapsLink: string;
            fullAddress: string;
            street?: string | null;
            city: string;
            administrativeDivision: string;
            countryCode: string;
            country?: string | null;
            zipCode: string;
        };
    };
};
type CreateBranchMutationVariables = Exact<{
    input: CreateBranch;
}>;
type CreateBranchMutation = {
    __typename?: 'Mutation';
    createBranch: {
        __typename?: 'Branch';
        id: number;
        name: string;
        addressId: number;
        storeId: number;
        address: {
            __typename?: 'Address';
            id: number;
            latitude: number;
            longitude: number;
            mapsLink: string;
            fullAddress: string;
            street?: string | null;
            city: string;
            administrativeDivision: string;
            countryCode: string;
            country?: string | null;
            zipCode: string;
        };
    };
};
type CreateCategoryMutationVariables = Exact<{
    input: CreateCategory;
}>;
type CreateCategoryMutation = {
    __typename?: 'Mutation';
    createCategory: {
        __typename?: 'Category';
        id: number;
        name: string;
        path: string;
        expandedPathname: string;
        categoryAlias?: string | null;
        depth?: number | null;
    };
};
type AddGroceryListItemMutationVariables = Exact<{
    groceryListId: Scalars['ID']['input'];
    input: CreateGroceryListItemInput;
}>;
type AddGroceryListItemMutation = {
    __typename?: 'Mutation';
    addGroceryListItem: {
        __typename?: 'GroceryListItem';
        id: number;
    };
};
type UpdateGroceryListItemMutationVariables = Exact<{
    groceryListItemId: Scalars['ID']['input'];
    input: CreateGroceryListItemInput;
}>;
type UpdateGroceryListItemMutation = {
    __typename?: 'Mutation';
    updateGroceryListItem: {
        __typename?: 'GroceryListItem';
        id: number;
    };
};
type DeleteGroceryListItemMutationVariables = Exact<{
    groceryListItemId: Scalars['ID']['input'];
}>;
type DeleteGroceryListItemMutation = {
    __typename?: 'Mutation';
    deleteGroceryListItem: {
        __typename?: 'GroceryListItem';
        id: number;
    };
};
type MarkGroceryListItemMutationVariables = Exact<{
    groceryListItemId: Scalars['ID']['input'];
    completed: Scalars['Boolean']['input'];
}>;
type MarkGroceryListItemMutation = {
    __typename?: 'Mutation';
    markGroceryListItem: {
        __typename?: 'GroceryListItem';
        id: number;
        completed: boolean;
    };
};
type AddToListMutationVariables = Exact<{
    listId: Scalars['ID']['input'];
    productId: Scalars['ID']['input'];
    stockId?: InputMaybe<Scalars['ID']['input']>;
}>;
type AddToListMutation = {
    __typename?: 'Mutation';
    addToList: {
        __typename?: 'ProductList';
        id: number;
        userId: number;
        listId: number;
        productId: number;
        stockId?: number | null;
        createdAt: any;
    };
};
type RemoveFromListMutationVariables = Exact<{
    listId: Scalars['ID']['input'];
    productListId: Scalars['ID']['input'];
}>;
type RemoveFromListMutation = {
    __typename?: 'Mutation';
    removeFromList: {
        __typename?: 'ProductList';
        id: number;
        userId: number;
        listId: number;
        productId: number;
        stockId?: number | null;
        createdAt: any;
    };
};
type RemoveFromListWithProductIdMutationVariables = Exact<{
    listId: Scalars['ID']['input'];
    productId: Scalars['ID']['input'];
    stockId?: InputMaybe<Scalars['ID']['input']>;
}>;
type RemoveFromListWithProductIdMutation = {
    __typename?: 'Mutation';
    removeFromListWithProductId: {
        __typename?: 'ProductList';
        id: number;
        userId: number;
        listId: number;
        productId: number;
        stockId?: number | null;
        createdAt: any;
    };
};
type AddBranchToListMutationVariables = Exact<{
    listId: Scalars['ID']['input'];
    branchId: Scalars['ID']['input'];
}>;
type AddBranchToListMutation = {
    __typename?: 'Mutation';
    addBranchToList: {
        __typename?: 'BranchList';
        id: number;
        userId: number;
        listId: number;
        branchId: number;
        createdAt: any;
    };
};
type BulkAddBranchesToListMutationVariables = Exact<{
    listId: Scalars['ID']['input'];
    branchIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;
type BulkAddBranchesToListMutation = {
    __typename?: 'Mutation';
    bulkAddBranchesToList: Array<{
        __typename?: 'BranchList';
        id: number;
        userId: number;
        listId: number;
        branchId: number;
        createdAt: any;
    }>;
};
type RemoveBranchFromListMutationVariables = Exact<{
    listId: Scalars['ID']['input'];
    branchListId: Scalars['ID']['input'];
}>;
type RemoveBranchFromListMutation = {
    __typename?: 'Mutation';
    removeBranchFromList: {
        __typename?: 'BranchList';
        id: number;
        userId: number;
        listId: number;
        branchId: number;
        createdAt: any;
    };
};
type CreatePriceMutationVariables = Exact<{
    input: CreatePrice;
}>;
type CreatePriceMutation = {
    __typename?: 'Mutation';
    createPrice: {
        __typename?: 'Price';
        id: number;
        amount: number;
        currencyCode: string;
        productId: number;
        storeId: number;
        stockId: number;
        branchId: number;
    };
};
type UpdateProductNutritionDataMutationVariables = Exact<{
    productId: Scalars['ID']['input'];
}>;
type UpdateProductNutritionDataMutation = {
    __typename?: 'Mutation';
    updateProductNutritionData: {
        __typename?: 'ProductNutrition';
        productId: number;
        openfoodfactsUpdatedAt: string;
        createdAt: any;
        updatedAt: any;
    };
};
type CreateProductMutationVariables = Exact<{
    input: CreateProduct;
}>;
type CreateProductMutation = {
    __typename?: 'Mutation';
    createProduct: {
        __typename?: 'Product';
        id: number;
        name: string;
        image: string;
        description: string;
        brand: string;
        code: string;
        model?: string | null;
        categoryId: number;
        weightValue?: number | null;
        weightType?: string | null;
        createdAt: any;
        updatedAt: any;
        category?: {
            __typename?: 'Category';
            id: number;
            name: string;
            expandedPathname: string;
            path: string;
        } | null;
    };
};
type UpdateProductMutationVariables = Exact<{
    id: Scalars['ID']['input'];
    input: UpdateProduct;
}>;
type UpdateProductMutation = {
    __typename?: 'Mutation';
    updateProduct: {
        __typename?: 'Product';
        id: number;
        name: string;
        image: string;
        description: string;
        brand: string;
        code: string;
        model?: string | null;
        categoryId: number;
        weightValue?: number | null;
        weightType?: string | null;
        createdAt: any;
        updatedAt: any;
        category?: {
            __typename?: 'Category';
            id: number;
            name: string;
            expandedPathname: string;
            path: string;
        } | null;
    };
};
type ExtractAndCreateProductMutationVariables = Exact<{
    barcode: Scalars['String']['input'];
    base64Image: Scalars['String']['input'];
}>;
type ExtractAndCreateProductMutation = {
    __typename?: 'Mutation';
    extractAndCreateProduct: {
        __typename?: 'Product';
        id: number;
        code: string;
        brand: string;
        name: string;
        categoryId: number;
        weightValue?: number | null;
        weightType?: string | null;
        quantityValue: number;
        quantityType: string;
        description: string;
    };
};
type SanitizeProductMutationVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
type SanitizeProductMutation = {
    __typename?: 'Mutation';
    sanitizeProduct: {
        __typename?: 'Product';
        id: number;
        name: string;
        image: string;
        description: string;
        brand: string;
        code: string;
        model?: string | null;
        categoryId: number;
        approximateWeight: boolean;
        netWeight: boolean;
        weightValue?: number | null;
        weightType?: string | null;
        quantityValue: number;
        quantityType: string;
        createdAt: any;
        updatedAt: any;
        views: number;
        category?: {
            __typename?: 'Category';
            id: number;
            name: string;
            categoryAlias?: string | null;
            expandedPathname: string;
            path: string;
        } | null;
    };
};
type AcceptPendingStoreUserInviteMutationVariables = Exact<{
    data: Scalars['String']['input'];
}>;
type AcceptPendingStoreUserInviteMutation = {
    __typename?: 'Mutation';
    acceptPendingStoreUserInvite: {
        __typename?: 'StoreUser';
        id: number;
        storeId: number;
        branchId?: number | null;
        userId?: number | null;
        legalName: string;
        email: string;
        employeeId?: string | null;
        role: StoreUserRole;
        approvedAt?: any | null;
        approvedById?: number | null;
        approved: boolean;
        createdById: number;
        createdAt: any;
        store?: {
            __typename?: 'Store';
            id: number;
            slug: string;
            name: string;
            logo: string;
        } | null;
        branch?: {
            __typename?: 'BranchFlat';
            id: number;
            slug: string;
            name: string;
            address: {
                __typename?: 'Address';
                id: number;
                fullAddress: string;
            };
        } | null;
        user?: {
            __typename?: 'UserShallow';
            id: number;
            name: string;
            avatar?: string | null;
        } | null;
        approvedByUser?: {
            __typename?: 'ApprovedByUser';
            id: number;
            name: string;
            avatar?: string | null;
        } | null;
        createdBy?: {
            __typename?: 'CreatedByUser';
            id: number;
            name: string;
            avatar?: string | null;
            active?: boolean | null;
        } | null;
    };
};
type DeclinePendingStoreUserInviteMutationVariables = Exact<{
    data: Scalars['String']['input'];
}>;
type DeclinePendingStoreUserInviteMutation = {
    __typename?: 'Mutation';
    declinePendingStoreUserInvite: boolean;
};
type CreateStoreMutationVariables = Exact<{
    input: CreateStore;
}>;
type CreateStoreMutation = {
    __typename?: 'Mutation';
    createStore: {
        __typename?: 'Store';
        id: number;
        name: string;
        logo: string;
        website: string;
    };
};
type CreateAccountMutationVariables = Exact<{
    email: Scalars['String']['input'];
    name: Scalars['String']['input'];
    password: Scalars['String']['input'];
}>;
type CreateAccountMutation = {
    __typename?: 'Mutation';
    createAccount: {
        __typename?: 'User';
        id: number;
        name: string;
        email: string;
        phoneNumber?: string | null;
        createdAt: any;
        updatedAt: any;
        authPlatform?: AuthPlatformType | null;
        role: UserRole;
    };
};
type VerifyEmailMutationVariables = Exact<{
    verificationCode: Scalars['String']['input'];
}>;
type VerifyEmailMutation = {
    __typename?: 'Mutation';
    verifyEmail: {
        __typename?: 'User';
        id: number;
        name: string;
        email: string;
        avatar?: string | null;
        createdAt: any;
        updatedAt: any;
        active: boolean;
        authPlatform?: AuthPlatformType | null;
        authStateId?: string | null;
        role: UserRole;
    };
};
type ResendVerificationMutationVariables = Exact<{
    email: Scalars['String']['input'];
}>;
type ResendVerificationMutation = {
    __typename?: 'Mutation';
    resendEmailVerificationCode: boolean;
};
type LogoutMutationVariables = Exact<{
    [key: string]: never;
}>;
type LogoutMutation = {
    __typename?: 'Mutation';
    logout: boolean;
};
type UpdateProfileMutationVariables = Exact<{
    input: UpdateUser;
}>;
type UpdateProfileMutation = {
    __typename?: 'Mutation';
    updateProfile: {
        __typename?: 'User';
        id: number;
        name: string;
        email: string;
        avatar?: string | null;
        createdAt: any;
        updatedAt: any;
        active: boolean;
        authPlatform?: AuthPlatformType | null;
        authStateId?: string | null;
        role: UserRole;
        addressId?: number | null;
        birthDate?: any | null;
        phoneNumber?: string | null;
        bio?: string | null;
        address?: {
            __typename?: 'Address';
            id: number;
            latitude: number;
            longitude: number;
            mapsLink: string;
            fullAddress: string;
            street?: string | null;
            city: string;
            administrativeDivision: string;
            countryCode: string;
            country?: string | null;
            zipCode: string;
        } | null;
    };
};
type DeleteMyAccountMutationVariables = Exact<{
    [key: string]: never;
}>;
type DeleteMyAccountMutation = {
    __typename?: 'Mutation';
    deleteMyAccount: boolean;
};
type RequestResetPasswordMutationVariables = Exact<{
    email: Scalars['String']['input'];
}>;
type RequestResetPasswordMutation = {
    __typename?: 'Mutation';
    requestPasswordReset: boolean;
};
type UpdatePasswordWithResetCodeMutationVariables = Exact<{
    email: Scalars['String']['input'];
    code: Scalars['String']['input'];
    newPassword: Scalars['String']['input'];
}>;
type UpdatePasswordWithResetCodeMutation = {
    __typename?: 'Mutation';
    updatePasswordWithResetCode: boolean;
};
type RegisterExpoPushTokenMutationVariables = Exact<{
    expoPushToken: Scalars['String']['input'];
}>;
type RegisterExpoPushTokenMutation = {
    __typename?: 'Mutation';
    registerExpoPushToken: {
        __typename?: 'User';
        id: number;
        name: string;
        email: string;
        avatar?: string | null;
        createdAt: any;
        updatedAt: any;
        active: boolean;
        authPlatform?: AuthPlatformType | null;
        authStateId?: string | null;
        expoPushToken?: string | null;
        role: UserRole;
        addressId?: number | null;
        address?: {
            __typename?: 'Address';
            id: number;
            latitude: number;
            longitude: number;
            mapsLink: string;
            fullAddress: string;
            street?: string | null;
            city: string;
            administrativeDivision: string;
            countryCode: string;
            country?: string | null;
            zipCode: string;
        } | null;
    };
};
type GetAllUsersQueryVariables = Exact<{
    paginator: PaginatorInput;
    filters?: InputMaybe<UserFilter>;
}>;
type GetAllUsersQuery = {
    __typename?: 'Query';
    getAllUsers: {
        __typename?: 'PaginatedUsers';
        users: Array<{
            __typename?: 'User';
            id: number;
            email: string;
            phoneNumber?: string | null;
            name: string;
            avatar?: string | null;
            birthDate?: any | null;
            bio?: string | null;
            active: boolean;
            role: UserRole;
            createdAt: any;
            updatedAt: any;
        }>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type ProductBillingDataByUserIdQueryVariables = Exact<{
    userId: Scalars['ID']['input'];
    paginator: PaginatorInput;
}>;
type ProductBillingDataByUserIdQuery = {
    __typename?: 'Query';
    productBillingDataByUserId: {
        __typename?: 'PaginatedProductBilling';
        data: Array<{
            __typename?: 'ProductBilling';
            id: number;
            rate: number;
            userId: number;
            productId: number;
            createdAt: any;
            paidAt?: any | null;
            billingRateType: string;
            user?: {
                __typename?: 'UserShallow';
                id: number;
                name: string;
                avatar?: string | null;
                active?: boolean | null;
            } | null;
            product?: {
                __typename?: 'Product';
                id: number;
                name: string;
                image: string;
                brand: string;
                code: string;
                createdAt: any;
                updatedAt: any;
                category?: {
                    __typename?: 'Category';
                    id: number;
                    name: string;
                    expandedPathname: string;
                    path: string;
                } | null;
            } | null;
        }>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type PaginatedAdminAuthSessionsQueryVariables = Exact<{
    paginator: PaginatorInput;
    filters?: InputMaybe<UserFilter>;
}>;
type PaginatedAdminAuthSessionsQuery = {
    __typename?: 'Query';
    paginatedAdminAuthSessions: {
        __typename?: 'PaginatedAuthSessions';
        authSessions: Array<{
            __typename?: 'AuthSession';
            id: string;
            loggedInAt: any;
            userId: number;
            ipAddress?: string | null;
            platform: AuthPlatformType;
            device?: AuthDeviceType | null;
            expoPushToken?: string | null;
            user?: {
                __typename?: 'User';
                id: number;
                name: string;
                avatar?: string | null;
                active: boolean;
                createdAt: any;
                updatedAt: any;
            } | null;
        }>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type PaginatedAdminProductViewEntriesQueryVariables = Exact<{
    paginator: PaginatorInput;
}>;
type PaginatedAdminProductViewEntriesQuery = {
    __typename?: 'Query';
    paginatedAdminProductViewEntries: {
        __typename?: 'PaginatedProductViews';
        productViewEntries: Array<{
            __typename?: 'ProductView';
            id: number;
            productId: number;
            stockId?: number | null;
            userId?: number | null;
            origin?: string | null;
            platform?: AuthDeviceType | null;
            createdAt: any;
            referrer?: string | null;
            metadata?: string | null;
            product?: {
                __typename?: 'Product';
                id: number;
                code: string;
                name: string;
                image: string;
            } | null;
            stock?: {
                __typename?: 'Stock';
                id: number;
            } | null;
            user?: {
                __typename?: 'UserShallow';
                id: number;
                name: string;
                avatar?: string | null;
                active?: boolean | null;
            } | null;
        }>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type AllBranchesQueryVariables = Exact<{
    storeId?: InputMaybe<Scalars['ID']['input']>;
    storeSlug?: InputMaybe<Scalars['String']['input']>;
    paginator: PaginatorInput;
    search?: InputMaybe<Scalars['String']['input']>;
    location?: InputMaybe<LocationInput>;
}>;
type AllBranchesQuery = {
    __typename?: 'Query';
    allBranches: {
        __typename?: 'PaginatedBranches';
        branches: Array<{
            __typename?: 'Branch';
            id: number;
            slug: string;
            name: string;
            addressId: number;
            storeId: number;
            storeSlug?: string | null;
            address: {
                __typename?: 'Address';
                id: number;
                latitude: number;
                longitude: number;
                mapsLink: string;
                fullAddress: string;
                street?: string | null;
                city: string;
                administrativeDivision: string;
                countryCode: string;
                country?: string | null;
                zipCode: string;
                distance?: number | null;
            };
        }>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type BranchQueryVariables = Exact<{
    branchId?: InputMaybe<Scalars['ID']['input']>;
    branchSlug?: InputMaybe<Scalars['String']['input']>;
    storeId?: InputMaybe<Scalars['ID']['input']>;
    storeSlug?: InputMaybe<Scalars['String']['input']>;
}>;
type BranchQuery = {
    __typename?: 'Query';
    findBranch: {
        __typename?: 'Branch';
        id: number;
        slug: string;
        name: string;
        addressId: number;
        storeId: number;
        storeSlug?: string | null;
        address: {
            __typename?: 'Address';
            id: number;
            latitude: number;
            longitude: number;
            mapsLink: string;
            fullAddress: string;
            street?: string | null;
            city: string;
            administrativeDivision: string;
            countryCode: string;
            country?: string | null;
            zipCode: string;
        };
    };
    findStore: {
        __typename?: 'Store';
        id: number;
        slug: string;
        name: string;
        logo: string;
        website: string;
    };
};
type FindBranchQueryVariables = Exact<{
    branchId?: InputMaybe<Scalars['ID']['input']>;
    branchSlug?: InputMaybe<Scalars['String']['input']>;
    storeId?: InputMaybe<Scalars['ID']['input']>;
    storeSlug?: InputMaybe<Scalars['String']['input']>;
}>;
type FindBranchQuery = {
    __typename?: 'Query';
    findBranch: {
        __typename?: 'Branch';
        id: number;
        slug: string;
        name: string;
        addressId: number;
        storeId: number;
        storeSlug?: string | null;
        address: {
            __typename?: 'Address';
            id: number;
            latitude: number;
            longitude: number;
            mapsLink: string;
            fullAddress: string;
            street?: string | null;
            city: string;
            administrativeDivision: string;
            countryCode: string;
            country?: string | null;
            zipCode: string;
        };
    };
};
type FindBranchesByDistanceQueryVariables = Exact<{
    lat: Scalars['Float']['input'];
    lon: Scalars['Float']['input'];
    radiusMeters: Scalars['Int']['input'];
}>;
type FindBranchesByDistanceQuery = {
    __typename?: 'Query';
    findBranchesByDistance: Array<{
        __typename?: 'Branch';
        id: number;
        slug: string;
        name: string;
        storeId: number;
        storeSlug?: string | null;
        addressId: number;
        store?: {
            __typename?: 'Store';
            id: number;
            slug: string;
            name: string;
            website: string;
            logo: string;
        } | null;
        address: {
            __typename?: 'Address';
            id: number;
            distance?: number | null;
            latitude: number;
            longitude: number;
            mapsLink: string;
            fullAddress: string;
            street?: string | null;
            city: string;
            administrativeDivision: string;
            countryCode: string;
            country?: string | null;
            zipCode: string;
        };
    }>;
};
type FavoriteBranchesWithPricesQueryVariables = Exact<{
    productId: Scalars['ID']['input'];
}>;
type FavoriteBranchesWithPricesQuery = {
    __typename?: 'Query';
    getFavoriteBranchesWithPrices: Array<{
        __typename?: 'BranchListWithPrices';
        id: number;
        branchId: number;
        approximatePrice?: number | null;
        branch?: {
            __typename?: 'Branch';
            id: number;
            slug: string;
            name: string;
            storeId: number;
            storeSlug?: string | null;
            addressId: number;
            store?: {
                __typename?: 'Store';
                id: number;
                slug: string;
                name: string;
                logo: string;
            } | null;
            address: {
                __typename?: 'Address';
                id: number;
                distance?: number | null;
                latitude: number;
                longitude: number;
                mapsLink: string;
                fullAddress: string;
                street?: string | null;
                city: string;
                administrativeDivision: string;
                countryCode: string;
                country?: string | null;
                zipCode: string;
            };
        } | null;
        stock?: {
            __typename?: 'Stock';
            id: number;
            productId: number;
            storeId: number;
            branchId: number;
            latestPriceId: number;
            latestPrice?: {
                __typename?: 'Price';
                id: number;
                productId: number;
                branchId: number;
                storeId: number;
                amount: number;
                currencyCode: string;
                createdAt: any;
                sale: boolean;
                originalPrice?: number | null;
                condition?: string | null;
                expiresAt?: any | null;
                unitType: string;
                createdBy?: {
                    __typename?: 'CreatedByUser';
                    id: number;
                    name: string;
                    avatar?: string | null;
                } | null;
            } | null;
        } | null;
    }>;
};
type AllBrandsQueryVariables = Exact<{
    joinStock?: InputMaybe<Scalars['Boolean']['input']>;
}>;
type AllBrandsQuery = {
    __typename?: 'Query';
    allBrands: Array<{
        __typename?: 'Brand';
        brand: string;
        products: any;
    }>;
};
type GetCategoriesQueryVariables = Exact<{
    depth?: InputMaybe<Scalars['Int']['input']>;
    parentId?: InputMaybe<Scalars['ID']['input']>;
}>;
type GetCategoriesQuery = {
    __typename?: 'Query';
    getCategories: Array<{
        __typename?: 'Category';
        id: number;
        name: string;
        path: string;
        expandedPathname: string;
        categoryAlias?: string | null;
        depth?: number | null;
    }>;
};
type CategorySearchQueryVariables = Exact<{
    search: Scalars['String']['input'];
    quickSearchMode?: InputMaybe<Scalars['Boolean']['input']>;
}>;
type CategorySearchQuery = {
    __typename?: 'Query';
    categorySearch: Array<{
        __typename?: 'Category';
        id: number;
        name: string;
    }>;
};
type GetCategoryQueryVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
type GetCategoryQuery = {
    __typename?: 'Query';
    getCategory: {
        __typename?: 'Category';
        id: number;
        name: string;
        path: string;
        expandedPathname: string;
        categoryAlias?: string | null;
    };
};
type GroceryListsQueryVariables = Exact<{
    [key: string]: never;
}>;
type GroceryListsQuery = {
    __typename?: 'Query';
    groceryLists: Array<{
        __typename?: 'GroceryList';
        id: number;
        name: string;
        default: boolean;
        createdAt: any;
    }>;
};
type GroceryListItemsQueryVariables = Exact<{
    groceryListId: Scalars['ID']['input'];
    filters?: InputMaybe<GroceryListItemsFilters>;
}>;
type GroceryListItemsQuery = {
    __typename?: 'Query';
    groceryListItems: Array<{
        __typename?: 'GroceryListItem';
        id: number;
        groceryListId: number;
        productId?: number | null;
        category?: string | null;
        weight?: string | null;
        quantity: number;
        unit?: string | null;
        completed: boolean;
        createdAt: any;
        product?: {
            __typename?: 'Product';
            id: number;
            code: string;
            name: string;
            image: string;
            categoryId: number;
            approximateWeight: boolean;
            netWeight: boolean;
            weightValue?: number | null;
            weightType?: string | null;
            quantityValue: number;
            quantityType: string;
            createdAt: any;
            updatedAt: any;
            views: number;
            category?: {
                __typename?: 'Category';
                id: number;
                name: string;
            } | null;
        } | null;
    }>;
};
type DefaultGroceryListItemsQueryVariables = Exact<{
    filters?: InputMaybe<GroceryListItemsFilters>;
}>;
type DefaultGroceryListItemsQuery = {
    __typename?: 'Query';
    defaultGroceryListItems: Array<{
        __typename?: 'GroceryListItem';
        id: number;
        groceryListId: number;
        productId?: number | null;
        category?: string | null;
        weight?: string | null;
        quantity: number;
        unit?: string | null;
        completed: boolean;
        createdAt: any;
        product?: {
            __typename?: 'Product';
            id: number;
            code: string;
            name: string;
            image: string;
            categoryId: number;
            approximateWeight: boolean;
            netWeight: boolean;
            weightValue?: number | null;
            weightType?: string | null;
            quantityValue: number;
            quantityType: string;
            createdAt: any;
            updatedAt: any;
            views: number;
            category?: {
                __typename?: 'Category';
                id: number;
                name: string;
            } | null;
        } | null;
    }>;
};
type CountGroceryListItemsQueryVariables = Exact<{
    groceryListId?: InputMaybe<Scalars['ID']['input']>;
    includeCompleted?: InputMaybe<Scalars['Boolean']['input']>;
}>;
type CountGroceryListItemsQuery = {
    __typename?: 'Query';
    countGroceryListItems: number;
};
type GetAllListsQueryVariables = Exact<{
    listType?: InputMaybe<ListType>;
}>;
type GetAllListsQuery = {
    __typename?: 'Query';
    getAllLists: Array<{
        __typename?: 'List';
        id: number;
        name: string;
        type: ListType;
        userId: number;
        createdAt: any;
        productList?: Array<{
            __typename?: 'ProductList';
            id: number;
            listId: number;
            productId: number;
            stockId?: number | null;
            createdAt: any;
        }> | null;
        branchList?: Array<{
            __typename?: 'BranchList';
            id: number;
            listId: number;
            branchId: number;
            createdAt: any;
        }> | null;
    }>;
};
type GetAllProductListsByListIdQueryVariables = Exact<{
    listId: Scalars['ID']['input'];
}>;
type GetAllProductListsByListIdQuery = {
    __typename?: 'Query';
    getAllProductListsByListId: Array<{
        __typename?: 'ProductList';
        id: number;
        listId: number;
        userId: number;
        productId: number;
        type?: ListType | null;
        stockId?: number | null;
        createdAt: any;
        product?: {
            __typename?: 'Product';
            id: number;
            name: string;
            image: string;
            description: string;
            brand: string;
            code: string;
            model?: string | null;
            categoryId: number;
            approximateWeight: boolean;
            netWeight: boolean;
            weightValue?: number | null;
            weightType?: string | null;
            quantityValue: number;
            quantityType: string;
            createdAt: any;
            updatedAt: any;
            category?: {
                __typename?: 'Category';
                id: number;
                name: string;
                expandedPathname: string;
                path: string;
            } | null;
        } | null;
        stock?: {
            __typename?: 'Stock';
            id: number;
            productId: number;
            storeId: number;
            branchId: number;
            latestPriceId: number;
            store?: {
                __typename?: 'Store';
                id: number;
                slug: string;
                name: string;
                logo: string;
            } | null;
            branch?: {
                __typename?: 'BranchFlat';
                id: number;
                slug: string;
                name: string;
                addressId: number;
                address: {
                    __typename?: 'Address';
                    id: number;
                    latitude: number;
                    longitude: number;
                    mapsLink: string;
                    fullAddress: string;
                    street?: string | null;
                    city: string;
                    administrativeDivision: string;
                    countryCode: string;
                    country?: string | null;
                    zipCode: string;
                };
            } | null;
            latestPrice?: {
                __typename?: 'Price';
                id: number;
                productId: number;
                branchId: number;
                storeId: number;
                amount: number;
                currencyCode: string;
                createdAt: any;
                sale: boolean;
                originalPrice?: number | null;
                condition?: string | null;
                expiresAt?: any | null;
                unitType: string;
            } | null;
        } | null;
    }>;
};
type GetAllBranchListsByListIdQueryVariables = Exact<{
    listId: Scalars['ID']['input'];
}>;
type GetAllBranchListsByListIdQuery = {
    __typename?: 'Query';
    getAllBranchListsByListId: Array<{
        __typename?: 'BranchList';
        id: number;
        listId: number;
        branchId: number;
        createdAt: any;
        branch?: {
            __typename?: 'Branch';
            id: number;
            slug: string;
            name: string;
            addressId: number;
            storeId: number;
            storeSlug?: string | null;
            address: {
                __typename?: 'Address';
                id: number;
                latitude: number;
                longitude: number;
                mapsLink: string;
                fullAddress: string;
                street?: string | null;
                city: string;
                administrativeDivision: string;
                countryCode: string;
                country?: string | null;
                zipCode: string;
            };
            store?: {
                __typename?: 'Store';
                id: number;
                slug: string;
                name: string;
                logo: string;
            } | null;
        } | null;
    }>;
};
type GetAllCountriesQueryVariables = Exact<{
    [key: string]: never;
}>;
type GetAllCountriesQuery = {
    __typename?: 'Query';
    getAllCountries: Array<{
        __typename?: 'Country';
        code: string;
        name: string;
        callingCode?: string | null;
        language?: string | null;
        administrativeDivisions: Array<{
            __typename?: 'AdministrativeDivision';
            name: string;
            cities: string;
        }>;
        currency?: {
            __typename?: 'Currency';
            currencyCode: string;
            name: string;
            symbol: string;
            symbolNative: string;
            decimals: number;
            numToBasic?: number | null;
        } | null;
    }>;
};
type CheckAppVersionQueryVariables = Exact<{
    platform: AuthDeviceType;
    version: Scalars['String']['input'];
}>;
type CheckAppVersionQuery = {
    __typename?: 'Query';
    checkAppVersion: boolean;
};
type IpToAddressQueryVariables = Exact<{
    ipAddress: Scalars['String']['input'];
}>;
type IpToAddressQuery = {
    __typename?: 'Query';
    ipToAddress: {
        __typename?: 'Address';
        id: number;
        latitude: number;
        longitude: number;
        mapsLink: string;
        fullAddress: string;
        street?: string | null;
        city: string;
        administrativeDivision: string;
        zipCode: string;
        countryCode: string;
        country?: string | null;
    };
};
type PriceChangeHistoryQueryVariables = Exact<{
    productId: Scalars['ID']['input'];
    stockId: Scalars['ID']['input'];
    paginator: PaginatorInput;
    filters?: InputMaybe<PriceHistoryFilter>;
}>;
type PriceChangeHistoryQuery = {
    __typename?: 'Query';
    priceChangeHistory: {
        __typename?: 'PaginatedPriceHistory';
        prices: Array<{
            __typename?: 'Price';
            id: number;
            productId: number;
            stockId: number;
            branchId: number;
            storeId: number;
            amount: number;
            originalPrice?: number | null;
            sale: boolean;
            expiresAt?: any | null;
            condition?: string | null;
            unitType: string;
            currencyCode: string;
            createdAt: any;
            createdBy?: {
                __typename?: 'CreatedByUser';
                id: number;
                name: string;
                avatar?: string | null;
            } | null;
        }>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type GetProductNutritionDataQueryVariables = Exact<{
    productId: Scalars['ID']['input'];
}>;
type GetProductNutritionDataQuery = {
    __typename?: 'Query';
    getProductNutritionData: {
        __typename?: 'ProductNutrition';
        productId: number;
        servingSize?: string | null;
        servingSizeUnit?: string | null;
        servingSizeValue?: number | null;
        ingredientText?: string | null;
        ingredientList?: Array<string> | null;
        vegan?: boolean | null;
        vegetarian?: boolean | null;
        glutenFree?: boolean | null;
        lactoseFree?: boolean | null;
        halal?: boolean | null;
        kosher?: boolean | null;
        createdAt: any;
        updatedAt: any;
        nutriments?: {
            __typename?: 'ProductNutriment';
            salt?: number | null;
            salt100g?: number | null;
            saltValue?: number | null;
            saltServing?: number | null;
            saltUnit?: string | null;
            sugars?: number | null;
            sugars100g?: number | null;
            sugarsValue?: number | null;
            sugarsServing?: number | null;
            sugarsUnit?: string | null;
            iron?: number | null;
            iron100g?: number | null;
            ironValue?: number | null;
            ironServing?: number | null;
            ironUnit?: string | null;
            ironLabel?: string | null;
            calcium?: number | null;
            calcium100g?: number | null;
            calciumValue?: number | null;
            calciumServing?: number | null;
            calciumUnit?: string | null;
            calciumLabel?: string | null;
            cholesterol100g?: number | null;
            saturatedFat?: number | null;
            saturatedFat100g?: number | null;
            saturatedFatValue?: number | null;
            saturatedFatServing?: number | null;
            saturatedFatUnit?: string | null;
            fat?: number | null;
            fat100g?: number | null;
            fatValue?: number | null;
            fatServing?: number | null;
            fatUnit?: string | null;
            transFat?: number | null;
            transFat100g?: number | null;
            transFatValue?: number | null;
            transFatServing?: number | null;
            transFatUnit?: string | null;
            transFatLabel?: string | null;
            vitaminA?: number | null;
            vitaminA100g?: number | null;
            vitaminAValue?: number | null;
            vitaminAServing?: number | null;
            vitaminAUnit?: string | null;
            vitaminALabel?: string | null;
            vitaminC?: number | null;
            vitaminC100g?: number | null;
            vitaminCValue?: number | null;
            vitaminCServing?: number | null;
            vitaminCUnit?: string | null;
            vitaminCLabel?: string | null;
            proteins?: number | null;
            proteins100g?: number | null;
            proteinsValue?: number | null;
            proteinsServing?: number | null;
            proteinsUnit?: string | null;
            fiber?: number | null;
            fiber100g?: number | null;
            fiberValue?: number | null;
            fiberServing?: number | null;
            fiberUnit?: string | null;
            carbohydrates?: number | null;
            carbohydrates100g?: number | null;
            carbohydratesValue?: number | null;
            carbohydratesServing?: number | null;
            carbohydratesUnit?: string | null;
            alcohol?: number | null;
            alcohol100g?: number | null;
            alcoholValue?: number | null;
            alcoholServing?: number | null;
            alcoholUnit?: string | null;
            sodium?: number | null;
            sodium100g?: number | null;
            sodiumValue?: number | null;
            sodiumServing?: number | null;
            sodiumUnit?: string | null;
            potassium100g?: number | null;
            polyunsaturatedFat100g?: number | null;
            monounsaturatedFat100g?: number | null;
            novaGroup?: number | null;
            novaGroup100g?: number | null;
            novaGroupServing?: number | null;
            energy?: number | null;
            energy100g?: number | null;
            energyValue?: number | null;
            energyServing?: number | null;
            energyUnit?: string | null;
            energyKcal?: number | null;
            energyKcal100g?: number | null;
            energyKcalValue?: number | null;
            energyKcalServing?: number | null;
            energyKcalUnit?: string | null;
            nutritionScoreFr?: number | null;
            nutritionScoreFr100g?: number | null;
            nutritionScoreFrServing?: number | null;
            nutritionScoreUk?: number | null;
            nutritionScoreUk100g?: number | null;
            nutritionScoreUkServing?: number | null;
        } | null;
    };
};
type BarcodeScanQueryVariables = Exact<{
    barcode: Scalars['String']['input'];
    searchMode?: InputMaybe<Scalars['Boolean']['input']>;
    location?: InputMaybe<LocationInput>;
}>;
type BarcodeScanQuery = {
    __typename?: 'Query';
    barcodeScan: {
        __typename?: 'Product';
        id: number;
        name: string;
        image: string;
        description: string;
        brand: string;
        code: string;
        model?: string | null;
        categoryId: number;
        approximateWeight: boolean;
        netWeight: boolean;
        weightValue?: number | null;
        weightType?: string | null;
        quantityValue: number;
        quantityType: string;
        createdAt: any;
        updatedAt: any;
        category?: {
            __typename?: 'Category';
            id: number;
            name: string;
            expandedPathname: string;
            path: string;
        } | null;
        stock?: {
            __typename?: 'Stock';
            id: number;
            productId: number;
            storeId: number;
            branchId: number;
            latestPriceId: number;
        } | null;
    };
};
type ProductQueryVariables = Exact<{
    productId: Scalars['ID']['input'];
    viewerTrail?: InputMaybe<ViewerTrailInput>;
}>;
type ProductQuery = {
    __typename?: 'Query';
    product: {
        __typename?: 'Product';
        id: number;
        name: string;
        image: string;
        description: string;
        brand: string;
        code: string;
        model?: string | null;
        categoryId: number;
        approximateWeight: boolean;
        netWeight: boolean;
        weightValue?: number | null;
        weightType?: string | null;
        quantityValue: number;
        quantityType: string;
        createdAt: any;
        updatedAt: any;
        views: number;
        category?: {
            __typename?: 'Category';
            id: number;
            name: string;
            categoryAlias?: string | null;
            expandedPathname: string;
            path: string;
        } | null;
        productList: Array<{
            __typename?: 'ProductList';
            id: number;
            listId: number;
            userId: number;
            productId: number;
            type?: ListType | null;
            stockId?: number | null;
            createdAt: any;
        }>;
    };
};
type AllProductsQueryVariables = Exact<{
    paginator: PaginatorInput;
    search?: InputMaybe<ProductSearch>;
}>;
type AllProductsQuery = {
    __typename?: 'Query';
    allProducts: {
        __typename?: 'PaginatedProducts';
        products: Array<{
            __typename?: 'Product';
            id: number;
            name: string;
            image: string;
            description: string;
            brand: string;
            code: string;
            model?: string | null;
            categoryId: number;
            approximateWeight: boolean;
            netWeight: boolean;
            weightValue?: number | null;
            weightType?: string | null;
            quantityValue: number;
            quantityType: string;
            createdAt: any;
            updatedAt: any;
            views: number;
            category?: {
                __typename?: 'Category';
                id: number;
                name: string;
                expandedPathname: string;
                path: string;
            } | null;
            stock?: {
                __typename?: 'Stock';
                id: number;
                productId: number;
                storeId: number;
                branchId: number;
                latestPriceId: number;
                store?: {
                    __typename?: 'Store';
                    id: number;
                    slug: string;
                    name: string;
                    logo: string;
                } | null;
                branch?: {
                    __typename?: 'BranchFlat';
                    id: number;
                    slug: string;
                    name: string;
                    addressId: number;
                    address: {
                        __typename?: 'Address';
                        id: number;
                        latitude: number;
                        longitude: number;
                        mapsLink: string;
                        fullAddress: string;
                        street?: string | null;
                        city: string;
                        administrativeDivision: string;
                        countryCode: string;
                        country?: string | null;
                        zipCode: string;
                        distance?: number | null;
                    };
                } | null;
                latestPrice?: {
                    __typename?: 'Price';
                    id: number;
                    productId: number;
                    branchId: number;
                    storeId: number;
                    amount: number;
                    currencyCode: string;
                    createdAt: any;
                    sale: boolean;
                    originalPrice?: number | null;
                    condition?: string | null;
                    expiresAt?: any | null;
                    unitType: string;
                    createdBy?: {
                        __typename?: 'CreatedByUser';
                        id: number;
                        name: string;
                        avatar?: string | null;
                    } | null;
                } | null;
                createdBy?: {
                    __typename?: 'CreatedByUser';
                    id: number;
                    name: string;
                    avatar?: string | null;
                } | null;
                updatedBy?: {
                    __typename?: 'UpdatedByUser';
                    id: number;
                    name: string;
                    avatar?: string | null;
                } | null;
            } | null;
        }>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type BranchesWithProductsQueryVariables = Exact<{
    paginator: PaginatorInput;
    productLimit: Scalars['Int']['input'];
    filters?: InputMaybe<ProductSearch>;
}>;
type BranchesWithProductsQuery = {
    __typename?: 'Query';
    branchesWithProducts: {
        __typename?: 'PaginatedBranches';
        branches: Array<{
            __typename?: 'Branch';
            id: number;
            slug: string;
            name: string;
            storeId: number;
            storeSlug?: string | null;
            addressId: number;
            store?: {
                __typename?: 'Store';
                id: number;
                slug: string;
                name: string;
                logo: string;
            } | null;
            address: {
                __typename?: 'Address';
                id: number;
                distance?: number | null;
                latitude: number;
                longitude: number;
                mapsLink: string;
                fullAddress: string;
                street?: string | null;
                city: string;
                administrativeDivision: string;
                countryCode: string;
                country?: string | null;
                zipCode: string;
            };
            products?: Array<{
                __typename?: 'ProductSimple';
                id: number;
                name: string;
                image: string;
                description: string;
                brand: string;
                code: string;
                model?: string | null;
                categoryId: number;
                approximateWeight: boolean;
                netWeight: boolean;
                weightValue?: number | null;
                weightType?: string | null;
                quantityValue: number;
                quantityType: string;
                createdAt: any;
                updatedAt: any;
                views: number;
                category?: {
                    __typename?: 'Category';
                    id: number;
                    name: string;
                    expandedPathname: string;
                    path: string;
                } | null;
                stock?: {
                    __typename?: 'StockSimple';
                    id: number;
                    productId: number;
                    storeId: number;
                    branchId: number;
                    latestPriceId: number;
                    latestPrice?: {
                        __typename?: 'Price';
                        id: number;
                        productId: number;
                        branchId: number;
                        storeId: number;
                        amount: number;
                        currencyCode: string;
                        createdAt: any;
                        sale: boolean;
                        originalPrice?: number | null;
                        condition?: string | null;
                        expiresAt?: any | null;
                        unitType: string;
                    } | null;
                    createdBy?: {
                        __typename?: 'CreatedByUser';
                        id: number;
                        name: string;
                        avatar?: string | null;
                    } | null;
                    updatedBy?: {
                        __typename?: 'UpdatedByUser';
                        id: number;
                        name: string;
                        avatar?: string | null;
                    } | null;
                } | null;
            }> | null;
        }>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type ProductSummaryQueryVariables = Exact<{
    productId: Scalars['ID']['input'];
    stockId?: InputMaybe<Scalars['ID']['input']>;
    branch?: InputMaybe<ProductSummaryBranchInput>;
}>;
type ProductSummaryQuery = {
    __typename?: 'Query';
    productSummary: {
        __typename?: 'ProductSummary';
        id: number;
        name: string;
        image: string;
        description?: string | null;
        brand: string;
        code: string;
        stockId?: number | null;
        store?: string | null;
        storeId?: number | null;
        storeLogo?: string | null;
        storeSlug?: string | null;
        branch?: string | null;
        branchId?: number | null;
        branchSlug?: string | null;
        address?: string | null;
        price?: number | null;
        priceCurrencyCode?: string | null;
        originalPrice?: number | null;
        sale?: boolean | null;
        saleExpiresAt?: any | null;
        priceCreatedAt?: any | null;
    };
};
type ProductSearchQueryVariables = Exact<{
    paginator: PaginatorInput;
    search?: InputMaybe<Scalars['String']['input']>;
    filters?: InputMaybe<ProductSearchFilters>;
}>;
type ProductSearchQuery = {
    __typename?: 'Query';
    productSearch: {
        __typename?: 'PaginatedProducts';
        products: Array<{
            __typename?: 'Product';
            id: number;
            code: string;
            brand: string;
            name: string;
            quantityValue: number;
            quantityType: string;
            approximateWeight: boolean;
            netWeight: boolean;
            weightValue?: number | null;
            weightType?: string | null;
            createdAt: any;
            updatedAt: any;
            category?: {
                __typename?: 'Category';
                id: number;
                name: string;
                expandedPathname: string;
            } | null;
        }>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type ExtractProductFieldsQueryVariables = Exact<{
    base64Image: Scalars['String']['input'];
}>;
type ExtractProductFieldsQuery = {
    __typename?: 'Query';
    extractProductFields: {
        __typename?: 'ProductExtractionResponse';
        brand: string;
        name: string;
        description: string;
        netWeight?: boolean | null;
        weight?: string | null;
        quantity?: number | null;
        categoryId?: number | null;
        category?: {
            __typename?: 'Category';
            id: number;
            name: string;
            expandedPathname: string;
            path: string;
        } | null;
    };
};
type MyProductViewHistoryQueryVariables = Exact<{
    paginator: PaginatorInput;
}>;
type MyProductViewHistoryQuery = {
    __typename?: 'Query';
    myProductViewHistory: {
        __typename?: 'PaginatedProducts';
        products: Array<{
            __typename?: 'Product';
            id: number;
            name: string;
            image: string;
            description: string;
            brand: string;
            code: string;
            model?: string | null;
            categoryId: number;
            approximateWeight: boolean;
            netWeight: boolean;
            weightValue?: number | null;
            weightType?: string | null;
            quantityValue: number;
            quantityType: string;
            createdAt: any;
            updatedAt: any;
            views: number;
            category?: {
                __typename?: 'Category';
                id: number;
                name: string;
                expandedPathname: string;
                path: string;
            } | null;
            stock?: {
                __typename?: 'Stock';
                id: number;
                productId: number;
                storeId: number;
                branchId: number;
                latestPriceId: number;
                store?: {
                    __typename?: 'Store';
                    id: number;
                    slug: string;
                    name: string;
                    logo: string;
                } | null;
                branch?: {
                    __typename?: 'BranchFlat';
                    id: number;
                    slug: string;
                    name: string;
                    addressId: number;
                    address: {
                        __typename?: 'Address';
                        id: number;
                        latitude: number;
                        longitude: number;
                        mapsLink: string;
                        fullAddress: string;
                        street?: string | null;
                        city: string;
                        administrativeDivision: string;
                        countryCode: string;
                        country?: string | null;
                        zipCode: string;
                        distance?: number | null;
                    };
                } | null;
                latestPrice?: {
                    __typename?: 'Price';
                    id: number;
                    productId: number;
                    branchId: number;
                    storeId: number;
                    amount: number;
                    currencyCode: string;
                    createdAt: any;
                    sale: boolean;
                    originalPrice?: number | null;
                    condition?: string | null;
                    expiresAt?: any | null;
                    unitType: string;
                } | null;
                createdBy?: {
                    __typename?: 'CreatedByUser';
                    id: number;
                    name: string;
                    avatar?: string | null;
                } | null;
                updatedBy?: {
                    __typename?: 'UpdatedByUser';
                    id: number;
                    name: string;
                    avatar?: string | null;
                } | null;
            } | null;
        }>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type PopularProductsQueryVariables = Exact<{
    paginator: PaginatorInput;
    dateRange?: InputMaybe<TimestampRangeBetween>;
}>;
type PopularProductsQuery = {
    __typename?: 'Query';
    popularProducts: {
        __typename?: 'PaginatedProducts';
        products: Array<{
            __typename?: 'Product';
            id: number;
            name: string;
            image: string;
            description: string;
            brand: string;
            code: string;
            model?: string | null;
            categoryId: number;
            approximateWeight: boolean;
            netWeight: boolean;
            weightValue?: number | null;
            weightType?: string | null;
            quantityValue: number;
            quantityType: string;
            createdAt: any;
            updatedAt: any;
            views: number;
            category?: {
                __typename?: 'Category';
                id: number;
                name: string;
                expandedPathname: string;
                path: string;
            } | null;
            stock?: {
                __typename?: 'Stock';
                id: number;
                productId: number;
                storeId: number;
                branchId: number;
                latestPriceId: number;
                store?: {
                    __typename?: 'Store';
                    id: number;
                    slug: string;
                    name: string;
                    logo: string;
                } | null;
                branch?: {
                    __typename?: 'BranchFlat';
                    id: number;
                    slug: string;
                    name: string;
                    addressId: number;
                    address: {
                        __typename?: 'Address';
                        id: number;
                        latitude: number;
                        longitude: number;
                        mapsLink: string;
                        fullAddress: string;
                        street?: string | null;
                        city: string;
                        administrativeDivision: string;
                        countryCode: string;
                        country?: string | null;
                        zipCode: string;
                        distance?: number | null;
                    };
                } | null;
                latestPrice?: {
                    __typename?: 'Price';
                    id: number;
                    productId: number;
                    branchId: number;
                    storeId: number;
                    amount: number;
                    currencyCode: string;
                    createdAt: any;
                    sale: boolean;
                    originalPrice?: number | null;
                    condition?: string | null;
                    expiresAt?: any | null;
                    unitType: string;
                } | null;
                createdBy?: {
                    __typename?: 'CreatedByUser';
                    id: number;
                    name: string;
                    avatar?: string | null;
                } | null;
                updatedBy?: {
                    __typename?: 'UpdatedByUser';
                    id: number;
                    name: string;
                    avatar?: string | null;
                } | null;
            } | null;
        }>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type WeightComponentsFromCategoryIdQueryVariables = Exact<{
    categoryId: Scalars['ID']['input'];
}>;
type WeightComponentsFromCategoryIdQuery = {
    __typename?: 'Query';
    weightComponentsFromCategoryId: Array<{
        __typename?: 'ProductWeightComponents';
        weightValue: number;
        weightType: string;
    }>;
};
type MySearchHistoryQueryVariables = Exact<{
    paginator: PaginatorInput;
}>;
type MySearchHistoryQuery = {
    __typename?: 'Query';
    mySearchHistory: {
        __typename?: 'PaginatedSearch';
        searches: Array<{
            __typename?: 'SearchHistory';
            id: number;
            searchTerm: string;
        }>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type PopularSearchKeywordsQueryVariables = Exact<{
    paginator: PaginatorInput;
    dateRange?: InputMaybe<TimestampRangeBetween>;
}>;
type PopularSearchKeywordsQuery = {
    __typename?: 'Query';
    popularSearchKeywords: {
        __typename?: 'PaginatedSearchKeywords';
        searches: Array<string>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type SearchKeywordsQueryVariables = Exact<{
    search: Scalars['String']['input'];
}>;
type SearchKeywordsQuery = {
    __typename?: 'Query';
    searchKeywords?: Array<string> | null;
};
type StockQueryVariables = Exact<{
    stockId: Scalars['ID']['input'];
}>;
type StockQuery = {
    __typename?: 'Query';
    stock: {
        __typename?: 'Stock';
        id: number;
        productId: number;
        storeId: number;
        branchId: number;
        latestPriceId: number;
        createdAt: any;
        updatedAt: any;
        store?: {
            __typename?: 'Store';
            slug: string;
            id: number;
            name: string;
            logo: string;
        } | null;
        branch?: {
            __typename?: 'BranchFlat';
            id: number;
            slug: string;
            name: string;
            addressId: number;
            address: {
                __typename?: 'Address';
                id: number;
                latitude: number;
                longitude: number;
                mapsLink: string;
                fullAddress: string;
                street?: string | null;
                city: string;
                administrativeDivision: string;
                countryCode: string;
                country?: string | null;
                zipCode: string;
                distance?: number | null;
            };
        } | null;
        latestPrice?: {
            __typename?: 'Price';
            id: number;
            productId: number;
            branchId: number;
            storeId: number;
            amount: number;
            currencyCode: string;
            sale: boolean;
            originalPrice?: number | null;
            condition?: string | null;
            expiresAt?: any | null;
            createdAt: any;
            unitType: string;
        } | null;
        createdBy?: {
            __typename?: 'CreatedByUser';
            id: number;
            name: string;
            avatar?: string | null;
        } | null;
        updatedBy?: {
            __typename?: 'UpdatedByUser';
            id: number;
            name: string;
            avatar?: string | null;
        } | null;
    };
};
type GetStockFromProductAndBranchIdQueryVariables = Exact<{
    productId: Scalars['ID']['input'];
    branchId: Scalars['ID']['input'];
}>;
type GetStockFromProductAndBranchIdQuery = {
    __typename?: 'Query';
    getStockFromProductAndBranchId: {
        __typename?: 'Stock';
        id: number;
        productId: number;
        storeId: number;
        branchId: number;
        latestPriceId: number;
        createdAt: any;
        updatedAt: any;
        latestPrice?: {
            __typename?: 'Price';
            id: number;
            productId: number;
            branchId: number;
            storeId: number;
            amount: number;
            currencyCode: string;
            sale: boolean;
            originalPrice?: number | null;
            condition?: string | null;
            expiresAt?: any | null;
            createdAt: any;
            unitType: string;
        } | null;
    };
};
type GetProductStocksQueryVariables = Exact<{
    paginator: PaginatorInput;
    productId: Scalars['ID']['input'];
    location?: InputMaybe<LocationInput>;
}>;
type GetProductStocksQuery = {
    __typename?: 'Query';
    getProductStocks: {
        __typename?: 'PaginatedStocks';
        stocks: Array<{
            __typename?: 'Stock';
            id: number;
            productId: number;
            storeId: number;
            branchId: number;
            latestPriceId: number;
            createdAt: any;
            updatedAt: any;
            store?: {
                __typename?: 'Store';
                id: number;
                slug: string;
                name: string;
                logo: string;
            } | null;
            branch?: {
                __typename?: 'BranchFlat';
                id: number;
                slug: string;
                name: string;
                address: {
                    __typename?: 'Address';
                    id: number;
                    latitude: number;
                    longitude: number;
                    mapsLink: string;
                    fullAddress: string;
                    street?: string | null;
                    city: string;
                    administrativeDivision: string;
                    countryCode: string;
                    country?: string | null;
                    zipCode: string;
                    distance?: number | null;
                };
            } | null;
            latestPrice?: {
                __typename?: 'Price';
                id: number;
                productId: number;
                branchId: number;
                storeId: number;
                amount: number;
                currencyCode: string;
                sale: boolean;
                originalPrice?: number | null;
                condition?: string | null;
                expiresAt?: any | null;
                unitType: string;
            } | null;
            createdBy?: {
                __typename?: 'CreatedByUser';
                id: number;
                name: string;
                avatar?: string | null;
            } | null;
            updatedBy?: {
                __typename?: 'UpdatedByUser';
                id: number;
                name: string;
                avatar?: string | null;
            } | null;
        }>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type MyStoreUserQueryVariables = Exact<{
    [key: string]: never;
}>;
type MyStoreUserQuery = {
    __typename?: 'Query';
    myStoreUsers: Array<{
        __typename?: 'StoreUser';
        id: number;
        storeId: number;
        branchId?: number | null;
        userId?: number | null;
        legalName: string;
        email: string;
        employeeId?: string | null;
        role: StoreUserRole;
        approvedAt?: any | null;
        approvedById?: number | null;
        approved: boolean;
        createdById: number;
        createdAt: any;
        store?: {
            __typename?: 'Store';
            id: number;
            slug: string;
            name: string;
            logo: string;
        } | null;
        branch?: {
            __typename?: 'BranchFlat';
            id: number;
            slug: string;
            name: string;
            address: {
                __typename?: 'Address';
                id: number;
                fullAddress: string;
            };
        } | null;
        user?: {
            __typename?: 'UserShallow';
            id: number;
            name: string;
            avatar?: string | null;
        } | null;
        approvedByUser?: {
            __typename?: 'ApprovedByUser';
            id: number;
            name: string;
            avatar?: string | null;
        } | null;
        createdBy?: {
            __typename?: 'CreatedByUser';
            id: number;
            name: string;
            avatar?: string | null;
            active?: boolean | null;
        } | null;
    }>;
};
type AllStoresQueryVariables = Exact<{
    paginator: PaginatorInput;
    search?: InputMaybe<Scalars['String']['input']>;
}>;
type AllStoresQuery = {
    __typename?: 'Query';
    allStores: {
        __typename?: 'PaginatedStores';
        stores: Array<{
            __typename?: 'Store';
            id: number;
            slug: string;
            name: string;
            logo: string;
            website: string;
        }>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type FindStoreQueryVariables = Exact<{
    storeId?: InputMaybe<Scalars['ID']['input']>;
    storeSlug?: InputMaybe<Scalars['String']['input']>;
}>;
type FindStoreQuery = {
    __typename?: 'Query';
    findStore: {
        __typename?: 'Store';
        id: number;
        slug: string;
        name: string;
        logo: string;
        website: string;
    };
};
type UserFieldsFragment = {
    __typename?: 'User';
    id: number;
    name: string;
    email: string;
    avatar?: string | null;
    createdAt: any;
    updatedAt: any;
    active: boolean;
    authDevice?: AuthDeviceType | null;
    authPlatform?: AuthPlatformType | null;
    authStateId?: string | null;
    role: UserRole;
} & {
    ' $fragmentName'?: 'UserFieldsFragment';
};
type LoginInternalQueryVariables = Exact<{
    email: Scalars['String']['input'];
    password: Scalars['String']['input'];
    ipAddress?: InputMaybe<Scalars['String']['input']>;
    device?: InputMaybe<AuthDeviceType>;
}>;
type LoginInternalQuery = {
    __typename?: 'Query';
    login: {
        __typename?: 'Auth';
        token: string;
        user: {
            __typename?: 'User';
            id: number;
            name: string;
            email: string;
            avatar?: string | null;
            createdAt: any;
            updatedAt: any;
            active: boolean;
            authDevice?: AuthDeviceType | null;
            authPlatform?: AuthPlatformType | null;
            authStateId?: string | null;
            expoPushToken?: string | null;
            role: UserRole;
            addressId?: number | null;
            address?: {
                __typename?: 'Address';
                id: number;
                latitude: number;
                longitude: number;
                mapsLink: string;
                fullAddress: string;
                street?: string | null;
                city: string;
                administrativeDivision: string;
                countryCode: string;
                country?: string | null;
                zipCode: string;
            } | null;
        };
    };
};
type GoogleOAuthQueryVariables = Exact<{
    accessToken: Scalars['String']['input'];
    ipAddress?: InputMaybe<Scalars['String']['input']>;
    device?: InputMaybe<AuthDeviceType>;
}>;
type GoogleOAuthQuery = {
    __typename?: 'Query';
    googleOAuth: {
        __typename?: 'Auth';
        token: string;
        isNewUser?: boolean | null;
        user: {
            __typename?: 'User';
            id: number;
            name: string;
            email: string;
            avatar?: string | null;
            createdAt: any;
            updatedAt: any;
            active: boolean;
            authDevice?: AuthDeviceType | null;
            authPlatform?: AuthPlatformType | null;
            authStateId?: string | null;
            expoPushToken?: string | null;
            role: UserRole;
            addressId?: number | null;
            address?: {
                __typename?: 'Address';
                id: number;
                latitude: number;
                longitude: number;
                mapsLink: string;
                fullAddress: string;
                street?: string | null;
                city: string;
                administrativeDivision: string;
                countryCode: string;
                country?: string | null;
                zipCode: string;
            } | null;
        };
    };
};
type AppleOAuthQueryVariables = Exact<{
    code: Scalars['String']['input'];
    appleRawUser?: InputMaybe<Scalars['String']['input']>;
    ipAddress?: InputMaybe<Scalars['String']['input']>;
    device?: InputMaybe<AuthDeviceType>;
}>;
type AppleOAuthQuery = {
    __typename?: 'Query';
    appleOAuth: {
        __typename?: 'Auth';
        token: string;
        isNewUser?: boolean | null;
        user: {
            __typename?: 'User';
            id: number;
            name: string;
            email: string;
            avatar?: string | null;
            createdAt: any;
            updatedAt: any;
            active: boolean;
            authDevice?: AuthDeviceType | null;
            authPlatform?: AuthPlatformType | null;
            authStateId?: string | null;
            expoPushToken?: string | null;
            role: UserRole;
            addressId?: number | null;
            address?: {
                __typename?: 'Address';
                id: number;
                latitude: number;
                longitude: number;
                mapsLink: string;
                fullAddress: string;
                street?: string | null;
                city: string;
                administrativeDivision: string;
                countryCode: string;
                country?: string | null;
                zipCode: string;
            } | null;
        };
    };
};
type YahooOAuthQueryVariables = Exact<{
    code: Scalars['String']['input'];
    codeVerifier?: InputMaybe<Scalars['String']['input']>;
    ipAddress?: InputMaybe<Scalars['String']['input']>;
    device?: InputMaybe<AuthDeviceType>;
}>;
type YahooOAuthQuery = {
    __typename?: 'Query';
    yahooOAuth: {
        __typename?: 'Auth';
        token: string;
        isNewUser?: boolean | null;
        user: {
            __typename?: 'User';
            id: number;
            name: string;
            email: string;
            avatar?: string | null;
            createdAt: any;
            updatedAt: any;
            active: boolean;
            authDevice?: AuthDeviceType | null;
            authPlatform?: AuthPlatformType | null;
            authStateId?: string | null;
            expoPushToken?: string | null;
            role: UserRole;
            addressId?: number | null;
            address?: {
                __typename?: 'Address';
                id: number;
                latitude: number;
                longitude: number;
                mapsLink: string;
                fullAddress: string;
                street?: string | null;
                city: string;
                administrativeDivision: string;
                countryCode: string;
                country?: string | null;
                zipCode: string;
            } | null;
        };
    };
};
type VerifyPasswordResetCodeQueryVariables = Exact<{
    email: Scalars['String']['input'];
    code: Scalars['String']['input'];
}>;
type VerifyPasswordResetCodeQuery = {
    __typename?: 'Query';
    verifyPasswordResetCode: boolean;
};
type MeQueryVariables = Exact<{
    [key: string]: never;
}>;
type MeQuery = {
    __typename?: 'Query';
    me: {
        __typename?: 'User';
        id: number;
        name: string;
        email: string;
        avatar?: string | null;
        createdAt: any;
        updatedAt: any;
        active: boolean;
        authDevice?: AuthDeviceType | null;
        authPlatform?: AuthPlatformType | null;
        authStateId?: string | null;
        expoPushToken?: string | null;
        role: UserRole;
        addressId?: number | null;
        birthDate?: any | null;
        phoneNumber?: string | null;
        bio?: string | null;
        address?: {
            __typename?: 'Address';
            id: number;
            latitude: number;
            longitude: number;
            mapsLink: string;
            fullAddress: string;
            street?: string | null;
            city: string;
            administrativeDivision: string;
            countryCode: string;
            country?: string | null;
            zipCode: string;
        } | null;
    };
};
type MyProductBillingDataQueryVariables = Exact<{
    paginator: PaginatorInput;
}>;
type MyProductBillingDataQuery = {
    __typename?: 'Query';
    myProductBillingData: {
        __typename?: 'PaginatedProductBilling';
        data: Array<{
            __typename?: 'ProductBilling';
            id: number;
            rate: number;
            userId: number;
            productId: number;
            createdAt: any;
            paidAt?: any | null;
            billingRateType: string;
            user?: {
                __typename?: 'UserShallow';
                id: number;
                name: string;
                avatar?: string | null;
                active?: boolean | null;
            } | null;
            product?: {
                __typename?: 'Product';
                id: number;
                name: string;
                image: string;
                brand: string;
                code: string;
                createdAt: any;
                updatedAt: any;
                category?: {
                    __typename?: 'Category';
                    id: number;
                    name: string;
                    expandedPathname: string;
                    path: string;
                } | null;
            } | null;
        }>;
        paginator: {
            __typename?: 'Paginator';
            next?: number | null;
            page: number;
            prev?: number | null;
            limit: number;
            total: number;
            numPages: number;
        };
    };
};
type PostAuthUserDataQueryVariables = Exact<{
    listType?: InputMaybe<ListType>;
}>;
type PostAuthUserDataQuery = {
    __typename?: 'Query';
    getAllLists: Array<{
        __typename?: 'List';
        id: number;
        name: string;
        type: ListType;
        userId: number;
        createdAt: any;
        productList?: Array<{
            __typename?: 'ProductList';
            id: number;
            listId: number;
            productId: number;
            stockId?: number | null;
            createdAt: any;
        }> | null;
        branchList?: Array<{
            __typename?: 'BranchList';
            id: number;
            listId: number;
            branchId: number;
            createdAt: any;
        }> | null;
    }>;
    groceryLists: Array<{
        __typename?: 'GroceryList';
        id: number;
        name: string;
        default: boolean;
        createdAt: any;
    }>;
};
declare const UserFieldsFragmentDoc: TypedDocumentNode<UserFieldsFragment, unknown>;
declare const UpdateUserByIdDocument: TypedDocumentNode<UpdateUserByIdMutation, UpdateUserByIdMutationVariables>;
declare const CreateStoreUserAdminDocument: TypedDocumentNode<CreateStoreUserAdminMutation, CreateStoreUserAdminMutationVariables>;
declare const AdminRemoveAuthSessionDocument: TypedDocumentNode<AdminRemoveAuthSessionMutation, AdminRemoveAuthSessionMutationVariables>;
declare const CreateBranchFromFullAddressDocument: TypedDocumentNode<CreateBranchFromFullAddressMutation, CreateBranchFromFullAddressMutationVariables>;
declare const CreateBranchDocument: TypedDocumentNode<CreateBranchMutation, CreateBranchMutationVariables>;
declare const CreateCategoryDocument: TypedDocumentNode<CreateCategoryMutation, CreateCategoryMutationVariables>;
declare const AddGroceryListItemDocument: TypedDocumentNode<AddGroceryListItemMutation, AddGroceryListItemMutationVariables>;
declare const UpdateGroceryListItemDocument: TypedDocumentNode<UpdateGroceryListItemMutation, UpdateGroceryListItemMutationVariables>;
declare const DeleteGroceryListItemDocument: TypedDocumentNode<DeleteGroceryListItemMutation, DeleteGroceryListItemMutationVariables>;
declare const MarkGroceryListItemDocument: TypedDocumentNode<MarkGroceryListItemMutation, MarkGroceryListItemMutationVariables>;
declare const AddToListDocument: TypedDocumentNode<AddToListMutation, AddToListMutationVariables>;
declare const RemoveFromListDocument: TypedDocumentNode<RemoveFromListMutation, RemoveFromListMutationVariables>;
declare const RemoveFromListWithProductIdDocument: TypedDocumentNode<RemoveFromListWithProductIdMutation, RemoveFromListWithProductIdMutationVariables>;
declare const AddBranchToListDocument: TypedDocumentNode<AddBranchToListMutation, AddBranchToListMutationVariables>;
declare const BulkAddBranchesToListDocument: TypedDocumentNode<BulkAddBranchesToListMutation, BulkAddBranchesToListMutationVariables>;
declare const RemoveBranchFromListDocument: TypedDocumentNode<RemoveBranchFromListMutation, RemoveBranchFromListMutationVariables>;
declare const CreatePriceDocument: TypedDocumentNode<CreatePriceMutation, CreatePriceMutationVariables>;
declare const UpdateProductNutritionDataDocument: TypedDocumentNode<UpdateProductNutritionDataMutation, UpdateProductNutritionDataMutationVariables>;
declare const CreateProductDocument: TypedDocumentNode<CreateProductMutation, CreateProductMutationVariables>;
declare const UpdateProductDocument: TypedDocumentNode<UpdateProductMutation, UpdateProductMutationVariables>;
declare const ExtractAndCreateProductDocument: TypedDocumentNode<ExtractAndCreateProductMutation, ExtractAndCreateProductMutationVariables>;
declare const SanitizeProductDocument: TypedDocumentNode<SanitizeProductMutation, SanitizeProductMutationVariables>;
declare const AcceptPendingStoreUserInviteDocument: TypedDocumentNode<AcceptPendingStoreUserInviteMutation, AcceptPendingStoreUserInviteMutationVariables>;
declare const DeclinePendingStoreUserInviteDocument: TypedDocumentNode<DeclinePendingStoreUserInviteMutation, DeclinePendingStoreUserInviteMutationVariables>;
declare const CreateStoreDocument: TypedDocumentNode<CreateStoreMutation, CreateStoreMutationVariables>;
declare const CreateAccountDocument: TypedDocumentNode<CreateAccountMutation, CreateAccountMutationVariables>;
declare const VerifyEmailDocument: TypedDocumentNode<VerifyEmailMutation, VerifyEmailMutationVariables>;
declare const ResendVerificationDocument: TypedDocumentNode<ResendVerificationMutation, ResendVerificationMutationVariables>;
declare const LogoutDocument: TypedDocumentNode<LogoutMutation, LogoutMutationVariables>;
declare const UpdateProfileDocument: TypedDocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
declare const DeleteMyAccountDocument: TypedDocumentNode<DeleteMyAccountMutation, DeleteMyAccountMutationVariables>;
declare const RequestResetPasswordDocument: TypedDocumentNode<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;
declare const UpdatePasswordWithResetCodeDocument: TypedDocumentNode<UpdatePasswordWithResetCodeMutation, UpdatePasswordWithResetCodeMutationVariables>;
declare const RegisterExpoPushTokenDocument: TypedDocumentNode<RegisterExpoPushTokenMutation, RegisterExpoPushTokenMutationVariables>;
declare const GetAllUsersDocument: TypedDocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;
declare const ProductBillingDataByUserIdDocument: TypedDocumentNode<ProductBillingDataByUserIdQuery, ProductBillingDataByUserIdQueryVariables>;
declare const PaginatedAdminAuthSessionsDocument: TypedDocumentNode<PaginatedAdminAuthSessionsQuery, PaginatedAdminAuthSessionsQueryVariables>;
declare const PaginatedAdminProductViewEntriesDocument: TypedDocumentNode<PaginatedAdminProductViewEntriesQuery, PaginatedAdminProductViewEntriesQueryVariables>;
declare const AllBranchesDocument: TypedDocumentNode<AllBranchesQuery, AllBranchesQueryVariables>;
declare const BranchDocument: TypedDocumentNode<BranchQuery, BranchQueryVariables>;
declare const FindBranchDocument: TypedDocumentNode<FindBranchQuery, FindBranchQueryVariables>;
declare const FindBranchesByDistanceDocument: TypedDocumentNode<FindBranchesByDistanceQuery, FindBranchesByDistanceQueryVariables>;
declare const FavoriteBranchesWithPricesDocument: TypedDocumentNode<FavoriteBranchesWithPricesQuery, FavoriteBranchesWithPricesQueryVariables>;
declare const AllBrandsDocument: TypedDocumentNode<AllBrandsQuery, AllBrandsQueryVariables>;
declare const GetCategoriesDocument: TypedDocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
declare const CategorySearchDocument: TypedDocumentNode<CategorySearchQuery, CategorySearchQueryVariables>;
declare const GetCategoryDocument: TypedDocumentNode<GetCategoryQuery, GetCategoryQueryVariables>;
declare const GroceryListsDocument: TypedDocumentNode<GroceryListsQuery, GroceryListsQueryVariables>;
declare const GroceryListItemsDocument: TypedDocumentNode<GroceryListItemsQuery, GroceryListItemsQueryVariables>;
declare const DefaultGroceryListItemsDocument: TypedDocumentNode<DefaultGroceryListItemsQuery, DefaultGroceryListItemsQueryVariables>;
declare const CountGroceryListItemsDocument: TypedDocumentNode<CountGroceryListItemsQuery, CountGroceryListItemsQueryVariables>;
declare const GetAllListsDocument: TypedDocumentNode<GetAllListsQuery, GetAllListsQueryVariables>;
declare const GetAllProductListsByListIdDocument: TypedDocumentNode<GetAllProductListsByListIdQuery, GetAllProductListsByListIdQueryVariables>;
declare const GetAllBranchListsByListIdDocument: TypedDocumentNode<GetAllBranchListsByListIdQuery, GetAllBranchListsByListIdQueryVariables>;
declare const GetAllCountriesDocument: TypedDocumentNode<GetAllCountriesQuery, GetAllCountriesQueryVariables>;
declare const CheckAppVersionDocument: TypedDocumentNode<CheckAppVersionQuery, CheckAppVersionQueryVariables>;
declare const IpToAddressDocument: TypedDocumentNode<IpToAddressQuery, IpToAddressQueryVariables>;
declare const PriceChangeHistoryDocument: TypedDocumentNode<PriceChangeHistoryQuery, PriceChangeHistoryQueryVariables>;
declare const GetProductNutritionDataDocument: TypedDocumentNode<GetProductNutritionDataQuery, GetProductNutritionDataQueryVariables>;
declare const BarcodeScanDocument: TypedDocumentNode<BarcodeScanQuery, BarcodeScanQueryVariables>;
declare const ProductDocument: TypedDocumentNode<ProductQuery, ProductQueryVariables>;
declare const AllProductsDocument: TypedDocumentNode<AllProductsQuery, AllProductsQueryVariables>;
declare const BranchesWithProductsDocument: TypedDocumentNode<BranchesWithProductsQuery, BranchesWithProductsQueryVariables>;
declare const ProductSummaryDocument: TypedDocumentNode<ProductSummaryQuery, ProductSummaryQueryVariables>;
declare const ProductSearchDocument: TypedDocumentNode<ProductSearchQuery, ProductSearchQueryVariables>;
declare const ExtractProductFieldsDocument: TypedDocumentNode<ExtractProductFieldsQuery, ExtractProductFieldsQueryVariables>;
declare const MyProductViewHistoryDocument: TypedDocumentNode<MyProductViewHistoryQuery, MyProductViewHistoryQueryVariables>;
declare const PopularProductsDocument: TypedDocumentNode<PopularProductsQuery, PopularProductsQueryVariables>;
declare const WeightComponentsFromCategoryIdDocument: TypedDocumentNode<WeightComponentsFromCategoryIdQuery, WeightComponentsFromCategoryIdQueryVariables>;
declare const MySearchHistoryDocument: TypedDocumentNode<MySearchHistoryQuery, MySearchHistoryQueryVariables>;
declare const PopularSearchKeywordsDocument: TypedDocumentNode<PopularSearchKeywordsQuery, PopularSearchKeywordsQueryVariables>;
declare const SearchKeywordsDocument: TypedDocumentNode<SearchKeywordsQuery, SearchKeywordsQueryVariables>;
declare const StockDocument: TypedDocumentNode<StockQuery, StockQueryVariables>;
declare const GetStockFromProductAndBranchIdDocument: TypedDocumentNode<GetStockFromProductAndBranchIdQuery, GetStockFromProductAndBranchIdQueryVariables>;
declare const GetProductStocksDocument: TypedDocumentNode<GetProductStocksQuery, GetProductStocksQueryVariables>;
declare const MyStoreUserDocument: TypedDocumentNode<MyStoreUserQuery, MyStoreUserQueryVariables>;
declare const AllStoresDocument: TypedDocumentNode<AllStoresQuery, AllStoresQueryVariables>;
declare const FindStoreDocument: TypedDocumentNode<FindStoreQuery, FindStoreQueryVariables>;
declare const LoginInternalDocument: TypedDocumentNode<LoginInternalQuery, LoginInternalQueryVariables>;
declare const GoogleOAuthDocument: TypedDocumentNode<GoogleOAuthQuery, GoogleOAuthQueryVariables>;
declare const AppleOAuthDocument: TypedDocumentNode<AppleOAuthQuery, AppleOAuthQueryVariables>;
declare const YahooOAuthDocument: TypedDocumentNode<YahooOAuthQuery, YahooOAuthQueryVariables>;
declare const VerifyPasswordResetCodeDocument: TypedDocumentNode<VerifyPasswordResetCodeQuery, VerifyPasswordResetCodeQueryVariables>;
declare const MeDocument: TypedDocumentNode<MeQuery, MeQueryVariables>;
declare const MyProductBillingDataDocument: TypedDocumentNode<MyProductBillingDataQuery, MyProductBillingDataQueryVariables>;
declare const PostAuthUserDataDocument: TypedDocumentNode<PostAuthUserDataQuery, PostAuthUserDataQueryVariables>;

type FragmentType<TDocumentType extends DocumentTypeDecoration<any, any>> = TDocumentType extends DocumentTypeDecoration<infer TType, any> ? [TType] extends [{
    ' $fragmentName'?: infer TKey;
}] ? TKey extends string ? {
    ' $fragmentRefs'?: {
        [key in TKey]: TType;
    };
} : never : never : never;
declare function useFragment<TType>(_documentNode: DocumentTypeDecoration<TType, any>, fragmentType: FragmentType<DocumentTypeDecoration<TType, any>>): TType;
declare function useFragment<TType>(_documentNode: DocumentTypeDecoration<TType, any>, fragmentType: FragmentType<DocumentTypeDecoration<TType, any>> | undefined): TType | undefined;
declare function useFragment<TType>(_documentNode: DocumentTypeDecoration<TType, any>, fragmentType: FragmentType<DocumentTypeDecoration<TType, any>> | null): TType | null;
declare function useFragment<TType>(_documentNode: DocumentTypeDecoration<TType, any>, fragmentType: FragmentType<DocumentTypeDecoration<TType, any>> | null | undefined): TType | null | undefined;
declare function useFragment<TType>(_documentNode: DocumentTypeDecoration<TType, any>, fragmentType: Array<FragmentType<DocumentTypeDecoration<TType, any>>>): Array<TType>;
declare function useFragment<TType>(_documentNode: DocumentTypeDecoration<TType, any>, fragmentType: Array<FragmentType<DocumentTypeDecoration<TType, any>>> | null | undefined): Array<TType> | null | undefined;
declare function useFragment<TType>(_documentNode: DocumentTypeDecoration<TType, any>, fragmentType: ReadonlyArray<FragmentType<DocumentTypeDecoration<TType, any>>>): ReadonlyArray<TType>;
declare function useFragment<TType>(_documentNode: DocumentTypeDecoration<TType, any>, fragmentType: ReadonlyArray<FragmentType<DocumentTypeDecoration<TType, any>>> | null | undefined): ReadonlyArray<TType> | null | undefined;
declare function makeFragmentData<F extends DocumentTypeDecoration<any, any>, FT extends ResultOf<F>>(data: FT, _fragment: F): FragmentType<F>;
declare function isFragmentReady<TQuery, TFrag>(queryNode: DocumentTypeDecoration<TQuery, any>, fragmentNode: TypedDocumentNode<TFrag>, data: FragmentType<TypedDocumentNode<Incremental<TFrag>, any>> | null | undefined): data is FragmentType<typeof fragmentNode>;

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation UpdateUserById($userId: ID!, $input: UpdateUserFull!) {\n    updateUserById(userId: $userId, input: $input) {\n      id\n      email\n      phoneNumber\n      name\n      avatar\n      birthDate\n      bio\n      active\n      role\n      createdAt\n      updatedAt\n    }\n  }\n": typeof UpdateUserByIdDocument;
    "\n  mutation CreateStoreUserAdmin($input: CreateStoreUserAdmin!) {\n    createStoreUserAdmin(input:$input) {\n      id\n      storeId\n      branchId\n      userId\n      user {\n        id\n        name\n        avatar\n      }\n      legalName\n      email\n      employeeId\n      role\n      approved\n      createdBy {\n        id\n        name\n        avatar\n        active\n      }\n      createdAt\n      encodedId\n    }\n  }\n": typeof CreateStoreUserAdminDocument;
    "\n  mutation AdminRemoveAuthSession($authStateId: String!) {\n    adminRemoveAuthSession(authStateId: $authStateId)\n  }\n": typeof AdminRemoveAuthSessionDocument;
    "\n  mutation CreateBranchFromFullAddress($storeId: ID!, $fullAddress: String!) {\n    createBranchWithFullAddress(storeId: $storeId, fullAddress: $fullAddress) {\n      id\n      name\n      addressId\n      storeId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n": typeof CreateBranchFromFullAddressDocument;
    "\n  mutation CreateBranch($input: CreateBranch!) {\n    createBranch(input: $input) {\n      id\n      name\n      addressId\n      storeId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n": typeof CreateBranchDocument;
    "\n  mutation CreateCategory($input: CreateCategory!) {\n    createCategory(input:$input) {\n      id\n      name\n      path\n      expandedPathname\n      categoryAlias\n      depth\n    }\n  }\n": typeof CreateCategoryDocument;
    "\n  mutation AddGroceryListItem($groceryListId: ID!, $input: CreateGroceryListItemInput!) {\n    addGroceryListItem(groceryListId: $groceryListId, input: $input) {\n      id\n    }\n  }\n": typeof AddGroceryListItemDocument;
    "\n  mutation UpdateGroceryListItem($groceryListItemId: ID!, $input: CreateGroceryListItemInput!) {\n    updateGroceryListItem(groceryListItemId: $groceryListItemId, input: $input) {\n      id\n    }\n  }\n": typeof UpdateGroceryListItemDocument;
    "\n  mutation DeleteGroceryListItem($groceryListItemId: ID!) {\n    deleteGroceryListItem(groceryListItemId: $groceryListItemId) {\n      id\n    }\n  }\n": typeof DeleteGroceryListItemDocument;
    "\n  mutation MarkGroceryListItem($groceryListItemId: ID!, $completed: Boolean!) {\n    markGroceryListItem(groceryListItemId: $groceryListItemId, completed:$completed) {\n      id\n      completed\n    }\n  }\n": typeof MarkGroceryListItemDocument;
    "\n  mutation AddToList($listId: ID!, $productId: ID!, $stockId: ID) {\n    addToList(listId: $listId, productId: $productId, stockId: $stockId) {\n      id\n      userId\n      listId\n      productId\n      stockId\n      createdAt\n    }\n  }\n": typeof AddToListDocument;
    "\n  mutation RemoveFromList($listId: ID!, $productListId: ID!) {\n    removeFromList(listId: $listId, productListId: $productListId) {\n      id\n      userId\n      listId\n      productId\n      stockId\n      createdAt\n    }\n  }\n": typeof RemoveFromListDocument;
    "\n  mutation RemoveFromListWithProductId($listId: ID!, $productId: ID!, $stockId: ID) {\n    removeFromListWithProductId(listId: $listId, productId: $productId, stockId: $stockId) {\n      id\n      userId\n      listId\n      productId\n      stockId\n      createdAt\n    }\n  }\n": typeof RemoveFromListWithProductIdDocument;
    "\n  mutation AddBranchToList($listId: ID!, $branchId: ID!) {\n    addBranchToList(listId: $listId, branchId: $branchId) {\n      id\n      userId\n      listId\n      branchId\n      createdAt\n    }\n  }\n": typeof AddBranchToListDocument;
    "\n  mutation BulkAddBranchesToList($listId: ID!, $branchIds: [ID!]!) {\n    bulkAddBranchesToList(listId: $listId, branchIds: $branchIds) {\n      id\n      userId\n      listId\n      branchId\n      createdAt\n    }\n  }\n": typeof BulkAddBranchesToListDocument;
    "\n  mutation RemoveBranchFromList($listId: ID!, $branchListId: ID!) {\n    removeBranchFromList(listId: $listId, branchListId: $branchListId) {\n      id\n      userId\n      listId\n      branchId\n      createdAt\n    }\n  }\n": typeof RemoveBranchFromListDocument;
    "\n  mutation CreatePrice($input: CreatePrice!) {\n    createPrice(input: $input) {\n      id\n      amount\n      currencyCode\n      productId\n      storeId\n      stockId\n      branchId\n    }\n  }\n": typeof CreatePriceDocument;
    "\n  mutation UpdateProductNutritionData($productId: ID!) {\n    updateProductNutritionData(productId: $productId) {\n      productId\n      openfoodfactsUpdatedAt\n      createdAt\n      updatedAt\n    }\n  }\n": typeof UpdateProductNutritionDataDocument;
    "\n  mutation CreateProduct($input: CreateProduct!) {\n    createProduct(input: $input) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n      weightValue\n      weightType\n      createdAt\n      updatedAt\n    }\n  }\n": typeof CreateProductDocument;
    "\n  mutation UpdateProduct($id: ID!, $input: UpdateProduct!) {\n    updateProduct(id: $id, input: $input) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n      weightValue\n      weightType\n      createdAt\n      updatedAt\n    }\n  }\n": typeof UpdateProductDocument;
    "\n  mutation ExtractAndCreateProduct($barcode: String!, $base64Image: String!) {\n    extractAndCreateProduct(barcode: $barcode, base64Image: $base64Image) {\n      id\n      code\n      brand\n      name\n      categoryId\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      description\n    }\n  }\n": typeof ExtractAndCreateProductDocument;
    "\n  mutation SanitizeProduct($id: ID!) {\n    sanitizeProduct(id: $id) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        categoryAlias\n        expandedPathname\n        path\n      }\n      approximateWeight\n      netWeight\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      createdAt\n      updatedAt\n      views\n    }\n  }\n": typeof SanitizeProductDocument;
    "\n  mutation AcceptPendingStoreUserInvite($data: String!) {\n    acceptPendingStoreUserInvite(data: $data) {\n      id\n      storeId\n      store {\n        id\n        slug\n        name\n        logo\n      }\n      branchId\n      branch {\n        id\n        slug\n        name\n        address {\n          id\n          fullAddress\n        }\n      }\n      userId\n      user {\n        id\n        name\n        avatar\n      }\n      legalName\n      email\n      employeeId\n      role\n      approvedAt\n      approvedById\n      approvedByUser {\n        id\n        name\n        avatar\n      }\n      approved\n      createdById\n      createdBy {\n        id\n        name\n        avatar\n        active\n      }\n      createdAt\n    }\n  }\n": typeof AcceptPendingStoreUserInviteDocument;
    "\n  mutation DeclinePendingStoreUserInvite($data: String!) {\n    declinePendingStoreUserInvite(data: $data)\n  }\n": typeof DeclinePendingStoreUserInviteDocument;
    "\n  mutation CreateStore($input: CreateStore!) {\n    createStore(input: $input) {\n      id\n      name\n      logo\n      website\n    }\n  }\n": typeof CreateStoreDocument;
    "\n  mutation CreateAccount($email: String!, $name: String!, $password: String!) {\n    createAccount(input: { email: $email, name: $name, password: $password }) {\n      id\n      name\n      email\n      phoneNumber\n      createdAt\n      updatedAt\n      authPlatform\n      role\n    }\n  }\n": typeof CreateAccountDocument;
    "\n  mutation VerifyEmail($verificationCode: String!) {\n    verifyEmail(verificationCode: $verificationCode) {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authPlatform\n      authStateId\n      role\n    }\n  }\n": typeof VerifyEmailDocument;
    "\n  mutation ResendVerification($email: String!) {\n    resendEmailVerificationCode(email: $email)\n  }\n": typeof ResendVerificationDocument;
    "\n  mutation Logout {\n    logout\n  }\n": typeof LogoutDocument;
    "\n  mutation UpdateProfile($input: UpdateUser!) {\n    updateProfile(input: $input) {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authPlatform\n      authStateId\n      role\n      addressId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n      birthDate\n      phoneNumber\n      bio\n    }\n  }\n": typeof UpdateProfileDocument;
    "\n  mutation DeleteMyAccount {\n    deleteMyAccount\n  }\n": typeof DeleteMyAccountDocument;
    "\n  mutation RequestResetPassword($email: String!) {\n    requestPasswordReset(email: $email)\n  }\n": typeof RequestResetPasswordDocument;
    "\n  mutation UpdatePasswordWithResetCode($email: String!, $code: String!, $newPassword: String!) {\n    updatePasswordWithResetCode(\n      email: $email\n      code: $code\n      newPassword: $newPassword\n    )\n  }\n": typeof UpdatePasswordWithResetCodeDocument;
    "\n  mutation RegisterExpoPushToken($expoPushToken: String!) {\n    registerExpoPushToken(expoPushToken: $expoPushToken) {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authPlatform\n      authStateId\n      expoPushToken\n      role\n      addressId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n": typeof RegisterExpoPushTokenDocument;
    "\n  query GetAllUsers($paginator: PaginatorInput!, $filters: UserFilter) {\n    getAllUsers(paginator:$paginator, filters:$filters) {\n      users {\n        id\n        email\n        phoneNumber\n        name\n        avatar\n        birthDate\n        bio\n        active\n        role\n        createdAt\n        updatedAt\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": typeof GetAllUsersDocument;
    "\n  query ProductBillingDataByUserId($userId: ID!, $paginator: PaginatorInput!) {\n    productBillingDataByUserId(userId: $userId, paginator: $paginator) {\n      data {\n        id\n        rate\n        userId\n        user {\n          id\n          name\n          avatar\n          active\n        }\n        productId\n        product {\n          id\n          name\n          image\n          brand\n          code\n          category {\n            id\n            name\n            expandedPathname\n            path\n          }\n          createdAt\n          updatedAt\n        }\n        createdAt\n        paidAt\n        billingRateType\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": typeof ProductBillingDataByUserIdDocument;
    "\n  query PaginatedAdminAuthSessions($paginator: PaginatorInput!, $filters: UserFilter) {\n    paginatedAdminAuthSessions(paginator: $paginator, filters: $filters) {\n      authSessions {\n        id\n        loggedInAt\n        userId\n        user {\n          id\n          name\n          avatar\n          active\n          createdAt\n          updatedAt\n        }\n        ipAddress\n        platform\n        device\n        expoPushToken\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": typeof PaginatedAdminAuthSessionsDocument;
    "\n  query PaginatedAdminProductViewEntries($paginator: PaginatorInput!) {\n    paginatedAdminProductViewEntries(paginator: $paginator) {\n      productViewEntries {\n        id\n        productId\n        product {\n          id\n          code\n          name\n          image\n        }\n        stockId\n        stock {\n          id\n        }\n        userId\n        user {\n          id\n          name\n          avatar\n          active\n        }\n        origin\n        platform\n        createdAt\n        referrer\n        metadata\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": typeof PaginatedAdminProductViewEntriesDocument;
    "\n  query AllBranches($storeId: ID, $storeSlug: String, $paginator: PaginatorInput!, $search: String, $location: LocationInput) {\n    allBranches(storeId: $storeId, storeSlug: $storeSlug, paginator: $paginator, search: $search, location: $location) {\n      branches {\n        id\n        slug\n        name\n        addressId\n        storeId\n        storeSlug\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n          distance\n        }\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": typeof AllBranchesDocument;
    "\n  query Branch($branchId: ID, $branchSlug: String, $storeId: ID, $storeSlug: String) {\n    findBranch(id: $branchId, slug: $branchSlug, storeId: $storeId, storeSlug: $storeSlug) {\n      id\n      slug\n      name\n      addressId\n      storeId\n      storeSlug\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n\n    findStore(id: $storeId, slug: $storeSlug) {\n      id\n      slug\n      name\n      logo\n      website\n    }\n  }\n": typeof BranchDocument;
    "\n  query FindBranch($branchId: ID, $branchSlug: String, $storeId: ID, $storeSlug: String) {\n    findBranch(id: $branchId, slug: $branchSlug, storeId: $storeId, storeSlug: $storeSlug) {\n      id\n      slug\n      name\n      addressId\n      storeId\n      storeSlug\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n": typeof FindBranchDocument;
    "\n  query FindBranchesByDistance($lat: Float!, $lon: Float!, $radiusMeters: Int!) {\n    findBranchesByDistance(lat: $lat, lon: $lon, radiusMeters: $radiusMeters) {\n      id\n      slug\n      name\n      storeId\n      storeSlug\n      store {\n        id\n        slug\n        name\n        website\n        logo\n      }\n      addressId\n      address {\n        id\n        distance\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n": typeof FindBranchesByDistanceDocument;
    "\n  query FavoriteBranchesWithPrices($productId: ID!) {\n    getFavoriteBranchesWithPrices(productId: $productId) {\n      id\n      branchId\n      branch {\n        id\n        slug\n        name\n        storeId\n        storeSlug\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        addressId\n        address {\n          id\n          distance\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n      stock {\n        id\n        productId\n        storeId\n        branchId\n        latestPriceId\n        latestPrice {\n          id\n          productId\n          branchId\n          storeId\n          amount\n          currencyCode\n          createdAt\n          sale\n          originalPrice\n          condition\n          expiresAt\n          unitType\n          createdBy {\n            id\n            name\n            avatar\n          }\n        }\n      }\n      approximatePrice\n    }\n  }\n": typeof FavoriteBranchesWithPricesDocument;
    "\n  query AllBrands($joinStock: Boolean) {\n    allBrands(joinStock: $joinStock) {\n      brand\n      products\n    }\n  }\n": typeof AllBrandsDocument;
    "\n  query GetCategories($depth: Int, $parentId: ID) {\n    getCategories(depth: $depth, parentId: $parentId) {\n      id\n      name\n      path\n      expandedPathname\n      categoryAlias\n      depth\n    }\n  }\n": typeof GetCategoriesDocument;
    "\n  query CategorySearch($search: String!, $quickSearchMode: Boolean) {\n    categorySearch(search: $search, quickSearchMode: $quickSearchMode) {\n      id\n      name\n    }\n  }\n": typeof CategorySearchDocument;
    "\n  query GetCategory($id: ID!) {\n    getCategory(id: $id) {\n      id\n      name\n      path\n      expandedPathname\n      categoryAlias\n    }\n  }\n": typeof GetCategoryDocument;
    "\n  query GroceryLists {\n    groceryLists {\n      id\n      name\n      default\n      createdAt\n    }\n  }\n": typeof GroceryListsDocument;
    "\n  query GroceryListItems($groceryListId: ID!, $filters: GroceryListItemsFilters) {\n    groceryListItems(groceryListId: $groceryListId, filters: $filters) {\n      id\n      groceryListId\n      productId\n      product {\n        id\n        code\n        name\n        image\n        categoryId\n        category {\n          id\n          name\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      category\n      weight\n      quantity\n      unit\n      completed\n      createdAt\n    }\n  }\n": typeof GroceryListItemsDocument;
    "\n  query DefaultGroceryListItems($filters: GroceryListItemsFilters) {\n    defaultGroceryListItems(filters: $filters) {\n      id\n      groceryListId\n      productId\n      product {\n        id\n        code\n        name\n        image\n        categoryId\n        category {\n          id\n          name\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      category\n      weight\n      quantity\n      unit\n      completed\n      createdAt\n    }\n  }\n": typeof DefaultGroceryListItemsDocument;
    "\n  query CountGroceryListItems($groceryListId: ID, $includeCompleted: Boolean) {\n    countGroceryListItems(groceryListId: $groceryListId, includeCompleted: $includeCompleted)\n  }\n": typeof CountGroceryListItemsDocument;
    "\n  query GetAllLists($listType: ListType) {\n    getAllLists(listType: $listType) {\n      id\n      name\n      type\n      userId\n      createdAt\n      productList {\n        id\n        listId\n        productId\n        stockId\n        createdAt\n      }\n      branchList {\n        id\n        listId\n        branchId\n        createdAt\n      }\n    }\n  }\n": typeof GetAllListsDocument;
    "\n  query GetAllProductListsByListId($listId: ID!) {\n    getAllProductListsByListId(listId: $listId) {\n      id\n      listId\n      userId\n      productId\n      type\n      stockId\n      createdAt\n      product {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n      }\n      stock {\n        id\n        productId\n        storeId\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        branchId\n        branch {\n          id\n          slug\n          name\n          addressId\n          address {\n            id\n            latitude\n            longitude\n            mapsLink\n            fullAddress\n            street\n            city\n            administrativeDivision\n            countryCode\n            country\n            zipCode\n          }\n        }\n        latestPriceId\n        latestPrice {\n          id\n          productId\n          branchId\n          storeId\n          amount\n          currencyCode\n          createdAt\n          sale\n          originalPrice\n          condition\n          expiresAt\n          unitType\n        }\n      }\n    }\n  }\n": typeof GetAllProductListsByListIdDocument;
    "\n  query GetAllBranchListsByListId($listId: ID!) {\n    getAllBranchListsByListId(listId: $listId) {\n      id\n      listId\n      branchId\n      branch {\n        id\n        slug\n        name\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n        storeId\n        storeSlug\n        store {\n          id\n          slug\n          name\n          logo\n        }\n      }\n      createdAt\n    }\n  }\n": typeof GetAllBranchListsByListIdDocument;
    "\n  query GetAllCountries {\n    getAllCountries {\n      code\n      name\n      administrativeDivisions {\n        name\n        cities\n      }\n      currency {\n        currencyCode\n        name\n        symbol\n        symbolNative\n        decimals\n        numToBasic\n      }\n      callingCode\n      language\n    }\n  }\n": typeof GetAllCountriesDocument;
    "\n  query CheckAppVersion($platform: AuthDeviceType!, $version: String!) {\n    checkAppVersion(platform: $platform, version: $version)\n  }\n": typeof CheckAppVersionDocument;
    "\n  query IpToAddress($ipAddress: String!) {\n    ipToAddress(ipAddress: $ipAddress) {\n      id\n      latitude\n      longitude\n      mapsLink\n      fullAddress\n      street\n      city\n      administrativeDivision\n      zipCode\n      countryCode\n      country\n    }\n  }\n": typeof IpToAddressDocument;
    "\n  query PriceChangeHistory($productId: ID!, $stockId: ID!, $paginator: PaginatorInput!, $filters: PriceHistoryFilter) {\n    priceChangeHistory(\n      productId: $productId\n      stockId: $stockId\n      paginator: $paginator\n      filters: $filters\n    ) {\n      prices {\n        id\n        productId\n        stockId\n        branchId\n        storeId\n        amount\n        originalPrice\n        sale\n        expiresAt\n        condition\n        unitType\n        currencyCode\n        createdBy {\n          id\n          name\n          avatar\n        }\n        createdAt\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": typeof PriceChangeHistoryDocument;
    "\n  query GetProductNutritionData($productId: ID!) {\n    getProductNutritionData(productId: $productId) {\n      productId\n      servingSize\n      servingSizeUnit\n      servingSizeValue\n      ingredientText\n      ingredientList\n      nutriments {\n        salt\n        salt100g\n        saltValue\n        saltServing\n        saltUnit\n        sugars\n        sugars100g\n        sugarsValue\n        sugarsServing\n        sugarsUnit\n        iron\n        iron100g\n        ironValue\n        ironServing\n        ironUnit\n        ironLabel\n        calcium\n        calcium100g\n        calciumValue\n        calciumServing\n        calciumUnit\n        calciumLabel\n        cholesterol100g\n        saturatedFat\n        saturatedFat100g\n        saturatedFatValue\n        saturatedFatServing\n        saturatedFatUnit\n        fat\n        fat100g\n        fatValue\n        fatServing\n        fatUnit\n        transFat\n        transFat100g\n        transFatValue\n        transFatServing\n        transFatUnit\n        transFatLabel\n        vitaminA\n        vitaminA100g\n        vitaminAValue\n        vitaminAServing\n        vitaminAUnit\n        vitaminALabel\n        vitaminC\n        vitaminC100g\n        vitaminCValue\n        vitaminCServing\n        vitaminCUnit\n        vitaminCLabel\n        proteins\n        proteins100g\n        proteinsValue\n        proteinsServing\n        proteinsUnit\n        fiber\n        fiber100g\n        fiberValue\n        fiberServing\n        fiberUnit\n        carbohydrates\n        carbohydrates100g\n        carbohydratesValue\n        carbohydratesServing\n        carbohydratesUnit\n        alcohol\n        alcohol100g\n        alcoholValue\n        alcoholServing\n        alcoholUnit\n        sodium\n        sodium100g\n        sodiumValue\n        sodiumServing\n        sodiumUnit\n        potassium100g\n        polyunsaturatedFat100g\n        monounsaturatedFat100g\n        novaGroup\n        novaGroup100g\n        novaGroupServing\n        energy\n        energy100g\n        energyValue\n        energyServing\n        energyUnit\n        energyKcal\n        energyKcal100g\n        energyKcalValue\n        energyKcalServing\n        energyKcalUnit\n        nutritionScoreFr\n        nutritionScoreFr100g\n        nutritionScoreFrServing\n        nutritionScoreUk\n        nutritionScoreUk100g\n        nutritionScoreUkServing\n      }\n      vegan\n      vegetarian\n      glutenFree\n      lactoseFree\n      halal\n      kosher\n      createdAt\n      updatedAt\n    }\n  }\n": typeof GetProductNutritionDataDocument;
    "\n  query BarcodeScan($barcode: String!, $searchMode: Boolean, $location: LocationInput) {\n    barcodeScan(barcode: $barcode, searchMode: $searchMode, location: $location) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n      approximateWeight\n      netWeight\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      createdAt\n      updatedAt\n      stock {\n        id\n        productId\n        storeId\n        branchId\n        latestPriceId\n      }\n    }\n  }\n": typeof BarcodeScanDocument;
    "\n  query Product($productId: ID!, $viewerTrail: ViewerTrailInput) {\n    product(id: $productId, viewerTrail: $viewerTrail) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        categoryAlias\n        expandedPathname\n        path\n      }\n      approximateWeight\n      netWeight\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      createdAt\n      updatedAt\n      views\n      productList {\n        id\n        listId\n        userId\n        productId\n        type\n        stockId\n        createdAt\n      }\n    }\n  }\n": typeof ProductDocument;
    "\n  query AllProducts($paginator: PaginatorInput!, $search: ProductSearch) {\n    allProducts(paginator: $paginator, search: $search) {\n      products {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        stock {\n          id\n          productId\n          storeId\n          store {\n            id\n            slug\n            name\n            logo\n          }\n          branchId\n          branch {\n            id\n            slug\n            name\n            addressId\n            address {\n              id\n              latitude\n              longitude\n              mapsLink\n              fullAddress\n              street\n              city\n              administrativeDivision\n              countryCode\n              country\n              zipCode\n              distance\n            }\n          }\n          latestPriceId\n          latestPrice {\n            id\n            productId\n            branchId\n            storeId\n            amount\n            currencyCode\n            createdAt\n            sale\n            originalPrice\n            condition\n            expiresAt\n            unitType\n            createdBy {\n              id\n              name\n              avatar\n            }\n          }\n          createdBy {\n            id\n            name\n            avatar\n          }\n          updatedBy {\n            id\n            name\n            avatar\n          }\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": typeof AllProductsDocument;
    "\n  query BranchesWithProducts($paginator: PaginatorInput!, $productLimit: Int!, $filters: ProductSearch) {\n    branchesWithProducts(\n      paginator: $paginator\n      productLimit: $productLimit\n      filters: $filters\n    ) {\n      branches {\n        id\n        slug\n        name\n        storeId\n        storeSlug\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        addressId\n        address {\n          id\n          distance\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n        products {\n          id\n          name\n          image\n          description\n          brand\n          code\n          model\n          categoryId\n          category {\n            id\n            name\n            expandedPathname\n            path\n          }\n          stock {\n            id\n            productId\n            storeId\n            branchId\n            latestPriceId\n            latestPrice {\n              id\n              productId\n              branchId\n              storeId\n              amount\n              currencyCode\n              createdAt\n              sale\n              originalPrice\n              condition\n              expiresAt\n              unitType\n            }\n            createdBy {\n              id\n              name\n              avatar\n            }\n            updatedBy {\n              id\n              name\n              avatar\n            }\n          }\n          approximateWeight\n          netWeight\n          weightValue\n          weightType\n          quantityValue\n          quantityType\n          createdAt\n          updatedAt\n          views\n        }\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": typeof BranchesWithProductsDocument;
    "\n  query ProductSummary($productId: ID!, $stockId: ID, $branch: ProductSummaryBranchInput) {\n    productSummary(id: $productId, stockId: $stockId, branch: $branch) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      stockId\n      store\n      storeId\n      storeLogo\n      storeSlug\n      branch\n      branchId\n      branchSlug\n      address\n      price\n      priceCurrencyCode\n      originalPrice\n      sale\n      saleExpiresAt\n      priceCreatedAt\n    }\n  }\n": typeof ProductSummaryDocument;
    "\n  query ProductSearch($paginator: PaginatorInput!, $search: String, $filters: ProductSearchFilters) {\n    productSearch(paginator: $paginator, search: $search, filters: $filters) {\n      products {\n        id\n        code\n        brand\n        name\n        category {\n          id\n          name\n          expandedPathname\n        }\n        quantityValue\n        quantityType\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        createdAt\n        updatedAt\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": typeof ProductSearchDocument;
    "\n  query ExtractProductFields($base64Image: String!) {\n    extractProductFields(base64Image: $base64Image) {\n      brand\n      name\n      description\n      netWeight\n      weight\n      quantity\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n    }\n  }\n": typeof ExtractProductFieldsDocument;
    "\n  query MyProductViewHistory($paginator: PaginatorInput!) {\n    myProductViewHistory(paginator: $paginator) {\n      products {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        stock {\n          id\n          productId\n          storeId\n          store {\n            id\n            slug\n            name\n            logo\n          }\n          branchId\n          branch {\n            id\n            slug\n            name\n            addressId\n            address {\n              id\n              latitude\n              longitude\n              mapsLink\n              fullAddress\n              street\n              city\n              administrativeDivision\n              countryCode\n              country\n              zipCode\n              distance\n            }\n          }\n          latestPriceId\n          latestPrice {\n            id\n            productId\n            branchId\n            storeId\n            amount\n            currencyCode\n            createdAt\n            sale\n            originalPrice\n            condition\n            expiresAt\n            unitType\n          }\n          createdBy {\n            id\n            name\n            avatar\n          }\n          updatedBy {\n            id\n            name\n            avatar\n          }\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": typeof MyProductViewHistoryDocument;
    "\n  query PopularProducts($paginator: PaginatorInput!, $dateRange: TimestampRangeBetween) {\n    popularProducts(paginator: $paginator, dateRange: $dateRange) {\n      products {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        stock {\n          id\n          productId\n          storeId\n          store {\n            id\n            slug\n            name\n            logo\n          }\n          branchId\n          branch {\n            id\n            slug\n            name\n            addressId\n            address {\n              id\n              latitude\n              longitude\n              mapsLink\n              fullAddress\n              street\n              city\n              administrativeDivision\n              countryCode\n              country\n              zipCode\n              distance\n            }\n          }\n          latestPriceId\n          latestPrice {\n            id\n            productId\n            branchId\n            storeId\n            amount\n            currencyCode\n            createdAt\n            sale\n            originalPrice\n            condition\n            expiresAt\n            unitType\n          }\n          createdBy {\n            id\n            name\n            avatar\n          }\n          updatedBy {\n            id\n            name\n            avatar\n          }\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": typeof PopularProductsDocument;
    "\n  query WeightComponentsFromCategoryId($categoryId: ID!) {\n    weightComponentsFromCategoryId(categoryId: $categoryId) {\n      weightValue\n      weightType\n    }\n  }\n": typeof WeightComponentsFromCategoryIdDocument;
    "\n  query MySearchHistory($paginator: PaginatorInput!) {\n    mySearchHistory(paginator:$paginator) {\n      searches {\n        id\n        searchTerm\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": typeof MySearchHistoryDocument;
    "\n  query PopularSearchKeywords($paginator: PaginatorInput!, $dateRange: TimestampRangeBetween) {\n    popularSearchKeywords(paginator:$paginator, dateRange: $dateRange) {\n      searches\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }  \n": typeof PopularSearchKeywordsDocument;
    "\n  query SearchKeywords($search: String!) {\n    searchKeywords(search: $search)\n  }\n": typeof SearchKeywordsDocument;
    "\n  query Stock($stockId: ID!) {\n    stock(stockId: $stockId) {\n      id\n      productId\n      storeId\n      store {\n        slug\n        id\n        name\n        logo\n      }\n      branchId\n      branch {\n        id\n        slug\n        name\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n          distance\n        }\n      }\n      latestPriceId\n      latestPrice {\n        id\n        productId\n        branchId\n        storeId\n        amount\n        currencyCode\n        sale\n        originalPrice\n        condition\n        expiresAt\n        createdAt\n        unitType\n      }\n      createdAt\n      updatedAt\n      createdBy {\n        id\n        name\n        avatar\n      }\n      updatedBy {\n        id\n        name\n        avatar\n      }\n    }\n  }\n": typeof StockDocument;
    "\n  query GetStockFromProductAndBranchId($productId: ID!, $branchId: ID!) {\n    getStockFromProductAndBranchId(productId: $productId, branchId: $branchId) {\n      id\n      productId\n      storeId\n      branchId\n      latestPriceId\n      latestPrice {\n        id\n        productId\n        branchId\n        storeId\n        amount\n        currencyCode\n        sale\n        originalPrice\n        condition\n        expiresAt\n        createdAt\n        unitType\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": typeof GetStockFromProductAndBranchIdDocument;
    "\n  query GetProductStocks($paginator: PaginatorInput!, $productId: ID!, $location: LocationInput) {\n    getProductStocks(paginator: $paginator, productId: $productId, location: $location) {\n      stocks {\n        id\n        productId\n        storeId\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        branchId\n        branch {\n          id\n          slug\n          name\n          address {\n            id\n            latitude\n            longitude\n            mapsLink\n            fullAddress\n            street\n            city\n            administrativeDivision\n            countryCode\n            country\n            zipCode\n            distance\n          }\n        }\n        latestPriceId\n        latestPrice {\n          id\n          productId\n          branchId\n          storeId\n          amount\n          currencyCode\n          sale\n          originalPrice\n          condition\n          expiresAt\n          unitType\n        }\n        createdAt\n        updatedAt\n        createdBy {\n          id\n          name\n          avatar\n        }\n        updatedBy {\n          id\n          name\n          avatar\n        }\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": typeof GetProductStocksDocument;
    "\n  query MyStoreUser {\n    myStoreUsers {\n      id\n      storeId\n      store {\n        id\n        slug\n        name\n        logo\n      }\n      branchId\n      branch {\n        id\n        slug\n        name\n        address {\n          id\n          fullAddress\n        }\n      }\n      userId\n      user {\n        id\n        name\n        avatar\n      }\n      legalName\n      email\n      employeeId\n      role\n      approvedAt\n      approvedById\n      approvedByUser {\n        id\n        name\n        avatar\n      }\n      approved\n      createdById\n      createdBy {\n        id\n        name\n        avatar\n        active\n      }\n      createdAt\n    }\n  }\n": typeof MyStoreUserDocument;
    "\n  query AllStores($paginator: PaginatorInput!, $search: String) {\n    allStores(paginator: $paginator, search: $search) {\n      stores {\n        id\n        slug\n        name\n        logo\n        website\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": typeof AllStoresDocument;
    "\n  query FindStore($storeId: ID, $storeSlug: String) {\n    findStore(id: $storeId, slug: $storeSlug) {\n      id\n      slug\n      name\n      logo\n      website\n    }\n  }\n": typeof FindStoreDocument;
    "\n  fragment UserFields on User {\n    id\n    name\n    email\n    avatar\n    createdAt\n    updatedAt\n    active\n    authDevice\n    authPlatform\n    authStateId\n    role\n  }\n": typeof UserFieldsFragmentDoc;
    "\n  query LoginInternal(\n    $email: String!\n    $password: String!\n    $ipAddress: String\n    $device: AuthDeviceType\n  ) {\n    login(email: $email, password: $password, ipAddress: $ipAddress, device: $device) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authDevice\n        authPlatform\n        authStateId\n        expoPushToken\n        role\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n    }\n  }\n": typeof LoginInternalDocument;
    "\n  query GoogleOAuth($accessToken: String!, $ipAddress: String, $device: AuthDeviceType) {\n    googleOAuth(accessToken: $accessToken, ipAddress: $ipAddress, device: $device) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authDevice\n        authPlatform\n        authStateId\n        expoPushToken\n        role\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n      isNewUser\n    }\n  }\n": typeof GoogleOAuthDocument;
    "\n  query AppleOAuth(\n    $code: String!\n    $appleRawUser: String\n    $ipAddress: String\n    $device: AuthDeviceType\n  ) {\n    appleOAuth(\n      code: $code\n      appleRawUser: $appleRawUser\n      ipAddress: $ipAddress\n      device: $device\n    ) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authDevice\n        authPlatform\n        authStateId\n        expoPushToken\n        role\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n      isNewUser\n    }\n  }\n": typeof AppleOAuthDocument;
    "\n  query YahooOAuth($code: String!, $codeVerifier: String, $ipAddress: String, $device: AuthDeviceType) {\n    yahooOAuth(code: $code, codeVerifier: $codeVerifier, ipAddress: $ipAddress, device: $device) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authDevice\n        authPlatform\n        authStateId\n        expoPushToken\n        role\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n      isNewUser\n    }\n  }\n": typeof YahooOAuthDocument;
    "\n  query VerifyPasswordResetCode($email: String!, $code: String!) {\n    verifyPasswordResetCode(email: $email, code: $code)\n  }\n": typeof VerifyPasswordResetCodeDocument;
    "\n  query Me {\n    me {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authDevice\n      authPlatform\n      authStateId\n      expoPushToken\n      role\n      addressId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n      birthDate\n      phoneNumber\n      bio\n    }\n  }\n": typeof MeDocument;
    "\n  query MyProductBillingData($paginator: PaginatorInput!) {\n    myProductBillingData(paginator: $paginator) {\n      data {\n        id\n        rate\n        userId\n        user {\n          id\n          name\n          avatar\n          active\n        }\n        productId\n        product {\n          id\n          name\n          image\n          brand\n          code\n          category {\n            id\n            name\n            expandedPathname\n            path\n          }\n          createdAt\n          updatedAt\n        }\n        createdAt\n        paidAt\n        billingRateType\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n": typeof MyProductBillingDataDocument;
    "\n  query PostAuthUserData($listType: ListType) {\n    getAllLists(listType: $listType) {\n      id\n      name\n      type\n      userId\n      createdAt\n      productList {\n        id\n        listId\n        productId\n        stockId\n        createdAt\n      }\n      branchList {\n        id\n        listId\n        branchId\n        createdAt\n      }\n    }\n\n    groceryLists {\n      id\n      name\n      default\n      createdAt\n    }\n  }\n": typeof PostAuthUserDataDocument;
};
declare const documents: Documents;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
declare function graphql(source: string): unknown;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation UpdateUserById($userId: ID!, $input: UpdateUserFull!) {\n    updateUserById(userId: $userId, input: $input) {\n      id\n      email\n      phoneNumber\n      name\n      avatar\n      birthDate\n      bio\n      active\n      role\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserById($userId: ID!, $input: UpdateUserFull!) {\n    updateUserById(userId: $userId, input: $input) {\n      id\n      email\n      phoneNumber\n      name\n      avatar\n      birthDate\n      bio\n      active\n      role\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation CreateStoreUserAdmin($input: CreateStoreUserAdmin!) {\n    createStoreUserAdmin(input:$input) {\n      id\n      storeId\n      branchId\n      userId\n      user {\n        id\n        name\n        avatar\n      }\n      legalName\n      email\n      employeeId\n      role\n      approved\n      createdBy {\n        id\n        name\n        avatar\n        active\n      }\n      createdAt\n      encodedId\n    }\n  }\n"): (typeof documents)["\n  mutation CreateStoreUserAdmin($input: CreateStoreUserAdmin!) {\n    createStoreUserAdmin(input:$input) {\n      id\n      storeId\n      branchId\n      userId\n      user {\n        id\n        name\n        avatar\n      }\n      legalName\n      email\n      employeeId\n      role\n      approved\n      createdBy {\n        id\n        name\n        avatar\n        active\n      }\n      createdAt\n      encodedId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation AdminRemoveAuthSession($authStateId: String!) {\n    adminRemoveAuthSession(authStateId: $authStateId)\n  }\n"): (typeof documents)["\n  mutation AdminRemoveAuthSession($authStateId: String!) {\n    adminRemoveAuthSession(authStateId: $authStateId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation CreateBranchFromFullAddress($storeId: ID!, $fullAddress: String!) {\n    createBranchWithFullAddress(storeId: $storeId, fullAddress: $fullAddress) {\n      id\n      name\n      addressId\n      storeId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBranchFromFullAddress($storeId: ID!, $fullAddress: String!) {\n    createBranchWithFullAddress(storeId: $storeId, fullAddress: $fullAddress) {\n      id\n      name\n      addressId\n      storeId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation CreateBranch($input: CreateBranch!) {\n    createBranch(input: $input) {\n      id\n      name\n      addressId\n      storeId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBranch($input: CreateBranch!) {\n    createBranch(input: $input) {\n      id\n      name\n      addressId\n      storeId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation CreateCategory($input: CreateCategory!) {\n    createCategory(input:$input) {\n      id\n      name\n      path\n      expandedPathname\n      categoryAlias\n      depth\n    }\n  }\n"): (typeof documents)["\n  mutation CreateCategory($input: CreateCategory!) {\n    createCategory(input:$input) {\n      id\n      name\n      path\n      expandedPathname\n      categoryAlias\n      depth\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation AddGroceryListItem($groceryListId: ID!, $input: CreateGroceryListItemInput!) {\n    addGroceryListItem(groceryListId: $groceryListId, input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation AddGroceryListItem($groceryListId: ID!, $input: CreateGroceryListItemInput!) {\n    addGroceryListItem(groceryListId: $groceryListId, input: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation UpdateGroceryListItem($groceryListItemId: ID!, $input: CreateGroceryListItemInput!) {\n    updateGroceryListItem(groceryListItemId: $groceryListItemId, input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateGroceryListItem($groceryListItemId: ID!, $input: CreateGroceryListItemInput!) {\n    updateGroceryListItem(groceryListItemId: $groceryListItemId, input: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation DeleteGroceryListItem($groceryListItemId: ID!) {\n    deleteGroceryListItem(groceryListItemId: $groceryListItemId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteGroceryListItem($groceryListItemId: ID!) {\n    deleteGroceryListItem(groceryListItemId: $groceryListItemId) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation MarkGroceryListItem($groceryListItemId: ID!, $completed: Boolean!) {\n    markGroceryListItem(groceryListItemId: $groceryListItemId, completed:$completed) {\n      id\n      completed\n    }\n  }\n"): (typeof documents)["\n  mutation MarkGroceryListItem($groceryListItemId: ID!, $completed: Boolean!) {\n    markGroceryListItem(groceryListItemId: $groceryListItemId, completed:$completed) {\n      id\n      completed\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation AddToList($listId: ID!, $productId: ID!, $stockId: ID) {\n    addToList(listId: $listId, productId: $productId, stockId: $stockId) {\n      id\n      userId\n      listId\n      productId\n      stockId\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation AddToList($listId: ID!, $productId: ID!, $stockId: ID) {\n    addToList(listId: $listId, productId: $productId, stockId: $stockId) {\n      id\n      userId\n      listId\n      productId\n      stockId\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation RemoveFromList($listId: ID!, $productListId: ID!) {\n    removeFromList(listId: $listId, productListId: $productListId) {\n      id\n      userId\n      listId\n      productId\n      stockId\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveFromList($listId: ID!, $productListId: ID!) {\n    removeFromList(listId: $listId, productListId: $productListId) {\n      id\n      userId\n      listId\n      productId\n      stockId\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation RemoveFromListWithProductId($listId: ID!, $productId: ID!, $stockId: ID) {\n    removeFromListWithProductId(listId: $listId, productId: $productId, stockId: $stockId) {\n      id\n      userId\n      listId\n      productId\n      stockId\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveFromListWithProductId($listId: ID!, $productId: ID!, $stockId: ID) {\n    removeFromListWithProductId(listId: $listId, productId: $productId, stockId: $stockId) {\n      id\n      userId\n      listId\n      productId\n      stockId\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation AddBranchToList($listId: ID!, $branchId: ID!) {\n    addBranchToList(listId: $listId, branchId: $branchId) {\n      id\n      userId\n      listId\n      branchId\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation AddBranchToList($listId: ID!, $branchId: ID!) {\n    addBranchToList(listId: $listId, branchId: $branchId) {\n      id\n      userId\n      listId\n      branchId\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation BulkAddBranchesToList($listId: ID!, $branchIds: [ID!]!) {\n    bulkAddBranchesToList(listId: $listId, branchIds: $branchIds) {\n      id\n      userId\n      listId\n      branchId\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation BulkAddBranchesToList($listId: ID!, $branchIds: [ID!]!) {\n    bulkAddBranchesToList(listId: $listId, branchIds: $branchIds) {\n      id\n      userId\n      listId\n      branchId\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation RemoveBranchFromList($listId: ID!, $branchListId: ID!) {\n    removeBranchFromList(listId: $listId, branchListId: $branchListId) {\n      id\n      userId\n      listId\n      branchId\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveBranchFromList($listId: ID!, $branchListId: ID!) {\n    removeBranchFromList(listId: $listId, branchListId: $branchListId) {\n      id\n      userId\n      listId\n      branchId\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation CreatePrice($input: CreatePrice!) {\n    createPrice(input: $input) {\n      id\n      amount\n      currencyCode\n      productId\n      storeId\n      stockId\n      branchId\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePrice($input: CreatePrice!) {\n    createPrice(input: $input) {\n      id\n      amount\n      currencyCode\n      productId\n      storeId\n      stockId\n      branchId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation UpdateProductNutritionData($productId: ID!) {\n    updateProductNutritionData(productId: $productId) {\n      productId\n      openfoodfactsUpdatedAt\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProductNutritionData($productId: ID!) {\n    updateProductNutritionData(productId: $productId) {\n      productId\n      openfoodfactsUpdatedAt\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation CreateProduct($input: CreateProduct!) {\n    createProduct(input: $input) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n      weightValue\n      weightType\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateProduct($input: CreateProduct!) {\n    createProduct(input: $input) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n      weightValue\n      weightType\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation UpdateProduct($id: ID!, $input: UpdateProduct!) {\n    updateProduct(id: $id, input: $input) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n      weightValue\n      weightType\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProduct($id: ID!, $input: UpdateProduct!) {\n    updateProduct(id: $id, input: $input) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n      weightValue\n      weightType\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation ExtractAndCreateProduct($barcode: String!, $base64Image: String!) {\n    extractAndCreateProduct(barcode: $barcode, base64Image: $base64Image) {\n      id\n      code\n      brand\n      name\n      categoryId\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      description\n    }\n  }\n"): (typeof documents)["\n  mutation ExtractAndCreateProduct($barcode: String!, $base64Image: String!) {\n    extractAndCreateProduct(barcode: $barcode, base64Image: $base64Image) {\n      id\n      code\n      brand\n      name\n      categoryId\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation SanitizeProduct($id: ID!) {\n    sanitizeProduct(id: $id) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        categoryAlias\n        expandedPathname\n        path\n      }\n      approximateWeight\n      netWeight\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      createdAt\n      updatedAt\n      views\n    }\n  }\n"): (typeof documents)["\n  mutation SanitizeProduct($id: ID!) {\n    sanitizeProduct(id: $id) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        categoryAlias\n        expandedPathname\n        path\n      }\n      approximateWeight\n      netWeight\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      createdAt\n      updatedAt\n      views\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation AcceptPendingStoreUserInvite($data: String!) {\n    acceptPendingStoreUserInvite(data: $data) {\n      id\n      storeId\n      store {\n        id\n        slug\n        name\n        logo\n      }\n      branchId\n      branch {\n        id\n        slug\n        name\n        address {\n          id\n          fullAddress\n        }\n      }\n      userId\n      user {\n        id\n        name\n        avatar\n      }\n      legalName\n      email\n      employeeId\n      role\n      approvedAt\n      approvedById\n      approvedByUser {\n        id\n        name\n        avatar\n      }\n      approved\n      createdById\n      createdBy {\n        id\n        name\n        avatar\n        active\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation AcceptPendingStoreUserInvite($data: String!) {\n    acceptPendingStoreUserInvite(data: $data) {\n      id\n      storeId\n      store {\n        id\n        slug\n        name\n        logo\n      }\n      branchId\n      branch {\n        id\n        slug\n        name\n        address {\n          id\n          fullAddress\n        }\n      }\n      userId\n      user {\n        id\n        name\n        avatar\n      }\n      legalName\n      email\n      employeeId\n      role\n      approvedAt\n      approvedById\n      approvedByUser {\n        id\n        name\n        avatar\n      }\n      approved\n      createdById\n      createdBy {\n        id\n        name\n        avatar\n        active\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation DeclinePendingStoreUserInvite($data: String!) {\n    declinePendingStoreUserInvite(data: $data)\n  }\n"): (typeof documents)["\n  mutation DeclinePendingStoreUserInvite($data: String!) {\n    declinePendingStoreUserInvite(data: $data)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation CreateStore($input: CreateStore!) {\n    createStore(input: $input) {\n      id\n      name\n      logo\n      website\n    }\n  }\n"): (typeof documents)["\n  mutation CreateStore($input: CreateStore!) {\n    createStore(input: $input) {\n      id\n      name\n      logo\n      website\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation CreateAccount($email: String!, $name: String!, $password: String!) {\n    createAccount(input: { email: $email, name: $name, password: $password }) {\n      id\n      name\n      email\n      phoneNumber\n      createdAt\n      updatedAt\n      authPlatform\n      role\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAccount($email: String!, $name: String!, $password: String!) {\n    createAccount(input: { email: $email, name: $name, password: $password }) {\n      id\n      name\n      email\n      phoneNumber\n      createdAt\n      updatedAt\n      authPlatform\n      role\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation VerifyEmail($verificationCode: String!) {\n    verifyEmail(verificationCode: $verificationCode) {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authPlatform\n      authStateId\n      role\n    }\n  }\n"): (typeof documents)["\n  mutation VerifyEmail($verificationCode: String!) {\n    verifyEmail(verificationCode: $verificationCode) {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authPlatform\n      authStateId\n      role\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation ResendVerification($email: String!) {\n    resendEmailVerificationCode(email: $email)\n  }\n"): (typeof documents)["\n  mutation ResendVerification($email: String!) {\n    resendEmailVerificationCode(email: $email)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation Logout {\n    logout\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation UpdateProfile($input: UpdateUser!) {\n    updateProfile(input: $input) {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authPlatform\n      authStateId\n      role\n      addressId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n      birthDate\n      phoneNumber\n      bio\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProfile($input: UpdateUser!) {\n    updateProfile(input: $input) {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authPlatform\n      authStateId\n      role\n      addressId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n      birthDate\n      phoneNumber\n      bio\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation DeleteMyAccount {\n    deleteMyAccount\n  }\n"): (typeof documents)["\n  mutation DeleteMyAccount {\n    deleteMyAccount\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation RequestResetPassword($email: String!) {\n    requestPasswordReset(email: $email)\n  }\n"): (typeof documents)["\n  mutation RequestResetPassword($email: String!) {\n    requestPasswordReset(email: $email)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation UpdatePasswordWithResetCode($email: String!, $code: String!, $newPassword: String!) {\n    updatePasswordWithResetCode(\n      email: $email\n      code: $code\n      newPassword: $newPassword\n    )\n  }\n"): (typeof documents)["\n  mutation UpdatePasswordWithResetCode($email: String!, $code: String!, $newPassword: String!) {\n    updatePasswordWithResetCode(\n      email: $email\n      code: $code\n      newPassword: $newPassword\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  mutation RegisterExpoPushToken($expoPushToken: String!) {\n    registerExpoPushToken(expoPushToken: $expoPushToken) {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authPlatform\n      authStateId\n      expoPushToken\n      role\n      addressId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RegisterExpoPushToken($expoPushToken: String!) {\n    registerExpoPushToken(expoPushToken: $expoPushToken) {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authPlatform\n      authStateId\n      expoPushToken\n      role\n      addressId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query GetAllUsers($paginator: PaginatorInput!, $filters: UserFilter) {\n    getAllUsers(paginator:$paginator, filters:$filters) {\n      users {\n        id\n        email\n        phoneNumber\n        name\n        avatar\n        birthDate\n        bio\n        active\n        role\n        createdAt\n        updatedAt\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllUsers($paginator: PaginatorInput!, $filters: UserFilter) {\n    getAllUsers(paginator:$paginator, filters:$filters) {\n      users {\n        id\n        email\n        phoneNumber\n        name\n        avatar\n        birthDate\n        bio\n        active\n        role\n        createdAt\n        updatedAt\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query ProductBillingDataByUserId($userId: ID!, $paginator: PaginatorInput!) {\n    productBillingDataByUserId(userId: $userId, paginator: $paginator) {\n      data {\n        id\n        rate\n        userId\n        user {\n          id\n          name\n          avatar\n          active\n        }\n        productId\n        product {\n          id\n          name\n          image\n          brand\n          code\n          category {\n            id\n            name\n            expandedPathname\n            path\n          }\n          createdAt\n          updatedAt\n        }\n        createdAt\n        paidAt\n        billingRateType\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProductBillingDataByUserId($userId: ID!, $paginator: PaginatorInput!) {\n    productBillingDataByUserId(userId: $userId, paginator: $paginator) {\n      data {\n        id\n        rate\n        userId\n        user {\n          id\n          name\n          avatar\n          active\n        }\n        productId\n        product {\n          id\n          name\n          image\n          brand\n          code\n          category {\n            id\n            name\n            expandedPathname\n            path\n          }\n          createdAt\n          updatedAt\n        }\n        createdAt\n        paidAt\n        billingRateType\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query PaginatedAdminAuthSessions($paginator: PaginatorInput!, $filters: UserFilter) {\n    paginatedAdminAuthSessions(paginator: $paginator, filters: $filters) {\n      authSessions {\n        id\n        loggedInAt\n        userId\n        user {\n          id\n          name\n          avatar\n          active\n          createdAt\n          updatedAt\n        }\n        ipAddress\n        platform\n        device\n        expoPushToken\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query PaginatedAdminAuthSessions($paginator: PaginatorInput!, $filters: UserFilter) {\n    paginatedAdminAuthSessions(paginator: $paginator, filters: $filters) {\n      authSessions {\n        id\n        loggedInAt\n        userId\n        user {\n          id\n          name\n          avatar\n          active\n          createdAt\n          updatedAt\n        }\n        ipAddress\n        platform\n        device\n        expoPushToken\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query PaginatedAdminProductViewEntries($paginator: PaginatorInput!) {\n    paginatedAdminProductViewEntries(paginator: $paginator) {\n      productViewEntries {\n        id\n        productId\n        product {\n          id\n          code\n          name\n          image\n        }\n        stockId\n        stock {\n          id\n        }\n        userId\n        user {\n          id\n          name\n          avatar\n          active\n        }\n        origin\n        platform\n        createdAt\n        referrer\n        metadata\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query PaginatedAdminProductViewEntries($paginator: PaginatorInput!) {\n    paginatedAdminProductViewEntries(paginator: $paginator) {\n      productViewEntries {\n        id\n        productId\n        product {\n          id\n          code\n          name\n          image\n        }\n        stockId\n        stock {\n          id\n        }\n        userId\n        user {\n          id\n          name\n          avatar\n          active\n        }\n        origin\n        platform\n        createdAt\n        referrer\n        metadata\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query AllBranches($storeId: ID, $storeSlug: String, $paginator: PaginatorInput!, $search: String, $location: LocationInput) {\n    allBranches(storeId: $storeId, storeSlug: $storeSlug, paginator: $paginator, search: $search, location: $location) {\n      branches {\n        id\n        slug\n        name\n        addressId\n        storeId\n        storeSlug\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n          distance\n        }\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllBranches($storeId: ID, $storeSlug: String, $paginator: PaginatorInput!, $search: String, $location: LocationInput) {\n    allBranches(storeId: $storeId, storeSlug: $storeSlug, paginator: $paginator, search: $search, location: $location) {\n      branches {\n        id\n        slug\n        name\n        addressId\n        storeId\n        storeSlug\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n          distance\n        }\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query Branch($branchId: ID, $branchSlug: String, $storeId: ID, $storeSlug: String) {\n    findBranch(id: $branchId, slug: $branchSlug, storeId: $storeId, storeSlug: $storeSlug) {\n      id\n      slug\n      name\n      addressId\n      storeId\n      storeSlug\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n\n    findStore(id: $storeId, slug: $storeSlug) {\n      id\n      slug\n      name\n      logo\n      website\n    }\n  }\n"): (typeof documents)["\n  query Branch($branchId: ID, $branchSlug: String, $storeId: ID, $storeSlug: String) {\n    findBranch(id: $branchId, slug: $branchSlug, storeId: $storeId, storeSlug: $storeSlug) {\n      id\n      slug\n      name\n      addressId\n      storeId\n      storeSlug\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n\n    findStore(id: $storeId, slug: $storeSlug) {\n      id\n      slug\n      name\n      logo\n      website\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query FindBranch($branchId: ID, $branchSlug: String, $storeId: ID, $storeSlug: String) {\n    findBranch(id: $branchId, slug: $branchSlug, storeId: $storeId, storeSlug: $storeSlug) {\n      id\n      slug\n      name\n      addressId\n      storeId\n      storeSlug\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n"): (typeof documents)["\n  query FindBranch($branchId: ID, $branchSlug: String, $storeId: ID, $storeSlug: String) {\n    findBranch(id: $branchId, slug: $branchSlug, storeId: $storeId, storeSlug: $storeSlug) {\n      id\n      slug\n      name\n      addressId\n      storeId\n      storeSlug\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query FindBranchesByDistance($lat: Float!, $lon: Float!, $radiusMeters: Int!) {\n    findBranchesByDistance(lat: $lat, lon: $lon, radiusMeters: $radiusMeters) {\n      id\n      slug\n      name\n      storeId\n      storeSlug\n      store {\n        id\n        slug\n        name\n        website\n        logo\n      }\n      addressId\n      address {\n        id\n        distance\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n"): (typeof documents)["\n  query FindBranchesByDistance($lat: Float!, $lon: Float!, $radiusMeters: Int!) {\n    findBranchesByDistance(lat: $lat, lon: $lon, radiusMeters: $radiusMeters) {\n      id\n      slug\n      name\n      storeId\n      storeSlug\n      store {\n        id\n        slug\n        name\n        website\n        logo\n      }\n      addressId\n      address {\n        id\n        distance\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query FavoriteBranchesWithPrices($productId: ID!) {\n    getFavoriteBranchesWithPrices(productId: $productId) {\n      id\n      branchId\n      branch {\n        id\n        slug\n        name\n        storeId\n        storeSlug\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        addressId\n        address {\n          id\n          distance\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n      stock {\n        id\n        productId\n        storeId\n        branchId\n        latestPriceId\n        latestPrice {\n          id\n          productId\n          branchId\n          storeId\n          amount\n          currencyCode\n          createdAt\n          sale\n          originalPrice\n          condition\n          expiresAt\n          unitType\n          createdBy {\n            id\n            name\n            avatar\n          }\n        }\n      }\n      approximatePrice\n    }\n  }\n"): (typeof documents)["\n  query FavoriteBranchesWithPrices($productId: ID!) {\n    getFavoriteBranchesWithPrices(productId: $productId) {\n      id\n      branchId\n      branch {\n        id\n        slug\n        name\n        storeId\n        storeSlug\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        addressId\n        address {\n          id\n          distance\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n      stock {\n        id\n        productId\n        storeId\n        branchId\n        latestPriceId\n        latestPrice {\n          id\n          productId\n          branchId\n          storeId\n          amount\n          currencyCode\n          createdAt\n          sale\n          originalPrice\n          condition\n          expiresAt\n          unitType\n          createdBy {\n            id\n            name\n            avatar\n          }\n        }\n      }\n      approximatePrice\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query AllBrands($joinStock: Boolean) {\n    allBrands(joinStock: $joinStock) {\n      brand\n      products\n    }\n  }\n"): (typeof documents)["\n  query AllBrands($joinStock: Boolean) {\n    allBrands(joinStock: $joinStock) {\n      brand\n      products\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query GetCategories($depth: Int, $parentId: ID) {\n    getCategories(depth: $depth, parentId: $parentId) {\n      id\n      name\n      path\n      expandedPathname\n      categoryAlias\n      depth\n    }\n  }\n"): (typeof documents)["\n  query GetCategories($depth: Int, $parentId: ID) {\n    getCategories(depth: $depth, parentId: $parentId) {\n      id\n      name\n      path\n      expandedPathname\n      categoryAlias\n      depth\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query CategorySearch($search: String!, $quickSearchMode: Boolean) {\n    categorySearch(search: $search, quickSearchMode: $quickSearchMode) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query CategorySearch($search: String!, $quickSearchMode: Boolean) {\n    categorySearch(search: $search, quickSearchMode: $quickSearchMode) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query GetCategory($id: ID!) {\n    getCategory(id: $id) {\n      id\n      name\n      path\n      expandedPathname\n      categoryAlias\n    }\n  }\n"): (typeof documents)["\n  query GetCategory($id: ID!) {\n    getCategory(id: $id) {\n      id\n      name\n      path\n      expandedPathname\n      categoryAlias\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query GroceryLists {\n    groceryLists {\n      id\n      name\n      default\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GroceryLists {\n    groceryLists {\n      id\n      name\n      default\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query GroceryListItems($groceryListId: ID!, $filters: GroceryListItemsFilters) {\n    groceryListItems(groceryListId: $groceryListId, filters: $filters) {\n      id\n      groceryListId\n      productId\n      product {\n        id\n        code\n        name\n        image\n        categoryId\n        category {\n          id\n          name\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      category\n      weight\n      quantity\n      unit\n      completed\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GroceryListItems($groceryListId: ID!, $filters: GroceryListItemsFilters) {\n    groceryListItems(groceryListId: $groceryListId, filters: $filters) {\n      id\n      groceryListId\n      productId\n      product {\n        id\n        code\n        name\n        image\n        categoryId\n        category {\n          id\n          name\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      category\n      weight\n      quantity\n      unit\n      completed\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query DefaultGroceryListItems($filters: GroceryListItemsFilters) {\n    defaultGroceryListItems(filters: $filters) {\n      id\n      groceryListId\n      productId\n      product {\n        id\n        code\n        name\n        image\n        categoryId\n        category {\n          id\n          name\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      category\n      weight\n      quantity\n      unit\n      completed\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query DefaultGroceryListItems($filters: GroceryListItemsFilters) {\n    defaultGroceryListItems(filters: $filters) {\n      id\n      groceryListId\n      productId\n      product {\n        id\n        code\n        name\n        image\n        categoryId\n        category {\n          id\n          name\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      category\n      weight\n      quantity\n      unit\n      completed\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query CountGroceryListItems($groceryListId: ID, $includeCompleted: Boolean) {\n    countGroceryListItems(groceryListId: $groceryListId, includeCompleted: $includeCompleted)\n  }\n"): (typeof documents)["\n  query CountGroceryListItems($groceryListId: ID, $includeCompleted: Boolean) {\n    countGroceryListItems(groceryListId: $groceryListId, includeCompleted: $includeCompleted)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query GetAllLists($listType: ListType) {\n    getAllLists(listType: $listType) {\n      id\n      name\n      type\n      userId\n      createdAt\n      productList {\n        id\n        listId\n        productId\n        stockId\n        createdAt\n      }\n      branchList {\n        id\n        listId\n        branchId\n        createdAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllLists($listType: ListType) {\n    getAllLists(listType: $listType) {\n      id\n      name\n      type\n      userId\n      createdAt\n      productList {\n        id\n        listId\n        productId\n        stockId\n        createdAt\n      }\n      branchList {\n        id\n        listId\n        branchId\n        createdAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query GetAllProductListsByListId($listId: ID!) {\n    getAllProductListsByListId(listId: $listId) {\n      id\n      listId\n      userId\n      productId\n      type\n      stockId\n      createdAt\n      product {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n      }\n      stock {\n        id\n        productId\n        storeId\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        branchId\n        branch {\n          id\n          slug\n          name\n          addressId\n          address {\n            id\n            latitude\n            longitude\n            mapsLink\n            fullAddress\n            street\n            city\n            administrativeDivision\n            countryCode\n            country\n            zipCode\n          }\n        }\n        latestPriceId\n        latestPrice {\n          id\n          productId\n          branchId\n          storeId\n          amount\n          currencyCode\n          createdAt\n          sale\n          originalPrice\n          condition\n          expiresAt\n          unitType\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllProductListsByListId($listId: ID!) {\n    getAllProductListsByListId(listId: $listId) {\n      id\n      listId\n      userId\n      productId\n      type\n      stockId\n      createdAt\n      product {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n      }\n      stock {\n        id\n        productId\n        storeId\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        branchId\n        branch {\n          id\n          slug\n          name\n          addressId\n          address {\n            id\n            latitude\n            longitude\n            mapsLink\n            fullAddress\n            street\n            city\n            administrativeDivision\n            countryCode\n            country\n            zipCode\n          }\n        }\n        latestPriceId\n        latestPrice {\n          id\n          productId\n          branchId\n          storeId\n          amount\n          currencyCode\n          createdAt\n          sale\n          originalPrice\n          condition\n          expiresAt\n          unitType\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query GetAllBranchListsByListId($listId: ID!) {\n    getAllBranchListsByListId(listId: $listId) {\n      id\n      listId\n      branchId\n      branch {\n        id\n        slug\n        name\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n        storeId\n        storeSlug\n        store {\n          id\n          slug\n          name\n          logo\n        }\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GetAllBranchListsByListId($listId: ID!) {\n    getAllBranchListsByListId(listId: $listId) {\n      id\n      listId\n      branchId\n      branch {\n        id\n        slug\n        name\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n        storeId\n        storeSlug\n        store {\n          id\n          slug\n          name\n          logo\n        }\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query GetAllCountries {\n    getAllCountries {\n      code\n      name\n      administrativeDivisions {\n        name\n        cities\n      }\n      currency {\n        currencyCode\n        name\n        symbol\n        symbolNative\n        decimals\n        numToBasic\n      }\n      callingCode\n      language\n    }\n  }\n"): (typeof documents)["\n  query GetAllCountries {\n    getAllCountries {\n      code\n      name\n      administrativeDivisions {\n        name\n        cities\n      }\n      currency {\n        currencyCode\n        name\n        symbol\n        symbolNative\n        decimals\n        numToBasic\n      }\n      callingCode\n      language\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query CheckAppVersion($platform: AuthDeviceType!, $version: String!) {\n    checkAppVersion(platform: $platform, version: $version)\n  }\n"): (typeof documents)["\n  query CheckAppVersion($platform: AuthDeviceType!, $version: String!) {\n    checkAppVersion(platform: $platform, version: $version)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query IpToAddress($ipAddress: String!) {\n    ipToAddress(ipAddress: $ipAddress) {\n      id\n      latitude\n      longitude\n      mapsLink\n      fullAddress\n      street\n      city\n      administrativeDivision\n      zipCode\n      countryCode\n      country\n    }\n  }\n"): (typeof documents)["\n  query IpToAddress($ipAddress: String!) {\n    ipToAddress(ipAddress: $ipAddress) {\n      id\n      latitude\n      longitude\n      mapsLink\n      fullAddress\n      street\n      city\n      administrativeDivision\n      zipCode\n      countryCode\n      country\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query PriceChangeHistory($productId: ID!, $stockId: ID!, $paginator: PaginatorInput!, $filters: PriceHistoryFilter) {\n    priceChangeHistory(\n      productId: $productId\n      stockId: $stockId\n      paginator: $paginator\n      filters: $filters\n    ) {\n      prices {\n        id\n        productId\n        stockId\n        branchId\n        storeId\n        amount\n        originalPrice\n        sale\n        expiresAt\n        condition\n        unitType\n        currencyCode\n        createdBy {\n          id\n          name\n          avatar\n        }\n        createdAt\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query PriceChangeHistory($productId: ID!, $stockId: ID!, $paginator: PaginatorInput!, $filters: PriceHistoryFilter) {\n    priceChangeHistory(\n      productId: $productId\n      stockId: $stockId\n      paginator: $paginator\n      filters: $filters\n    ) {\n      prices {\n        id\n        productId\n        stockId\n        branchId\n        storeId\n        amount\n        originalPrice\n        sale\n        expiresAt\n        condition\n        unitType\n        currencyCode\n        createdBy {\n          id\n          name\n          avatar\n        }\n        createdAt\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query GetProductNutritionData($productId: ID!) {\n    getProductNutritionData(productId: $productId) {\n      productId\n      servingSize\n      servingSizeUnit\n      servingSizeValue\n      ingredientText\n      ingredientList\n      nutriments {\n        salt\n        salt100g\n        saltValue\n        saltServing\n        saltUnit\n        sugars\n        sugars100g\n        sugarsValue\n        sugarsServing\n        sugarsUnit\n        iron\n        iron100g\n        ironValue\n        ironServing\n        ironUnit\n        ironLabel\n        calcium\n        calcium100g\n        calciumValue\n        calciumServing\n        calciumUnit\n        calciumLabel\n        cholesterol100g\n        saturatedFat\n        saturatedFat100g\n        saturatedFatValue\n        saturatedFatServing\n        saturatedFatUnit\n        fat\n        fat100g\n        fatValue\n        fatServing\n        fatUnit\n        transFat\n        transFat100g\n        transFatValue\n        transFatServing\n        transFatUnit\n        transFatLabel\n        vitaminA\n        vitaminA100g\n        vitaminAValue\n        vitaminAServing\n        vitaminAUnit\n        vitaminALabel\n        vitaminC\n        vitaminC100g\n        vitaminCValue\n        vitaminCServing\n        vitaminCUnit\n        vitaminCLabel\n        proteins\n        proteins100g\n        proteinsValue\n        proteinsServing\n        proteinsUnit\n        fiber\n        fiber100g\n        fiberValue\n        fiberServing\n        fiberUnit\n        carbohydrates\n        carbohydrates100g\n        carbohydratesValue\n        carbohydratesServing\n        carbohydratesUnit\n        alcohol\n        alcohol100g\n        alcoholValue\n        alcoholServing\n        alcoholUnit\n        sodium\n        sodium100g\n        sodiumValue\n        sodiumServing\n        sodiumUnit\n        potassium100g\n        polyunsaturatedFat100g\n        monounsaturatedFat100g\n        novaGroup\n        novaGroup100g\n        novaGroupServing\n        energy\n        energy100g\n        energyValue\n        energyServing\n        energyUnit\n        energyKcal\n        energyKcal100g\n        energyKcalValue\n        energyKcalServing\n        energyKcalUnit\n        nutritionScoreFr\n        nutritionScoreFr100g\n        nutritionScoreFrServing\n        nutritionScoreUk\n        nutritionScoreUk100g\n        nutritionScoreUkServing\n      }\n      vegan\n      vegetarian\n      glutenFree\n      lactoseFree\n      halal\n      kosher\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetProductNutritionData($productId: ID!) {\n    getProductNutritionData(productId: $productId) {\n      productId\n      servingSize\n      servingSizeUnit\n      servingSizeValue\n      ingredientText\n      ingredientList\n      nutriments {\n        salt\n        salt100g\n        saltValue\n        saltServing\n        saltUnit\n        sugars\n        sugars100g\n        sugarsValue\n        sugarsServing\n        sugarsUnit\n        iron\n        iron100g\n        ironValue\n        ironServing\n        ironUnit\n        ironLabel\n        calcium\n        calcium100g\n        calciumValue\n        calciumServing\n        calciumUnit\n        calciumLabel\n        cholesterol100g\n        saturatedFat\n        saturatedFat100g\n        saturatedFatValue\n        saturatedFatServing\n        saturatedFatUnit\n        fat\n        fat100g\n        fatValue\n        fatServing\n        fatUnit\n        transFat\n        transFat100g\n        transFatValue\n        transFatServing\n        transFatUnit\n        transFatLabel\n        vitaminA\n        vitaminA100g\n        vitaminAValue\n        vitaminAServing\n        vitaminAUnit\n        vitaminALabel\n        vitaminC\n        vitaminC100g\n        vitaminCValue\n        vitaminCServing\n        vitaminCUnit\n        vitaminCLabel\n        proteins\n        proteins100g\n        proteinsValue\n        proteinsServing\n        proteinsUnit\n        fiber\n        fiber100g\n        fiberValue\n        fiberServing\n        fiberUnit\n        carbohydrates\n        carbohydrates100g\n        carbohydratesValue\n        carbohydratesServing\n        carbohydratesUnit\n        alcohol\n        alcohol100g\n        alcoholValue\n        alcoholServing\n        alcoholUnit\n        sodium\n        sodium100g\n        sodiumValue\n        sodiumServing\n        sodiumUnit\n        potassium100g\n        polyunsaturatedFat100g\n        monounsaturatedFat100g\n        novaGroup\n        novaGroup100g\n        novaGroupServing\n        energy\n        energy100g\n        energyValue\n        energyServing\n        energyUnit\n        energyKcal\n        energyKcal100g\n        energyKcalValue\n        energyKcalServing\n        energyKcalUnit\n        nutritionScoreFr\n        nutritionScoreFr100g\n        nutritionScoreFrServing\n        nutritionScoreUk\n        nutritionScoreUk100g\n        nutritionScoreUkServing\n      }\n      vegan\n      vegetarian\n      glutenFree\n      lactoseFree\n      halal\n      kosher\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query BarcodeScan($barcode: String!, $searchMode: Boolean, $location: LocationInput) {\n    barcodeScan(barcode: $barcode, searchMode: $searchMode, location: $location) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n      approximateWeight\n      netWeight\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      createdAt\n      updatedAt\n      stock {\n        id\n        productId\n        storeId\n        branchId\n        latestPriceId\n      }\n    }\n  }\n"): (typeof documents)["\n  query BarcodeScan($barcode: String!, $searchMode: Boolean, $location: LocationInput) {\n    barcodeScan(barcode: $barcode, searchMode: $searchMode, location: $location) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n      approximateWeight\n      netWeight\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      createdAt\n      updatedAt\n      stock {\n        id\n        productId\n        storeId\n        branchId\n        latestPriceId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query Product($productId: ID!, $viewerTrail: ViewerTrailInput) {\n    product(id: $productId, viewerTrail: $viewerTrail) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        categoryAlias\n        expandedPathname\n        path\n      }\n      approximateWeight\n      netWeight\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      createdAt\n      updatedAt\n      views\n      productList {\n        id\n        listId\n        userId\n        productId\n        type\n        stockId\n        createdAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query Product($productId: ID!, $viewerTrail: ViewerTrailInput) {\n    product(id: $productId, viewerTrail: $viewerTrail) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      model\n      categoryId\n      category {\n        id\n        name\n        categoryAlias\n        expandedPathname\n        path\n      }\n      approximateWeight\n      netWeight\n      weightValue\n      weightType\n      quantityValue\n      quantityType\n      createdAt\n      updatedAt\n      views\n      productList {\n        id\n        listId\n        userId\n        productId\n        type\n        stockId\n        createdAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query AllProducts($paginator: PaginatorInput!, $search: ProductSearch) {\n    allProducts(paginator: $paginator, search: $search) {\n      products {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        stock {\n          id\n          productId\n          storeId\n          store {\n            id\n            slug\n            name\n            logo\n          }\n          branchId\n          branch {\n            id\n            slug\n            name\n            addressId\n            address {\n              id\n              latitude\n              longitude\n              mapsLink\n              fullAddress\n              street\n              city\n              administrativeDivision\n              countryCode\n              country\n              zipCode\n              distance\n            }\n          }\n          latestPriceId\n          latestPrice {\n            id\n            productId\n            branchId\n            storeId\n            amount\n            currencyCode\n            createdAt\n            sale\n            originalPrice\n            condition\n            expiresAt\n            unitType\n            createdBy {\n              id\n              name\n              avatar\n            }\n          }\n          createdBy {\n            id\n            name\n            avatar\n          }\n          updatedBy {\n            id\n            name\n            avatar\n          }\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllProducts($paginator: PaginatorInput!, $search: ProductSearch) {\n    allProducts(paginator: $paginator, search: $search) {\n      products {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        stock {\n          id\n          productId\n          storeId\n          store {\n            id\n            slug\n            name\n            logo\n          }\n          branchId\n          branch {\n            id\n            slug\n            name\n            addressId\n            address {\n              id\n              latitude\n              longitude\n              mapsLink\n              fullAddress\n              street\n              city\n              administrativeDivision\n              countryCode\n              country\n              zipCode\n              distance\n            }\n          }\n          latestPriceId\n          latestPrice {\n            id\n            productId\n            branchId\n            storeId\n            amount\n            currencyCode\n            createdAt\n            sale\n            originalPrice\n            condition\n            expiresAt\n            unitType\n            createdBy {\n              id\n              name\n              avatar\n            }\n          }\n          createdBy {\n            id\n            name\n            avatar\n          }\n          updatedBy {\n            id\n            name\n            avatar\n          }\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query BranchesWithProducts($paginator: PaginatorInput!, $productLimit: Int!, $filters: ProductSearch) {\n    branchesWithProducts(\n      paginator: $paginator\n      productLimit: $productLimit\n      filters: $filters\n    ) {\n      branches {\n        id\n        slug\n        name\n        storeId\n        storeSlug\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        addressId\n        address {\n          id\n          distance\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n        products {\n          id\n          name\n          image\n          description\n          brand\n          code\n          model\n          categoryId\n          category {\n            id\n            name\n            expandedPathname\n            path\n          }\n          stock {\n            id\n            productId\n            storeId\n            branchId\n            latestPriceId\n            latestPrice {\n              id\n              productId\n              branchId\n              storeId\n              amount\n              currencyCode\n              createdAt\n              sale\n              originalPrice\n              condition\n              expiresAt\n              unitType\n            }\n            createdBy {\n              id\n              name\n              avatar\n            }\n            updatedBy {\n              id\n              name\n              avatar\n            }\n          }\n          approximateWeight\n          netWeight\n          weightValue\n          weightType\n          quantityValue\n          quantityType\n          createdAt\n          updatedAt\n          views\n        }\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query BranchesWithProducts($paginator: PaginatorInput!, $productLimit: Int!, $filters: ProductSearch) {\n    branchesWithProducts(\n      paginator: $paginator\n      productLimit: $productLimit\n      filters: $filters\n    ) {\n      branches {\n        id\n        slug\n        name\n        storeId\n        storeSlug\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        addressId\n        address {\n          id\n          distance\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n        products {\n          id\n          name\n          image\n          description\n          brand\n          code\n          model\n          categoryId\n          category {\n            id\n            name\n            expandedPathname\n            path\n          }\n          stock {\n            id\n            productId\n            storeId\n            branchId\n            latestPriceId\n            latestPrice {\n              id\n              productId\n              branchId\n              storeId\n              amount\n              currencyCode\n              createdAt\n              sale\n              originalPrice\n              condition\n              expiresAt\n              unitType\n            }\n            createdBy {\n              id\n              name\n              avatar\n            }\n            updatedBy {\n              id\n              name\n              avatar\n            }\n          }\n          approximateWeight\n          netWeight\n          weightValue\n          weightType\n          quantityValue\n          quantityType\n          createdAt\n          updatedAt\n          views\n        }\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query ProductSummary($productId: ID!, $stockId: ID, $branch: ProductSummaryBranchInput) {\n    productSummary(id: $productId, stockId: $stockId, branch: $branch) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      stockId\n      store\n      storeId\n      storeLogo\n      storeSlug\n      branch\n      branchId\n      branchSlug\n      address\n      price\n      priceCurrencyCode\n      originalPrice\n      sale\n      saleExpiresAt\n      priceCreatedAt\n    }\n  }\n"): (typeof documents)["\n  query ProductSummary($productId: ID!, $stockId: ID, $branch: ProductSummaryBranchInput) {\n    productSummary(id: $productId, stockId: $stockId, branch: $branch) {\n      id\n      name\n      image\n      description\n      brand\n      code\n      stockId\n      store\n      storeId\n      storeLogo\n      storeSlug\n      branch\n      branchId\n      branchSlug\n      address\n      price\n      priceCurrencyCode\n      originalPrice\n      sale\n      saleExpiresAt\n      priceCreatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query ProductSearch($paginator: PaginatorInput!, $search: String, $filters: ProductSearchFilters) {\n    productSearch(paginator: $paginator, search: $search, filters: $filters) {\n      products {\n        id\n        code\n        brand\n        name\n        category {\n          id\n          name\n          expandedPathname\n        }\n        quantityValue\n        quantityType\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        createdAt\n        updatedAt\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProductSearch($paginator: PaginatorInput!, $search: String, $filters: ProductSearchFilters) {\n    productSearch(paginator: $paginator, search: $search, filters: $filters) {\n      products {\n        id\n        code\n        brand\n        name\n        category {\n          id\n          name\n          expandedPathname\n        }\n        quantityValue\n        quantityType\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        createdAt\n        updatedAt\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query ExtractProductFields($base64Image: String!) {\n    extractProductFields(base64Image: $base64Image) {\n      brand\n      name\n      description\n      netWeight\n      weight\n      quantity\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n    }\n  }\n"): (typeof documents)["\n  query ExtractProductFields($base64Image: String!) {\n    extractProductFields(base64Image: $base64Image) {\n      brand\n      name\n      description\n      netWeight\n      weight\n      quantity\n      categoryId\n      category {\n        id\n        name\n        expandedPathname\n        path\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query MyProductViewHistory($paginator: PaginatorInput!) {\n    myProductViewHistory(paginator: $paginator) {\n      products {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        stock {\n          id\n          productId\n          storeId\n          store {\n            id\n            slug\n            name\n            logo\n          }\n          branchId\n          branch {\n            id\n            slug\n            name\n            addressId\n            address {\n              id\n              latitude\n              longitude\n              mapsLink\n              fullAddress\n              street\n              city\n              administrativeDivision\n              countryCode\n              country\n              zipCode\n              distance\n            }\n          }\n          latestPriceId\n          latestPrice {\n            id\n            productId\n            branchId\n            storeId\n            amount\n            currencyCode\n            createdAt\n            sale\n            originalPrice\n            condition\n            expiresAt\n            unitType\n          }\n          createdBy {\n            id\n            name\n            avatar\n          }\n          updatedBy {\n            id\n            name\n            avatar\n          }\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyProductViewHistory($paginator: PaginatorInput!) {\n    myProductViewHistory(paginator: $paginator) {\n      products {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        stock {\n          id\n          productId\n          storeId\n          store {\n            id\n            slug\n            name\n            logo\n          }\n          branchId\n          branch {\n            id\n            slug\n            name\n            addressId\n            address {\n              id\n              latitude\n              longitude\n              mapsLink\n              fullAddress\n              street\n              city\n              administrativeDivision\n              countryCode\n              country\n              zipCode\n              distance\n            }\n          }\n          latestPriceId\n          latestPrice {\n            id\n            productId\n            branchId\n            storeId\n            amount\n            currencyCode\n            createdAt\n            sale\n            originalPrice\n            condition\n            expiresAt\n            unitType\n          }\n          createdBy {\n            id\n            name\n            avatar\n          }\n          updatedBy {\n            id\n            name\n            avatar\n          }\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query PopularProducts($paginator: PaginatorInput!, $dateRange: TimestampRangeBetween) {\n    popularProducts(paginator: $paginator, dateRange: $dateRange) {\n      products {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        stock {\n          id\n          productId\n          storeId\n          store {\n            id\n            slug\n            name\n            logo\n          }\n          branchId\n          branch {\n            id\n            slug\n            name\n            addressId\n            address {\n              id\n              latitude\n              longitude\n              mapsLink\n              fullAddress\n              street\n              city\n              administrativeDivision\n              countryCode\n              country\n              zipCode\n              distance\n            }\n          }\n          latestPriceId\n          latestPrice {\n            id\n            productId\n            branchId\n            storeId\n            amount\n            currencyCode\n            createdAt\n            sale\n            originalPrice\n            condition\n            expiresAt\n            unitType\n          }\n          createdBy {\n            id\n            name\n            avatar\n          }\n          updatedBy {\n            id\n            name\n            avatar\n          }\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query PopularProducts($paginator: PaginatorInput!, $dateRange: TimestampRangeBetween) {\n    popularProducts(paginator: $paginator, dateRange: $dateRange) {\n      products {\n        id\n        name\n        image\n        description\n        brand\n        code\n        model\n        categoryId\n        category {\n          id\n          name\n          expandedPathname\n          path\n        }\n        stock {\n          id\n          productId\n          storeId\n          store {\n            id\n            slug\n            name\n            logo\n          }\n          branchId\n          branch {\n            id\n            slug\n            name\n            addressId\n            address {\n              id\n              latitude\n              longitude\n              mapsLink\n              fullAddress\n              street\n              city\n              administrativeDivision\n              countryCode\n              country\n              zipCode\n              distance\n            }\n          }\n          latestPriceId\n          latestPrice {\n            id\n            productId\n            branchId\n            storeId\n            amount\n            currencyCode\n            createdAt\n            sale\n            originalPrice\n            condition\n            expiresAt\n            unitType\n          }\n          createdBy {\n            id\n            name\n            avatar\n          }\n          updatedBy {\n            id\n            name\n            avatar\n          }\n        }\n        approximateWeight\n        netWeight\n        weightValue\n        weightType\n        quantityValue\n        quantityType\n        createdAt\n        updatedAt\n        views\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query WeightComponentsFromCategoryId($categoryId: ID!) {\n    weightComponentsFromCategoryId(categoryId: $categoryId) {\n      weightValue\n      weightType\n    }\n  }\n"): (typeof documents)["\n  query WeightComponentsFromCategoryId($categoryId: ID!) {\n    weightComponentsFromCategoryId(categoryId: $categoryId) {\n      weightValue\n      weightType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query MySearchHistory($paginator: PaginatorInput!) {\n    mySearchHistory(paginator:$paginator) {\n      searches {\n        id\n        searchTerm\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query MySearchHistory($paginator: PaginatorInput!) {\n    mySearchHistory(paginator:$paginator) {\n      searches {\n        id\n        searchTerm\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query PopularSearchKeywords($paginator: PaginatorInput!, $dateRange: TimestampRangeBetween) {\n    popularSearchKeywords(paginator:$paginator, dateRange: $dateRange) {\n      searches\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }  \n"): (typeof documents)["\n  query PopularSearchKeywords($paginator: PaginatorInput!, $dateRange: TimestampRangeBetween) {\n    popularSearchKeywords(paginator:$paginator, dateRange: $dateRange) {\n      searches\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query SearchKeywords($search: String!) {\n    searchKeywords(search: $search)\n  }\n"): (typeof documents)["\n  query SearchKeywords($search: String!) {\n    searchKeywords(search: $search)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query Stock($stockId: ID!) {\n    stock(stockId: $stockId) {\n      id\n      productId\n      storeId\n      store {\n        slug\n        id\n        name\n        logo\n      }\n      branchId\n      branch {\n        id\n        slug\n        name\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n          distance\n        }\n      }\n      latestPriceId\n      latestPrice {\n        id\n        productId\n        branchId\n        storeId\n        amount\n        currencyCode\n        sale\n        originalPrice\n        condition\n        expiresAt\n        createdAt\n        unitType\n      }\n      createdAt\n      updatedAt\n      createdBy {\n        id\n        name\n        avatar\n      }\n      updatedBy {\n        id\n        name\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  query Stock($stockId: ID!) {\n    stock(stockId: $stockId) {\n      id\n      productId\n      storeId\n      store {\n        slug\n        id\n        name\n        logo\n      }\n      branchId\n      branch {\n        id\n        slug\n        name\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n          distance\n        }\n      }\n      latestPriceId\n      latestPrice {\n        id\n        productId\n        branchId\n        storeId\n        amount\n        currencyCode\n        sale\n        originalPrice\n        condition\n        expiresAt\n        createdAt\n        unitType\n      }\n      createdAt\n      updatedAt\n      createdBy {\n        id\n        name\n        avatar\n      }\n      updatedBy {\n        id\n        name\n        avatar\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query GetStockFromProductAndBranchId($productId: ID!, $branchId: ID!) {\n    getStockFromProductAndBranchId(productId: $productId, branchId: $branchId) {\n      id\n      productId\n      storeId\n      branchId\n      latestPriceId\n      latestPrice {\n        id\n        productId\n        branchId\n        storeId\n        amount\n        currencyCode\n        sale\n        originalPrice\n        condition\n        expiresAt\n        createdAt\n        unitType\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetStockFromProductAndBranchId($productId: ID!, $branchId: ID!) {\n    getStockFromProductAndBranchId(productId: $productId, branchId: $branchId) {\n      id\n      productId\n      storeId\n      branchId\n      latestPriceId\n      latestPrice {\n        id\n        productId\n        branchId\n        storeId\n        amount\n        currencyCode\n        sale\n        originalPrice\n        condition\n        expiresAt\n        createdAt\n        unitType\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query GetProductStocks($paginator: PaginatorInput!, $productId: ID!, $location: LocationInput) {\n    getProductStocks(paginator: $paginator, productId: $productId, location: $location) {\n      stocks {\n        id\n        productId\n        storeId\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        branchId\n        branch {\n          id\n          slug\n          name\n          address {\n            id\n            latitude\n            longitude\n            mapsLink\n            fullAddress\n            street\n            city\n            administrativeDivision\n            countryCode\n            country\n            zipCode\n            distance\n          }\n        }\n        latestPriceId\n        latestPrice {\n          id\n          productId\n          branchId\n          storeId\n          amount\n          currencyCode\n          sale\n          originalPrice\n          condition\n          expiresAt\n          unitType\n        }\n        createdAt\n        updatedAt\n        createdBy {\n          id\n          name\n          avatar\n        }\n        updatedBy {\n          id\n          name\n          avatar\n        }\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProductStocks($paginator: PaginatorInput!, $productId: ID!, $location: LocationInput) {\n    getProductStocks(paginator: $paginator, productId: $productId, location: $location) {\n      stocks {\n        id\n        productId\n        storeId\n        store {\n          id\n          slug\n          name\n          logo\n        }\n        branchId\n        branch {\n          id\n          slug\n          name\n          address {\n            id\n            latitude\n            longitude\n            mapsLink\n            fullAddress\n            street\n            city\n            administrativeDivision\n            countryCode\n            country\n            zipCode\n            distance\n          }\n        }\n        latestPriceId\n        latestPrice {\n          id\n          productId\n          branchId\n          storeId\n          amount\n          currencyCode\n          sale\n          originalPrice\n          condition\n          expiresAt\n          unitType\n        }\n        createdAt\n        updatedAt\n        createdBy {\n          id\n          name\n          avatar\n        }\n        updatedBy {\n          id\n          name\n          avatar\n        }\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query MyStoreUser {\n    myStoreUsers {\n      id\n      storeId\n      store {\n        id\n        slug\n        name\n        logo\n      }\n      branchId\n      branch {\n        id\n        slug\n        name\n        address {\n          id\n          fullAddress\n        }\n      }\n      userId\n      user {\n        id\n        name\n        avatar\n      }\n      legalName\n      email\n      employeeId\n      role\n      approvedAt\n      approvedById\n      approvedByUser {\n        id\n        name\n        avatar\n      }\n      approved\n      createdById\n      createdBy {\n        id\n        name\n        avatar\n        active\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query MyStoreUser {\n    myStoreUsers {\n      id\n      storeId\n      store {\n        id\n        slug\n        name\n        logo\n      }\n      branchId\n      branch {\n        id\n        slug\n        name\n        address {\n          id\n          fullAddress\n        }\n      }\n      userId\n      user {\n        id\n        name\n        avatar\n      }\n      legalName\n      email\n      employeeId\n      role\n      approvedAt\n      approvedById\n      approvedByUser {\n        id\n        name\n        avatar\n      }\n      approved\n      createdById\n      createdBy {\n        id\n        name\n        avatar\n        active\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query AllStores($paginator: PaginatorInput!, $search: String) {\n    allStores(paginator: $paginator, search: $search) {\n      stores {\n        id\n        slug\n        name\n        logo\n        website\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllStores($paginator: PaginatorInput!, $search: String) {\n    allStores(paginator: $paginator, search: $search) {\n      stores {\n        id\n        slug\n        name\n        logo\n        website\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query FindStore($storeId: ID, $storeSlug: String) {\n    findStore(id: $storeId, slug: $storeSlug) {\n      id\n      slug\n      name\n      logo\n      website\n    }\n  }\n"): (typeof documents)["\n  query FindStore($storeId: ID, $storeSlug: String) {\n    findStore(id: $storeId, slug: $storeSlug) {\n      id\n      slug\n      name\n      logo\n      website\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  fragment UserFields on User {\n    id\n    name\n    email\n    avatar\n    createdAt\n    updatedAt\n    active\n    authDevice\n    authPlatform\n    authStateId\n    role\n  }\n"): (typeof documents)["\n  fragment UserFields on User {\n    id\n    name\n    email\n    avatar\n    createdAt\n    updatedAt\n    active\n    authDevice\n    authPlatform\n    authStateId\n    role\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query LoginInternal(\n    $email: String!\n    $password: String!\n    $ipAddress: String\n    $device: AuthDeviceType\n  ) {\n    login(email: $email, password: $password, ipAddress: $ipAddress, device: $device) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authDevice\n        authPlatform\n        authStateId\n        expoPushToken\n        role\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query LoginInternal(\n    $email: String!\n    $password: String!\n    $ipAddress: String\n    $device: AuthDeviceType\n  ) {\n    login(email: $email, password: $password, ipAddress: $ipAddress, device: $device) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authDevice\n        authPlatform\n        authStateId\n        expoPushToken\n        role\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query GoogleOAuth($accessToken: String!, $ipAddress: String, $device: AuthDeviceType) {\n    googleOAuth(accessToken: $accessToken, ipAddress: $ipAddress, device: $device) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authDevice\n        authPlatform\n        authStateId\n        expoPushToken\n        role\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n      isNewUser\n    }\n  }\n"): (typeof documents)["\n  query GoogleOAuth($accessToken: String!, $ipAddress: String, $device: AuthDeviceType) {\n    googleOAuth(accessToken: $accessToken, ipAddress: $ipAddress, device: $device) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authDevice\n        authPlatform\n        authStateId\n        expoPushToken\n        role\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n      isNewUser\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query AppleOAuth(\n    $code: String!\n    $appleRawUser: String\n    $ipAddress: String\n    $device: AuthDeviceType\n  ) {\n    appleOAuth(\n      code: $code\n      appleRawUser: $appleRawUser\n      ipAddress: $ipAddress\n      device: $device\n    ) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authDevice\n        authPlatform\n        authStateId\n        expoPushToken\n        role\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n      isNewUser\n    }\n  }\n"): (typeof documents)["\n  query AppleOAuth(\n    $code: String!\n    $appleRawUser: String\n    $ipAddress: String\n    $device: AuthDeviceType\n  ) {\n    appleOAuth(\n      code: $code\n      appleRawUser: $appleRawUser\n      ipAddress: $ipAddress\n      device: $device\n    ) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authDevice\n        authPlatform\n        authStateId\n        expoPushToken\n        role\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n      isNewUser\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query YahooOAuth($code: String!, $codeVerifier: String, $ipAddress: String, $device: AuthDeviceType) {\n    yahooOAuth(code: $code, codeVerifier: $codeVerifier, ipAddress: $ipAddress, device: $device) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authDevice\n        authPlatform\n        authStateId\n        expoPushToken\n        role\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n      isNewUser\n    }\n  }\n"): (typeof documents)["\n  query YahooOAuth($code: String!, $codeVerifier: String, $ipAddress: String, $device: AuthDeviceType) {\n    yahooOAuth(code: $code, codeVerifier: $codeVerifier, ipAddress: $ipAddress, device: $device) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authDevice\n        authPlatform\n        authStateId\n        expoPushToken\n        role\n        addressId\n        address {\n          id\n          latitude\n          longitude\n          mapsLink\n          fullAddress\n          street\n          city\n          administrativeDivision\n          countryCode\n          country\n          zipCode\n        }\n      }\n      isNewUser\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query VerifyPasswordResetCode($email: String!, $code: String!) {\n    verifyPasswordResetCode(email: $email, code: $code)\n  }\n"): (typeof documents)["\n  query VerifyPasswordResetCode($email: String!, $code: String!) {\n    verifyPasswordResetCode(email: $email, code: $code)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query Me {\n    me {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authDevice\n      authPlatform\n      authStateId\n      expoPushToken\n      role\n      addressId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n      birthDate\n      phoneNumber\n      bio\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authDevice\n      authPlatform\n      authStateId\n      expoPushToken\n      role\n      addressId\n      address {\n        id\n        latitude\n        longitude\n        mapsLink\n        fullAddress\n        street\n        city\n        administrativeDivision\n        countryCode\n        country\n        zipCode\n      }\n      birthDate\n      phoneNumber\n      bio\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query MyProductBillingData($paginator: PaginatorInput!) {\n    myProductBillingData(paginator: $paginator) {\n      data {\n        id\n        rate\n        userId\n        user {\n          id\n          name\n          avatar\n          active\n        }\n        productId\n        product {\n          id\n          name\n          image\n          brand\n          code\n          category {\n            id\n            name\n            expandedPathname\n            path\n          }\n          createdAt\n          updatedAt\n        }\n        createdAt\n        paidAt\n        billingRateType\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyProductBillingData($paginator: PaginatorInput!) {\n    myProductBillingData(paginator: $paginator) {\n      data {\n        id\n        rate\n        userId\n        user {\n          id\n          name\n          avatar\n          active\n        }\n        productId\n        product {\n          id\n          name\n          image\n          brand\n          code\n          category {\n            id\n            name\n            expandedPathname\n            path\n          }\n          createdAt\n          updatedAt\n        }\n        createdAt\n        paidAt\n        billingRateType\n      }\n      paginator {\n        next\n        page\n        prev\n        limit\n        total\n        numPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query PostAuthUserData($listType: ListType) {\n    getAllLists(listType: $listType) {\n      id\n      name\n      type\n      userId\n      createdAt\n      productList {\n        id\n        listId\n        productId\n        stockId\n        createdAt\n      }\n      branchList {\n        id\n        listId\n        branchId\n        createdAt\n      }\n    }\n\n    groceryLists {\n      id\n      name\n      default\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query PostAuthUserData($listType: ListType) {\n    getAllLists(listType: $listType) {\n      id\n      name\n      type\n      userId\n      createdAt\n      productList {\n        id\n        listId\n        productId\n        stockId\n        createdAt\n      }\n      branchList {\n        id\n        listId\n        branchId\n        createdAt\n      }\n    }\n\n    groceryLists {\n      id\n      name\n      default\n      createdAt\n    }\n  }\n"];
type DocumentType<TDocumentNode extends TypedDocumentNode<any, any>> = TDocumentNode extends TypedDocumentNode<infer TType, any> ? TType : never;

declare const GET_ALL_USERS_QUERY: graphql$1.DocumentNode;
declare const PRODUCT_BILLING_DATA_BY_USER_ID_QUERY: graphql$1.DocumentNode;
declare const PAGINATED_ADMIN_AUTH_SESSIONS_QUERY: graphql$1.DocumentNode;
declare const PAGINATED_ADMIN_PRODUCT_VIEW_ENTRIES: graphql$1.DocumentNode;

declare const ALL_BRANCHES_QUERY: graphql$1.DocumentNode;
declare const BRANCH_QUERY: graphql$1.DocumentNode;
declare const FIND_BRANCH_QUERY: graphql$1.DocumentNode;
declare const FIND_BRANCHES_BY_DISTANCE_QUERY: graphql$1.DocumentNode;
declare const GET_FAVORITE_BRANCHES_WITH_PRICE_DATA_QUERY: graphql$1.DocumentNode;

declare const ALL_BRANDS_QUERY: graphql$1.DocumentNode;

declare const GET_CATEGORIES_QUERY: graphql$1.DocumentNode;
declare const CATEGORY_SEARCH_QUERY: graphql$1.DocumentNode;
declare const GET_CATEGORY_QUERY: graphql$1.DocumentNode;

declare const GROCERY_LISTS_QUERY: graphql$1.DocumentNode;
declare const GET_GROCERY_LIST_ITEMS_QUERY: graphql$1.DocumentNode;
declare const DEFAULT_GROCERY_LIST_ITEMS_QUERY: graphql$1.DocumentNode;
declare const COUNT_GROCERY_LIST_ITEMS_QUERY: graphql$1.DocumentNode;

declare const GET_ALL_LISTS: graphql$1.DocumentNode;
declare const GET_ALL_PRODUCT_LISTS_BY_LIST_ID: graphql$1.DocumentNode;
declare const GET_ALL_BRANCH_LISTS_BY_LIST_ID: graphql$1.DocumentNode;

declare const GET_ALL_COUNTRIES_QUERY: graphql$1.DocumentNode;
declare const CHECK_APP_VERSION_QUERY: graphql$1.DocumentNode;
declare const IP_TO_ADDRESS_QUERY: graphql$1.DocumentNode;

declare const PRICE_CHANGE_HISTORY_QUERY: graphql$1.DocumentNode;

declare const GET_PRODUCT_NUTRITION_DATA_QUERY: graphql$1.DocumentNode;

declare const BARCODE_SCAN_QUERY: graphql$1.DocumentNode;
declare const PRODUCT_BY_ID_QUERY: graphql$1.DocumentNode;
declare const ALL_PRODUCTS_QUERY: graphql$1.DocumentNode;
declare const BRANCHES_WITH_PRODUCTS_QUERY: graphql$1.DocumentNode;
declare const PRODUCT_SUMMARY_QUERY: graphql$1.DocumentNode;
declare const PRODUCT_SEARCH_QUERY: graphql$1.DocumentNode;
declare const EXTRACT_PRODUCT_FIELDS_QUERY: graphql$1.DocumentNode;
declare const MY_PRODUCT_VIEW_HISTORY_QUERY: graphql$1.DocumentNode;
declare const POPULAR_PRODUCTS_QUERY: graphql$1.DocumentNode;
declare const WEIGHT_COMPONENTS_FROM_CATEGORY_ID_QUERY: graphql$1.DocumentNode;

declare const MY_SEARCH_HISTORY_QUERY: graphql$1.DocumentNode;
declare const POPULAR_SEARCH_KEYWORDS_QUERY: graphql$1.DocumentNode;
declare const SEARCH_KEYWORDS_QUERY: graphql$1.DocumentNode;

declare const GET_STOCK_BY_ID: graphql$1.DocumentNode;
declare const GET_STOCK_FROM_PRODUCT_AND_BRANCH_ID_QUERY: graphql$1.DocumentNode;
declare const GET_PRODUCT_STOCKS_QUERY: graphql$1.DocumentNode;

declare const ALL_STORES_QUERY: graphql$1.DocumentNode;
declare const FIND_STORE_QUERY: graphql$1.DocumentNode;

declare const UserFragment: graphql$1.DocumentNode;
declare const LOGIN_INTERNAL_QUERY: graphql$1.DocumentNode;
declare const GOOGLE_OAUTH_QUERY: graphql$1.DocumentNode;
declare const APPLE_OAUTH_QUERY: graphql$1.DocumentNode;
declare const YAHOO_OAUTH_QUERY: graphql$1.DocumentNode;
declare const VERIFY_PASSWORD_RESET_CODE_QUERY: graphql$1.DocumentNode;
declare const ME_QUERY: graphql$1.DocumentNode;
declare const MY_PRODUCT_BILLING_DATA_QUERY: graphql$1.DocumentNode;
declare const POST_AUTH_USER_DATA_QUERIES: graphql$1.DocumentNode;

declare const UPDATE_USER_BY_ID_MUTATION: graphql$1.DocumentNode;
declare const CREATE_STORE_USER_ADMIN: graphql$1.DocumentNode;
declare const ADMIN_REMOVE_AUTH_SESSION_MUTATION: graphql$1.DocumentNode;

declare const CREATE_BRANCH_WITH_FULL_ADDRESS_MUTATION: graphql$1.DocumentNode;
declare const CREATE_BRANCH_MUTATION: graphql$1.DocumentNode;

declare const CREATE_CATEGORY_MUTATION: graphql$1.DocumentNode;

declare const ADD_GROCERY_LIST_ITEMS_MUTATION: graphql$1.DocumentNode;
declare const UPDATE_GROCERY_LIST_ITEMS_MUTATION: graphql$1.DocumentNode;
declare const DELETE_GROCERY_LIST_ITEMS_MUTATION: graphql$1.DocumentNode;
declare const MARK_GROCERY_ITEM_MUTATION: graphql$1.DocumentNode;

declare const ADD_TO_LIST_MUTATION: graphql$1.DocumentNode;
declare const REMOVE_FROM_LIST_MUTATION: graphql$1.DocumentNode;
declare const REMOVE_FROM_LIST_BY_PRODUCT_ID_MUTATION: graphql$1.DocumentNode;
declare const ADD_BRANCH_TO_LIST_MUTATION: graphql$1.DocumentNode;
declare const BULK_ADD_BRANCHES_TO_LIST_MUTATION: graphql$1.DocumentNode;
declare const REMOVE_BRANCH_FROM_LIST_MUTATION: graphql$1.DocumentNode;

declare const CREATE_PRICE_MUTATION: graphql$1.DocumentNode;

declare const UPDATE_PRODUCT_NUTRITION_MUTATION: graphql$1.DocumentNode;

declare const CREATE_PRODUCT_MUTATION: graphql$1.DocumentNode;
declare const UPDATE_PRODUCT_MUTATION: graphql$1.DocumentNode;
declare const EXTRACT_AND_CREATE_PRODUCT_FIELDS_QUERY: graphql$1.DocumentNode;
declare const SANITIZE_PRODUCT_MUTATION: graphql$1.DocumentNode;

declare const CREATE_STORE_MUTATION: graphql$1.DocumentNode;

declare const CREATE_USER_MUTATION: graphql$1.DocumentNode;
declare const VERIFY_EMAIL_MUTATION: graphql$1.DocumentNode;
declare const RESEND_VERIFICATION_MUTATION: graphql$1.DocumentNode;
declare const LOGOUT_MUTATION: graphql$1.DocumentNode;
declare const UPDATE_PROFILE_MUTATION: graphql$1.DocumentNode;
declare const DELETE_MY_ACCOUNT_MUTATION: graphql$1.DocumentNode;
declare const REQUEST_RESET_PASSWORD_MUTATION: graphql$1.DocumentNode;
declare const UPDATE_PASSWORD_WITH_RESET_CODE_MUTATION: graphql$1.DocumentNode;
declare const REGISTER_EXPO_PUSH_TOKEN: graphql$1.DocumentNode;

export { ADD_BRANCH_TO_LIST_MUTATION, ADD_GROCERY_LIST_ITEMS_MUTATION, ADD_TO_LIST_MUTATION, ADMIN_REMOVE_AUTH_SESSION_MUTATION, ALL_BRANCHES_QUERY, ALL_BRANDS_QUERY, ALL_PRODUCTS_QUERY, ALL_STORES_QUERY, APPLE_OAUTH_QUERY, AcceptPendingStoreUserInviteDocument, type AcceptPendingStoreUserInviteMutation, type AcceptPendingStoreUserInviteMutationVariables, AddBranchToListDocument, type AddBranchToListMutation, type AddBranchToListMutationVariables, AddGroceryListItemDocument, type AddGroceryListItemMutation, type AddGroceryListItemMutationVariables, AddToListDocument, type AddToListMutation, type AddToListMutationVariables, type Address, AdminRemoveAuthSessionDocument, type AdminRemoveAuthSessionMutation, type AdminRemoveAuthSessionMutationVariables, type AdministrativeDivision, AllBranchesDocument, type AllBranchesQuery, type AllBranchesQueryVariables, AllBrandsDocument, type AllBrandsQuery, type AllBrandsQueryVariables, AllProductsDocument, type AllProductsQuery, type AllProductsQueryVariables, AllStoresDocument, type AllStoresQuery, type AllStoresQueryVariables, AppleOAuthDocument, type AppleOAuthQuery, type AppleOAuthQueryVariables, type ApprovedByUser, type Auth, AuthDeviceType, AuthPlatformType, type AuthSession, BARCODE_SCAN_QUERY, BRANCHES_WITH_PRODUCTS_QUERY, BRANCH_QUERY, BULK_ADD_BRANCHES_TO_LIST_MUTATION, BarcodeScanDocument, type BarcodeScanQuery, type BarcodeScanQueryVariables, type Branch, BranchDocument, type BranchFlat, type BranchList, type BranchListWithPrices, type BranchQuery, type BranchQueryVariables, BranchesWithProductsDocument, type BranchesWithProductsQuery, type BranchesWithProductsQueryVariables, type Brand, BulkAddBranchesToListDocument, type BulkAddBranchesToListMutation, type BulkAddBranchesToListMutationVariables, CATEGORY_SEARCH_QUERY, CHECK_APP_VERSION_QUERY, COUNT_GROCERY_LIST_ITEMS_QUERY, CREATE_BRANCH_MUTATION, CREATE_BRANCH_WITH_FULL_ADDRESS_MUTATION, CREATE_CATEGORY_MUTATION, CREATE_PRICE_MUTATION, CREATE_PRODUCT_MUTATION, CREATE_STORE_MUTATION, CREATE_STORE_USER_ADMIN, CREATE_USER_MUTATION, type Category, CategorySearchDocument, type CategorySearchQuery, type CategorySearchQueryVariables, CheckAppVersionDocument, type CheckAppVersionQuery, type CheckAppVersionQueryVariables, CountGroceryListItemsDocument, type CountGroceryListItemsQuery, type CountGroceryListItemsQueryVariables, type Country, CreateAccountDocument, type CreateAccountInput, type CreateAccountMutation, type CreateAccountMutationVariables, type CreateAddress, type CreateBranch, CreateBranchDocument, CreateBranchFromFullAddressDocument, type CreateBranchFromFullAddressMutation, type CreateBranchFromFullAddressMutationVariables, type CreateBranchMutation, type CreateBranchMutationVariables, type CreateCategory, CreateCategoryDocument, type CreateCategoryMutation, type CreateCategoryMutationVariables, type CreateGroceryListInput, type CreateGroceryListItemInput, type CreatePrice, CreatePriceDocument, type CreatePriceMutation, type CreatePriceMutationVariables, type CreateProduct, CreateProductDocument, type CreateProductMutation, type CreateProductMutationVariables, type CreateStock, type CreateStore, CreateStoreDocument, type CreateStoreMutation, type CreateStoreMutationVariables, type CreateStoreUserAdmin, CreateStoreUserAdminDocument, type CreateStoreUserAdminMutation, type CreateStoreUserAdminMutationVariables, type CreatedByUser, type Currency, DEFAULT_GROCERY_LIST_ITEMS_QUERY, DELETE_GROCERY_LIST_ITEMS_MUTATION, DELETE_MY_ACCOUNT_MUTATION, DeclinePendingStoreUserInviteDocument, type DeclinePendingStoreUserInviteMutation, type DeclinePendingStoreUserInviteMutationVariables, DefaultGroceryListItemsDocument, type DefaultGroceryListItemsQuery, type DefaultGroceryListItemsQueryVariables, DeleteGroceryListItemDocument, type DeleteGroceryListItemMutation, type DeleteGroceryListItemMutationVariables, DeleteMyAccountDocument, type DeleteMyAccountMutation, type DeleteMyAccountMutationVariables, type DocumentType, EXTRACT_AND_CREATE_PRODUCT_FIELDS_QUERY, EXTRACT_PRODUCT_FIELDS_QUERY, type Exact, ExtractAndCreateProductDocument, type ExtractAndCreateProductMutation, type ExtractAndCreateProductMutationVariables, ExtractProductFieldsDocument, type ExtractProductFieldsQuery, type ExtractProductFieldsQueryVariables, FIND_BRANCHES_BY_DISTANCE_QUERY, FIND_BRANCH_QUERY, FIND_STORE_QUERY, FavoriteBranchesWithPricesDocument, type FavoriteBranchesWithPricesQuery, type FavoriteBranchesWithPricesQueryVariables, FindBranchDocument, type FindBranchQuery, type FindBranchQueryVariables, FindBranchesByDistanceDocument, type FindBranchesByDistanceQuery, type FindBranchesByDistanceQueryVariables, FindStoreDocument, type FindStoreQuery, type FindStoreQueryVariables, type FragmentType, GET_ALL_BRANCH_LISTS_BY_LIST_ID, GET_ALL_COUNTRIES_QUERY, GET_ALL_LISTS, GET_ALL_PRODUCT_LISTS_BY_LIST_ID, GET_ALL_USERS_QUERY, GET_CATEGORIES_QUERY, GET_CATEGORY_QUERY, GET_FAVORITE_BRANCHES_WITH_PRICE_DATA_QUERY, GET_GROCERY_LIST_ITEMS_QUERY, GET_PRODUCT_NUTRITION_DATA_QUERY, GET_PRODUCT_STOCKS_QUERY, GET_STOCK_BY_ID, GET_STOCK_FROM_PRODUCT_AND_BRANCH_ID_QUERY, GOOGLE_OAUTH_QUERY, GROCERY_LISTS_QUERY, GetAllBranchListsByListIdDocument, type GetAllBranchListsByListIdQuery, type GetAllBranchListsByListIdQueryVariables, GetAllCountriesDocument, type GetAllCountriesQuery, type GetAllCountriesQueryVariables, GetAllListsDocument, type GetAllListsQuery, type GetAllListsQueryVariables, GetAllProductListsByListIdDocument, type GetAllProductListsByListIdQuery, type GetAllProductListsByListIdQueryVariables, GetAllUsersDocument, type GetAllUsersQuery, type GetAllUsersQueryVariables, GetCategoriesDocument, type GetCategoriesQuery, type GetCategoriesQueryVariables, GetCategoryDocument, type GetCategoryQuery, type GetCategoryQueryVariables, GetProductNutritionDataDocument, type GetProductNutritionDataQuery, type GetProductNutritionDataQueryVariables, GetProductStocksDocument, type GetProductStocksQuery, type GetProductStocksQueryVariables, GetStockFromProductAndBranchIdDocument, type GetStockFromProductAndBranchIdQuery, type GetStockFromProductAndBranchIdQueryVariables, GoogleOAuthDocument, type GoogleOAuthQuery, type GoogleOAuthQueryVariables, type GroceryList, type GroceryListItem, GroceryListItemsDocument, type GroceryListItemsFilters, type GroceryListItemsQuery, type GroceryListItemsQueryVariables, GroceryListsDocument, type GroceryListsQuery, type GroceryListsQueryVariables, IP_TO_ADDRESS_QUERY, type Incremental, type InputMaybe, IpToAddressDocument, type IpToAddressQuery, type IpToAddressQueryVariables, LOGIN_INTERNAL_QUERY, LOGOUT_MUTATION, type List, ListType, type LocationInput, LoginInternalDocument, type LoginInternalQuery, type LoginInternalQueryVariables, LogoutDocument, type LogoutMutation, type LogoutMutationVariables, MARK_GROCERY_ITEM_MUTATION, ME_QUERY, MY_PRODUCT_BILLING_DATA_QUERY, MY_PRODUCT_VIEW_HISTORY_QUERY, MY_SEARCH_HISTORY_QUERY, type MakeEmpty, type MakeMaybe, type MakeOptional, MarkGroceryListItemDocument, type MarkGroceryListItemMutation, type MarkGroceryListItemMutationVariables, type Maybe, MeDocument, type MeQuery, type MeQueryVariables, type Mutation, type MutationAcceptPendingStoreUserInviteArgs, type MutationAddBranchToListArgs, type MutationAddGroceryListItemArgs, type MutationAddToListArgs, type MutationAdminRemoveAuthSessionArgs, type MutationBulkAddBranchesToListArgs, type MutationCreateAccountArgs, type MutationCreateBranchArgs, type MutationCreateBranchWithFullAddressArgs, type MutationCreateCategoryArgs, type MutationCreateListArgs, type MutationCreatePriceArgs, type MutationCreateProductArgs, type MutationCreateStoreArgs, type MutationCreateStoreUserAdminArgs, type MutationDeclinePendingStoreUserInviteArgs, type MutationDeleteGroceryListItemArgs, type MutationDeleteListArgs, type MutationDeleteSearchByIdArgs, type MutationExtractAndCreateProductArgs, type MutationMarkGroceryListItemArgs, type MutationRegisterExpoPushTokenArgs, type MutationRemoveBranchFromListArgs, type MutationRemoveFromListArgs, type MutationRemoveFromListWithProductIdArgs, type MutationRequestPasswordResetArgs, type MutationResendEmailVerificationCodeArgs, type MutationSanitizeProductArgs, type MutationSaveProductsFromUpcItemDbArgs, type MutationUpdateGroceryListItemArgs, type MutationUpdatePasswordWithResetCodeArgs, type MutationUpdateProductArgs, type MutationUpdateProductNutritionDataArgs, type MutationUpdateProfileArgs, type MutationUpdateUserByIdArgs, type MutationVerifyEmailArgs, MyProductBillingDataDocument, type MyProductBillingDataQuery, type MyProductBillingDataQueryVariables, MyProductViewHistoryDocument, type MyProductViewHistoryQuery, type MyProductViewHistoryQueryVariables, MySearchHistoryDocument, type MySearchHistoryQuery, type MySearchHistoryQueryVariables, MyStoreUserDocument, type MyStoreUserQuery, type MyStoreUserQueryVariables, OrderByType, PAGINATED_ADMIN_AUTH_SESSIONS_QUERY, PAGINATED_ADMIN_PRODUCT_VIEW_ENTRIES, POPULAR_PRODUCTS_QUERY, POPULAR_SEARCH_KEYWORDS_QUERY, POST_AUTH_USER_DATA_QUERIES, PRICE_CHANGE_HISTORY_QUERY, PRODUCT_BILLING_DATA_BY_USER_ID_QUERY, PRODUCT_BY_ID_QUERY, PRODUCT_SEARCH_QUERY, PRODUCT_SUMMARY_QUERY, PaginatedAdminAuthSessionsDocument, type PaginatedAdminAuthSessionsQuery, type PaginatedAdminAuthSessionsQueryVariables, PaginatedAdminProductViewEntriesDocument, type PaginatedAdminProductViewEntriesQuery, type PaginatedAdminProductViewEntriesQueryVariables, type PaginatedAuthSessions, type PaginatedBranches, type PaginatedPriceHistory, type PaginatedProductBilling, type PaginatedProductViews, type PaginatedProducts, type PaginatedSearch, type PaginatedSearchKeywords, type PaginatedStocks, type PaginatedStores, type PaginatedUsers, type Paginator, type PaginatorInput, PopularProductsDocument, type PopularProductsQuery, type PopularProductsQueryVariables, PopularSearchKeywordsDocument, type PopularSearchKeywordsQuery, type PopularSearchKeywordsQueryVariables, PostAuthUserDataDocument, type PostAuthUserDataQuery, type PostAuthUserDataQueryVariables, type Price, PriceChangeHistoryDocument, type PriceChangeHistoryQuery, type PriceChangeHistoryQueryVariables, type PriceHistoryFilter, type Product, type ProductBilling, ProductBillingDataByUserIdDocument, type ProductBillingDataByUserIdQuery, type ProductBillingDataByUserIdQueryVariables, ProductDocument, type ProductExtractionFields, type ProductExtractionResponse, type ProductList, type ProductNutriment, type ProductNutrition, type ProductQuery, type ProductQueryVariables, type ProductReferrer, type ProductSearch, ProductSearchDocument, type ProductSearchFilters, type ProductSearchQuery, type ProductSearchQueryVariables, type ProductSimple, type ProductSummary, type ProductSummaryBranchInput, ProductSummaryDocument, type ProductSummaryQuery, type ProductSummaryQueryVariables, type ProductView, type ProductViewerMetadata, type ProductWeightComponents, type Query, type QueryAllBranchesArgs, type QueryAllBrandsArgs, type QueryAllProductsArgs, type QueryAllStoresArgs, type QueryAppleOAuthArgs, type QueryBarcodeScanArgs, type QueryBranchesWithProductsArgs, type QueryCategorySearchArgs, type QueryCheckAppVersionArgs, type QueryCountGroceryListItemsArgs, type QueryDefaultGroceryListItemsArgs, type QueryExtractProductFieldsArgs, type QueryFindBranchArgs, type QueryFindBranchesByDistanceArgs, type QueryFindStoreArgs, type QueryGetAllBranchListsByListIdArgs, type QueryGetAllListsArgs, type QueryGetAllProductListsByListIdArgs, type QueryGetAllUsersArgs, type QueryGetCategoriesArgs, type QueryGetCategoryArgs, type QueryGetFavoriteBranchesWithPricesArgs, type QueryGetProductNutritionDataArgs, type QueryGetProductStocksArgs, type QueryGetStockFromProductAndBranchIdArgs, type QueryGoogleOAuthArgs, type QueryGroceryListArgs, type QueryGroceryListItemsArgs, type QueryIpToAddressArgs, type QueryLoginArgs, type QueryMyProductBillingDataArgs, type QueryMyProductViewHistoryArgs, type QueryMySearchHistoryArgs, type QueryPaginatedAdminAuthSessionsArgs, type QueryPaginatedAdminProductViewEntriesArgs, type QueryPopularProductsArgs, type QueryPopularSearchKeywordsArgs, type QueryPriceChangeHistoryArgs, type QueryProductArgs, type QueryProductBillingDataByUserIdArgs, type QueryProductSearchArgs, type QueryProductSummaryArgs, type QuerySearchKeywordsArgs, type QueryStockArgs, type QueryVerifyPasswordResetCodeArgs, type QueryWeightComponentsFromCategoryIdArgs, type QueryYahooOAuthArgs, REGISTER_EXPO_PUSH_TOKEN, REMOVE_BRANCH_FROM_LIST_MUTATION, REMOVE_FROM_LIST_BY_PRODUCT_ID_MUTATION, REMOVE_FROM_LIST_MUTATION, REQUEST_RESET_PASSWORD_MUTATION, RESEND_VERIFICATION_MUTATION, RegisterExpoPushTokenDocument, type RegisterExpoPushTokenMutation, type RegisterExpoPushTokenMutationVariables, RemoveBranchFromListDocument, type RemoveBranchFromListMutation, type RemoveBranchFromListMutationVariables, RemoveFromListDocument, type RemoveFromListMutation, type RemoveFromListMutationVariables, RemoveFromListWithProductIdDocument, type RemoveFromListWithProductIdMutation, type RemoveFromListWithProductIdMutationVariables, RequestResetPasswordDocument, type RequestResetPasswordMutation, type RequestResetPasswordMutationVariables, ResendVerificationDocument, type ResendVerificationMutation, type ResendVerificationMutationVariables, SANITIZE_PRODUCT_MUTATION, SEARCH_KEYWORDS_QUERY, SanitizeProductDocument, type SanitizeProductMutation, type SanitizeProductMutationVariables, type SaveExternalProductInput, type Scalars, type SearchHistory, SearchKeywordsDocument, type SearchKeywordsQuery, type SearchKeywordsQueryVariables, type SearchResult, type Stock, StockDocument, type StockQuery, type StockQueryVariables, type StockSimple, type Store, type StoreUser, type StoreUserData, StoreUserRole, type TimestampRangeBetween, UPDATE_GROCERY_LIST_ITEMS_MUTATION, UPDATE_PASSWORD_WITH_RESET_CODE_MUTATION, UPDATE_PRODUCT_MUTATION, UPDATE_PRODUCT_NUTRITION_MUTATION, UPDATE_PROFILE_MUTATION, UPDATE_USER_BY_ID_MUTATION, UpdateGroceryListItemDocument, type UpdateGroceryListItemMutation, type UpdateGroceryListItemMutationVariables, UpdatePasswordWithResetCodeDocument, type UpdatePasswordWithResetCodeMutation, type UpdatePasswordWithResetCodeMutationVariables, type UpdateProduct, UpdateProductDocument, type UpdateProductMutation, type UpdateProductMutationVariables, UpdateProductNutritionDataDocument, type UpdateProductNutritionDataMutation, type UpdateProductNutritionDataMutationVariables, UpdateProfileDocument, type UpdateProfileMutation, type UpdateProfileMutationVariables, type UpdateUser, UpdateUserByIdDocument, type UpdateUserByIdMutation, type UpdateUserByIdMutationVariables, type UpdateUserFull, type UpdatedByUser, type User, type UserFieldsFragment, UserFieldsFragmentDoc, type UserFilter, UserFragment, UserRole, type UserShallow, VERIFY_EMAIL_MUTATION, VERIFY_PASSWORD_RESET_CODE_QUERY, VerifyEmailDocument, type VerifyEmailMutation, type VerifyEmailMutationVariables, VerifyPasswordResetCodeDocument, type VerifyPasswordResetCodeQuery, type VerifyPasswordResetCodeQueryVariables, type ViewerTrailInput, WEIGHT_COMPONENTS_FROM_CATEGORY_ID_QUERY, WeightComponentsFromCategoryIdDocument, type WeightComponentsFromCategoryIdQuery, type WeightComponentsFromCategoryIdQueryVariables, YAHOO_OAUTH_QUERY, YahooOAuthDocument, type YahooOAuthQuery, type YahooOAuthQueryVariables, graphql, isFragmentReady, makeFragmentData, useFragment };
