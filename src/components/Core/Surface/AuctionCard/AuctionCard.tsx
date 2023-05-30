import Image from 'next/image';
import { Button } from '../../Form';
import { Text } from '../../Display';
import { cx } from '~/libs';
import { Icon } from '../../Icons';
import { IAuction } from '~/types';
import { useTranslation } from 'next-i18next';

interface Props {
  data: IAuction;
}

export const AuctionCard = ({ data }: Props) => {
  const { t } = useTranslation(['auctions']);
  const { image, country, count, currentBid, isTag, name, timestamp } = data;
  return (
    <div
      className={cx(
        'rounded bg-chalk-50 shadow ',
        'group grid grid-rows-4',
        'h-[35rem] overflow-hidden',
        'hover:shadow-card grid'
      )}
    >
      <div className='row-span-2 relative overflow-hidden'>
        <Icon name='GLOBE' className='absolute top-4 left-4 z-[2]' />
        <Icon name='HEART_FILLEd' className='absolute top-4 right-4 z-[2]' />
        <Image
          src={image}
          alt={image}
          width={1000}
          height={1000}
          // style={{ width: '100%', height: '100%' }}
          className={cx(
            'rounded bg-cover',
            'group-hover:-translate-y-12 transition-all duration-500'
          )}
        />
      </div>
      <div className='row-span-2 flex flex-col items-start justify-evenly pt-2 pb-4 px-5'>
        <Text className='text-lg tracking-[0.9px] font-bold'>{name}</Text>
        <div className='flex items-center'>
          <Icon name='GLOBE' />
          <Text className='ml-1 text-base'>{country}</Text>
        </div>
        <div className='flex items-center space-x-4 my-3'>
          <Text className='px-1.5 py-0.5 text-sm bg-secondary-50 rounded-full'>{count}</Text>
          {isTag && <Icon name='BADGE' />}
        </div>
        <Text className='block text-sm tracking-[0.7px] text-olive-50'>
          {t('auctions:current_bid')}
        </Text>
        <Text className='block text-lg tracking-[0.9px] font-bold'>{currentBid}</Text>
        <Text className='block text-sm tracking-[0.84px] opacity-50'>{timestamp}</Text>

        <Button className='mt-6 py-3 rounded max-w-full'>{t('auctions:place_bid')}</Button>
      </div>
    </div>
  );
};
