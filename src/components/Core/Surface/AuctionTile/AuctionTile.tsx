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

export const AuctionTile = ({ data }: Props) => {
  const { t } = useTranslation(['auctions']);
  const { image, country, count, currentBid, isTag, name, timestamp, details, date } = data;

  return (
    <div
      className={cx(
        'rounded border border-secondary-200 bg-chalk-50',
        'h-[17rem] hover:shadow-card overflow-hidden',
        'group grid grid-cols-4'
      )}
    >
      <div className='col-span-1 overflow-hidden relative'>
        <Icon name='GLOBE' className='absolute top-4 left-4 z-[2]' />
        <Image
          src={image}
          alt={image}
          priority
          width={1000}
          height={1000}
          style={{ width: '100%', height: '100%' }}
          className={cx('bg-cover', 'group-hover:scale-110 transition-all duration-500')}
        />
      </div>

      <div className='p-6 col-span-3 flex flex-col justify-between'>
        <div className='flex items-center justify-between'>
          <Text className='text-lg tracking-[1px] font-bold'>{name}</Text>
          <Icon name='HEART_FILLEd' />
        </div>
        <div className='flex items-center'>
          <Icon name='GLOBE' />
          <Text className='ml-1 text-base tracking-[0.8px]'>{country}</Text>
        </div>
        <div className='flex my-4'>
          <Text className='text-[14px] text-primary-300 max-w-[13rem]'>{details}</Text>
          <div className='ml-4 grid grid-cols-5 items-center'>
            <Text className='px-1.5 py-0.5 text-sm bg-secondary-50 rounded-full'>{count}</Text>
            <Text className='col-span-4 ml-3 text-sm tracking-[0.7px]'>{date}</Text>
            {isTag && <Icon name='BADGE' className='ml-2 mt-2' />}
            {isTag && <Text className='col-span-4 mt-2 ml-2 text-sm tracking-[0.7px]'>{date}</Text>}
          </div>
        </div>
        <Text className='block text-sm tracking-[0.7px] text-olive-50'>
          {t('auctions:current_bid')}
        </Text>
        <Text className='block text-lg tracking-[0.9px] font-bold'>{currentBid}</Text>
        <div className='flex justify-between items-end'>
          <Text className='block text-sm tracking-[0.84px] opacity-50'>{timestamp}</Text>
          <Button className='py-2 rounded'>{t('auctions:place_bid')}</Button>
        </div>
      </div>
    </div>
  );
};
