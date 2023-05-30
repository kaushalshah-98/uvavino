import Link from 'next/link';
import { useCallback } from 'react';
import { Icon, SearchInput, Text } from '~/components';
import { ROUTES, SubMenus, mainMenus } from '~/config';
import { cx } from '~/libs';
import { useAppDispatch, useAppSelector } from '~/store';
import { setShowSearchMenu, setSubMenu } from '~/store/actions';
import type { MouseEvent } from '~/types';
import type { UseHoverProps } from 'react-laag';
import { useTranslation } from 'next-i18next';

type Props = {
  hoverProps: UseHoverProps;
  isOver: boolean;
};

export const MainMenu = ({ hoverProps, isOver }: Props) => {
  const { t } = useTranslation(['header']);
  const [showSearchMenu, subMenu] = useAppSelector((state) => [
    state.header.showSearchMenu,
    state.header.subMenu,
  ]);
  const dispatch = useAppDispatch();

  const openSubNavigation = useCallback(
    (submenu: SubMenus, e?: MouseEvent) => {
      if (showSearchMenu) {
        return;
      }
      hoverProps.onMouseEnter(e);
      dispatch(setSubMenu(submenu ?? null));
    },
    [hoverProps, dispatch, showSearchMenu]
  );

  const closeSubNavigation = (e: MouseEvent) => {
    if (showSearchMenu) {
      return;
    }
    hoverProps.onMouseLeave(e);
  };

  const handleStateChange = (state: 'focus' | 'blur') => {
    if (state === 'focus') {
      dispatch(setSubMenu(SubMenus.SEARCH));
      dispatch(setShowSearchMenu(true));
    } else {
      dispatch(setShowSearchMenu(false));
    }
  };

  return (
    <div
      className={cx(
        'px-24 h-20',
        'border-t-2 border-secondary-50',
        'flex flex-row justify-between items-center'
      )}
    >
      <div className='flex flex-row h-full space-x-28 items-center'>
        <Link href={ROUTES.HOME}>
          <Icon className='' width={120} name='LOGO' />
        </Link>
        <div className='flex flex-row space-x-16 mt-2 h-full'>
          {mainMenus.map((menu) => (
            <Link
              className='group h-full flex flex-col items-center justify-center'
              key={menu.label}
              href={menu.href}
              {...hoverProps}
              onMouseEnter={(e) => {
                openSubNavigation(menu.label, e);
              }}
              onMouseLeave={(e) => {
                closeSubNavigation(e);
              }}
            >
              <Text
                className={cx('text-[14px] uppercase tracking-[0.12rem] font-medium', {
                  'opacity-40': isOver && subMenu !== menu.label,
                  'font-normal': !isOver,
                  'font-medium': isOver && subMenu === menu.label,
                })}
              >
                {t(menu.label as never)}
              </Text>
              <span
                className={cx(
                  'transition-width duration-500',
                  'group-hover:w-[70%]',
                  'w-0 block mt-2 h-0.5 bg-primary-400',
                  {
                    'w-[70%]': isOver && subMenu === menu.label,
                  }
                )}
              ></span>
            </Link>
          ))}
        </div>
      </div>
      <div className='max-w-md w-full'>
        <SearchInput placeholder={t('header:searchtext')} onStateChange={handleStateChange} />
      </div>
    </div>
  );
};
