import { AnimatePresence, motion } from 'framer-motion';
import { memo, useCallback } from 'react';
import { SubMenus } from '~/config';
import { useDocumentScrollThrottled } from '~/hooks';
import { cx } from '~/libs';
import { useAppDispatch, useAppSelector } from '~/store';
import { setShowTopBar, setSubMenu } from '~/store/actions';
import { AuctionMenu, SearchMenu, TradeCellarMenu } from '../SubMenus';
import { MainMenu } from './mainMenu';
import { TopMenu } from './topMenu';
import { useHover } from 'react-laag';
import type { MouseEvent } from '~/types';

const SCROLL_LENGTH = 5;

const HeaderComponent = ({ className }: React.ComponentProps<'div'>) => {
  const dispatch = useAppDispatch();
  const [showSearchMenu, subMenu] = useAppSelector((state) => [
    state.header.showSearchMenu,
    state.header.subMenu,
  ]);
  const [isOver, hoverProps] = useHover({ delayEnter: 200, delayLeave: 200 });

  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    const value = !!(currentScrollTop <= SCROLL_LENGTH);
    dispatch(setShowTopBar(value));
  }, 0);

  const closeSubNavigation = (e: MouseEvent) => {
    if (showSearchMenu) {
      return;
    }
    hoverProps.onMouseLeave(e);
  };

  const openSubNavigation = useCallback(
    (submenu: SubMenus, e: MouseEvent) => {
      if (showSearchMenu) {
        return;
      }
      dispatch(setSubMenu(submenu ?? null));
      hoverProps.onMouseEnter(e);
    },
    [dispatch, hoverProps, showSearchMenu]
  );

  const components: Partial<Record<SubMenus, JSX.Element>> = {
    [SubMenus.AUCTION]: <AuctionMenu />,
    [SubMenus.TRADE_CELLARS]: <TradeCellarMenu />,
    [SubMenus.WINE_CLUBS]: <>wine clubs</>,
    [SubMenus.NFTS]: <>nfts</>,
    [SubMenus.SEARCH]: <SearchMenu />,
  };

  return (
    <div className='fixed w-full top-0 z-10'>
      <div
        className={cx(
          'w-full bg-chalk-50 shadow-sm',
          'border border-b-2 border-secondary-100',
          'flex flex-col space-y-10',
          className
        )}
      >
        <div className='flex flex-col justify-between'>
          <TopMenu />
          <MainMenu isOver={isOver} hoverProps={hoverProps} />
        </div>
      </div>

      <AnimatePresence>
        {(isOver || showSearchMenu) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={(e) => {
              openSubNavigation(subMenu!, e);
            }}
            onMouseLeave={closeSubNavigation}
            className={cx(
              'absolute bg-chalk-50 px-36 pt-10 pb-28 w-full shadow-sm',
              'border border-b-2 border-secondary-100'
            )}
          >
            {components[subMenu!]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Header = memo(HeaderComponent);
