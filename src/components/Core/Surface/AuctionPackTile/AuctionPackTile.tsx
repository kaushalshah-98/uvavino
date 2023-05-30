import Image from 'next/image';
import { Button } from '../../Form';
import { Text } from '../../Display';
import { cx } from '~/libs';
import { IAuctionPack } from '~/types';
import { useTranslation } from 'next-i18next';

type Props = {
  data: IAuctionPack;
};

export const AuctionPackTile = ({ data }: Props) => {
  const { t } = useTranslation(['auctionPacks']);
  const { src, title, discountRate, rate } = data;

  return (
    <div
      className={cx(
        'rounded border border-secondary-200 bg-chalk-50',
        'group grid grid-cols-4 h-[16rem]'
      )}
    >
      <div className='col-span-1 overflow-hidden'>
        <Image
          src={src}
          alt={title}
          priority
          width={1000}
          height={1000}
          style={{ width: '100%', height: '100%' }}
          className={cx('bg-center', 'group-hover:scale-110 transition-all duration-500')}
        />
      </div>
      <div className='col-span-3 w-full flex flex-col justify-evenly px-8'>
        <Text className='font-bold text-2xl tracking-[0.9px]'>{title}</Text>
        <div className='flex flex-row justify-between w-full items-center'>
          <Text className='font-bold flex items-center text-xl tracking-[0.9px]'>
            € {discountRate}
            <Text className='text-lg line-through text-graphite-100 tracking-[0.7px] ml-2'>
              € {rate}
            </Text>
          </Text>
          <Button className='rounded'>{t('auctionPacks:add_to_cart')}</Button>
        </div>
      </div>
    </div>
  );
};
