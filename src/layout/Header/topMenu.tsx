import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Button, CustomMenu, Icon, InputWrapper, Select, Text } from '~/components';
import { LANGUAGES, topMenus } from '~/config';
import { cx } from '~/libs';
import { useAppDispatch, useAppSelector } from '~/store';
import { toggleTheme } from '~/store/actions';

const languages = [
  { label: 'English', value: LANGUAGES.ENGLISH },
  { label: 'Portuguese', value: LANGUAGES.PORTUGUESE },
];

export const TopMenu = () => {
  const { i18n, t } = useTranslation(['header']);
  const [open, setopen] = useState(false);
  const dispatch = useAppDispatch();
  const [locale, setlocale] = useState(LANGUAGES.ENGLISH);
  const [showTopBar] = useAppSelector((state) => [state.header.showTopBar]);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  const changeLanguage = () => {
    setopen(false);
    i18n.changeLanguage(locale);
  };

  const selectedLocale = useMemo(() => languages.find((l) => l.value === locale), [locale]);

  return (
    <div
      className={cx(
        'px-24 transition-all duration-500 ease-in-out',
        'border-t-2 border-secondary-50',
        'flex flex-row justify-between items-center',
        {
          'h-0 opacity-0': !showTopBar,
          'h-12 py-2 opacity-1': showTopBar,
        }
      )}
    >
      {showTopBar && (
        <>
          <div className='flex flex-row space-x-1 items-center'>
            <CustomMenu
              open={open}
              manual
              menuWrapperClass={cx(
                'w-64 px-6 py-6 overflow-hidden',
                'shadow-dropdown',
                'border border-chalk-200'
              )}
              component={
                <div className=''>
                  <InputWrapper label={t('header:country')} labelClass='text-xs tracking-normal'>
                    <Select
                      menuWrapperClass='w-[13rem]'
                      value={{ label: 'India', value: 'in' }}
                      input={{ className: 'h-9' }}
                      options={[
                        { label: 'India', value: 'in' },
                        { label: 'Portugal', value: 'pt' },
                      ]}
                    />
                  </InputWrapper>
                  <InputWrapper label={t('header:language')} labelClass='text-xs tracking-normal'>
                    <Select
                      onChange={(data) => setlocale(data?.value as LANGUAGES)}
                      menuWrapperClass='w-[13rem]'
                      value={selectedLocale}
                      input={{ className: 'h-9' }}
                      options={languages}
                    />
                  </InputWrapper>

                  <Button
                    onClick={changeLanguage}
                    textClass='text-sm uppercase'
                    className='py-1.5 mt-3'
                  >
                    {t('header:confirm')}
                  </Button>
                </div>
              }
            >
              <Icon onClick={() => setopen(true)} name='GLOBE' className='cursor-pointer' />
            </CustomMenu>
            <Text className={cx('text-sm min-w-fit duration-100 text-primary-300')}>
              <span>{selectedLocale?.label},</span>&nbsp;
              <span className='uppercase'>{selectedLocale?.value}</span>
              <span>(EUR €)</span>
            </Text>
          </div>
          <div>
            <div className='flex flex-row space-x-12'>
              {topMenus.map((menu) => (
                <Link
                  className='flex items-center flex-row space-x-2'
                  key={menu.label}
                  href={menu.href}
                >
                  {menu.icon && <Icon name={menu.icon} />}
                  <Text
                    onClick={handleChangeTheme}
                    className={cx(
                      'text-xs hover:text-primary-100 text-graphite-100 uppercase font-medium'
                    )}
                  >
                    {t(menu.label as never)}
                  </Text>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
