export interface RootStackParamList {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
}

export enum Routes {
  NAVIGATION_TO_HOME_SCREEN = 'HomeScreen',
  NAVIGATION_TO_CATEGORIES_SCREEN = 'CategoriesScreen',
  NAVIGATION_TO_CART_SCREEN = 'CartScreen',
  NAVIGATION_TO_PROFILE_SCREEN = 'ProfileScreen',
  NAVIGATION_TO_PRODUCT_LIST_SCREEN = 'ProductListScreen',
  NAVIGATION_TO_PRODUCT_DETAILS_SCREEN = 'ProductDetailsScreen',
  NAVIGATION_TO_AUTHENTICATION_SPLASH_SCREEN = 'AuthenticationSplashScreen',
  NAVIGATION_TO_LOGIN_SCREEN = 'LoginScreen',
  NAVIGATION_TO_SIGNUP_SCREEN = 'SignupScreen',
  NAVIGATION_TO_SEARCH_SCREEN = 'SearchScreen',
}
