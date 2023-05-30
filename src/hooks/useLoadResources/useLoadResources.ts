import { i18n } from 'next-i18next';
import { useEffect, useRef } from 'react';
import { LANGUAGES } from '~/config';

export const useLoadResources = (
  ns: string[] = [
    'common',
    'auth',
    'auctions',
    'auctionPacks',
    'header',
    'footer',
    'confirmModal',
    'home',
    'cookies',
  ]
) => {
  const ref = useRef<boolean>();

  useEffect(() => {
    if (i18n && !ref.current) {
      ref.current = true;
      i18n.reloadResources([LANGUAGES.ENGLISH, LANGUAGES.PORTUGUESE], ns);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
