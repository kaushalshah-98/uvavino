import { memo } from 'react';
import { Button, Text } from '~/components';
import { cx } from '~/libs';
import Link from 'next/link';
import { TFuncKey } from 'i18next';
import { useTranslation } from 'next-i18next';

const usefulLinks: Array<{ label: TFuncKey<'header'>; link: string }> = [
  { label: 'trade_cellars.section1.red', link: '#' },
  { label: 'trade_cellars.section1.white', link: '#' },
  { label: 'trade_cellars.section1.sparkling', link: '#' },
  { label: 'trade_cellars.section1.port_wine', link: '#' },
  { label: 'trade_cellars.section1.desert', link: '#' },
  { label: 'trade_cellars.section1.rose', link: '#' },
];

const moreLinks: Array<{ label: TFuncKey<'header'>; link: string }> = [
  { label: 'trade_cellars.section2.beer', link: '#' },
  { label: 'trade_cellars.section2.whiskeys', link: '#' },
  { label: 'trade_cellars.section2.rum', link: '#' },
  { label: 'trade_cellars.section2.liquors', link: '#' },
];

const TradeCellarMenuComponent = (props: React.ComponentProps<'div'>) => {
  const { t } = useTranslation(['header']);

  return (
    <div className={cx('w-full', '', 'flex flex-col w-full space-y-10', props.className)}>
      <div className='flex flex-row space-x-32'>
        <div className='flex flex-col'>
          <Text className='uppercase text-base font-semibold'>
            {t('header:trade_cellars.section1.text')}
          </Text>
          <Text className='text-base ml-2 my-2'>{t('header:trade_cellars.section1.wines')}</Text>
          <div className='flex flex-col space-y-1.5 ml-4'>
            {usefulLinks.map((item) => (
              <Link
                className='group transition-all duration-300 ease-in-out'
                key={item.label}
                href={item.link}
              >
                <Text className={cx('text-base font-normal text-primary-100 hover:underline')}>
                  {t(item.label as never)}
                </Text>
              </Link>
            ))}
          </div>
        </div>

        <div className='flex flex-col'>
          <Text className='uppercase text-base font-semibold'>
            {t('header:trade_cellars.section2.text')}
          </Text>
          <div className='flex flex-col space-y-1.5 mt-4 ml-2'>
            {moreLinks.map((item) => (
              <Link
                className='group transition-all duration-300 ease-in-out'
                key={item.label}
                href={item.link}
              >
                <Text className={cx('text-base font-normal text-primary-100 hover:underline')}>
                  {t(item.label as never)}
                </Text>
              </Link>
            ))}
          </div>
        </div>

        <div className='flex flex-col'>
          <Text className='uppercase text-base font-semibold'>
            {t('header:trade_cellars.section3.text')}
          </Text>
          <div className='flex flex-col space-y-1 mt-4'>
            <Text className='text-base text-primary-100'>
              {t('header:trade_cellars.section3.description')}
            </Text>
          </div>
        </div>

        <div className='flex flex-col'>
          <Text className='uppercase text-base font-semibold'>
            {t('header:trade_cellars.section4.text')}
          </Text>
          <div className='flex flex-col space-y-1 mt-4'>
            <Text className='text-base text-primary-100'>
              {t('header:trade_cellars.section4.description')}
            </Text>
          </div>

          <br />
          <br />

          <Button textClass='uppercase' className='px-2 max-w-[18rem] py-2'>
            {t('header:trade_cellars.section4.add_new_wine')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export const TradeCellarMenu = memo(TradeCellarMenuComponent);
