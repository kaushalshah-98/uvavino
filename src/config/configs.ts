import { IMenu } from '../types/menu';
import { ROUTES } from './constants';
import { SubMenus } from './enums';

const mainMenus: IMenu[] = [
  { label: SubMenus.AUCTION, href: ROUTES.AUCTIONS },
  { label: SubMenus.TRADE_CELLARS, href: '#' },
  { label: SubMenus.WINE_CLUBS, href: '#' },
  { label: SubMenus.NFTS, href: '#' },
];

const topMenus: IMenu[] = [
  { label: SubMenus.ARTICLES, href: '#', icon: null },
  { label: SubMenus.ABOUT_US, href: '#', icon: null },
  { label: SubMenus.CONTACT_US, href: '#', icon: null },
  { label: SubMenus.WISHLIST, href: '#', icon: 'HEART' },
  { label: SubMenus.BASKET, href: '#', icon: 'BASKET' },
];

export { topMenus, mainMenus };
