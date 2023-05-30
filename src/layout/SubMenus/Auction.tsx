import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { memo } from 'react';
import { Button, Text } from '~/components';
import { ROUTES } from '~/config';
import { cx } from '~/libs';
import type { TFuncKey } from 'i18next';

const usefulLinks: Array<{ label: TFuncKey<'header'>; link: string }> = [
  { label: 'auctions.section1.port_wines', link: '#' },
  { label: 'auctions.section1.red_wines', link: '#' },
  { label: 'auctions.section1.vintage_wines', link: '#' },
  { label: 'auctions.section1.desert_wines', link: '#' },
  { label: 'auctions.section1.premium_auction', link: '#' },
];

const moreLinks: Array<{ label: TFuncKey<'header'>; link: string }> = [
  { label: 'auctions.section2.new_lots_added', link: '#' },
  { label: 'auctions.section2.all_lots', link: '#' },
  { label: 'auctions.section2.how_to', link: '#' },
];

const AuctionMenuComponent = (props: React.ComponentProps<'div'>) => {
  const { t } = useTranslation(['header']);

  return (
    <div className={cx('w-full', 'flex flex-col w-full space-y-10', props.className)}>
      <div className='flex flex-row justify-between'>
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
            {t('header:auctions.section2.text')}
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
            {t('header:auctions.section3.text')}
          </Text>
          <div className='flex flex-col space-y-1 mt-4'>
            <Text className='text-base text-primary-100 max-w-xs'>
              {t('header:auctions.section3.description')}
            </Text>
          </div>

          <br />
          <br />

          <Button textClass='uppercase' className='px-2 max-w-[14rem] py-2'>
            {t('header:auctions.section3.create_auction')}
          </Button>
        </div>

        <div className='flex flex-col'>
          <Text className='uppercase text-base font-semibold'>
            {t('header:auctions.section4.text')}
          </Text>
          <div className='flex flex-col space-y-1 mt-4'>
            <Text className='text-base text-primary-100 max-w-xs'>
              {t('header:auctions.section4.description')}
            </Text>
          </div>

          <br />
          <br />

          <Link href={ROUTES.AUCTION_PACKS}>
            <Button textClass='uppercase' className='px-2 max-w-[14rem] py-2'>
              {t('header:auctions.section4.buy_packs')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const AuctionMenu = memo(AuctionMenuComponent);
