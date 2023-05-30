import 'i18next';

import type common from '../../public/locales/en/common.json';
import type header from '../../public/locales/en/header.json';
import type footer from '../../public/locales/en/footer.json';
import type cookies from '../../public/locales/en/cookies.json';
import type confirmModal from '../../public/locales/en/confirmModal.json';
import type home from '../../public/locales/en/home.json';
import type auctionPacks from '../../public/locales/en/auctionPacks.json';
import type auctions from '../../public/locales/en/auctions.json';
import type auth from '../../public/locales/en/auth.json';

interface I18nNamespaces {
  common: typeof common;
  header: typeof header;
  footer: typeof footer;
  cookies: typeof cookies;
  home: typeof home;
  auctionPacks: typeof auctionPacks;
  auctions: typeof auctions;
  auth: typeof auth;
  confirmModal: typeof confirmModal;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: I18nNamespaces;
  }
}
