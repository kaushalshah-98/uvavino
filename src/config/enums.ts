export enum ENV_MODE {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}
export enum LANGUAGES {
  ENGLISH = 'en',
  PORTUGUESE = 'pt',
}

export enum SubMenus {
  // main
  AUCTION = 'header:menus.auctions',
  TRADE_CELLARS = 'header:menus.trade_cellars',
  WINE_CLUBS = 'header:menus.wine_clubs',
  NFTS = 'header:menus.nfts',
  SEARCH = 'header:search',

  //other
  ARTICLES = 'header:topMenus.articles',
  ABOUT_US = 'header:topMenus.about_us',
  CONTACT_US = 'header:topMenus.contact_us',
  WISHLIST = 'header:topMenus.wishlist',
  BASKET = 'header:topMenus.basket',
  LOGIN = 'header:topMenus.login',
}

export enum VIEW_MODE {
  GRID = 'GRID',
  LIST = 'LIST',
}
