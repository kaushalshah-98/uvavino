import { memo } from 'react';
import { Text } from '~/components';
import { cx } from '~/libs';
import Link from 'next/link';
import Image from 'next/image';
import { TFuncKey } from 'i18next';
import { useTranslation } from 'next-i18next';

const usefulLinks: Array<{ label: TFuncKey<'header'>; link: string }> = [
  { label: 'auctions.section1.port_wines', link: '#' },
  { label: 'auctions.section1.red_wines', link: '#' },
  { label: 'auctions.section1.vintage_wines', link: '#' },
  { label: 'auctions.section1.desert_wines', link: '#' },
  { label: 'auctions.section1.premium_auction', link: '#' },
];

const moreLinks: Array<{ label: TFuncKey<'header'>; link: string }> = [
  { label: 'auctions.section1.port_wines', link: '#' },
  { label: 'auctions.section1.red_wines', link: '#' },
  { label: 'auctions.section1.vintage_wines', link: '#' },
  { label: 'auctions.section1.desert_wines', link: '#' },
  { label: 'auctions.section1.premium_auction', link: '#' },
];

const SearchMenuComponent = (props: React.ComponentProps<'div'>) => {
  const { t } = useTranslation(['header']);

  return (
    <div className={cx('w-full', '', 'flex flex-col w-full space-y-10', props.className)}>
      <div className='flex flex-row 2xl:space-x-56 justify-between'>
        <div className='flex flex-col'>
          <Text className='uppercase text-base font-semibold'>
            {t('header:auctions.section1.text')}
          </Text>
          <div className='flex flex-col space-y-1.5 mt-4 ml-2'>
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
            {t('header:auctions.section1.suggestions')}
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
            {t('header:auctions.section1.new_products')}
          </Text>
          <div className='flex flex-row space-x-12 mt-2'>
            {[1, 2, 3].map((item) => (
              <div key={item} className='w-48 h-auto flex flex-col space-y-3'>
                <Image
                  width={180}
                  height={180}
                  alt='image'
                  src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Red_and_white_wine_12-2015.jpg'
                />
                <Text className='text-sm text-primary-100'>
                  FANTOOS COLA WINE PR-BOTTLE (0,75L).
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SearchMenu = memo(SearchMenuComponent);
