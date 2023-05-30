import Image from 'next/image';
import { Button } from '../../Form';
import { Text } from '../../Display';
import { cx } from '~/libs';
import { IAuctionPack } from '~/types';
import { useTranslation } from 'next-i18next';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '~/config';
import { useAppSelector } from '~/store';

type Props = {
  data: IAuctionPack;
};

export const AuctionPackCard = ({ data }: Props) => {
  const { t } = useTranslation(['auctionPacks']);
  const { id, src, title, discountRate, rate } = data;
  const router = useRouter();
  const theme = useAppSelector((state) => state.theme.value);

  const handleOnClick = () => {
    router.push(`${ROUTES.AUCTION_PACKS}/${data.id}`);
  };

  return (
    <div
      key={id}
      className={cx(
        'rounded group bg-chalk-50',
        'shadow',
        'h-[35rem] grid grid-rows-6',
        'hover:shadow-card overflow-hidden'
      )}
      role='button'
      onClick={handleOnClick}
    >
      <div
        className={cx(
          'row-span-4 py-8 px-12 rounded-t border border-secondary-200 overflow-hidden',
          {
            'bg-graphite-200': theme === 'dark-theme',
            'bg-secondary-200': theme !== 'dark-theme',
          }
        )}
      >
        <Image
          src={src}
          alt={title}
          priority
          width={1000}
          height={1000}
          style={{ width: '100%', height: '100%' }}
          className='group-hover:scale-90 transition-all duration-500'
        />
      </div>
      <div className='row-span-2 flex flex-col justify-evenly py-2 px-4'>
        <Text className='font-bold text-lg tracking-[0.9px]'>{title}</Text>
        <Text className='font-bold flex items-center text-lg tracking-[0.9px]'>
          € {discountRate}
          <Text className='text-sm line-through text-graphite-100 tracking-[0.7px] ml-2'>
            € {rate}
          </Text>
        </Text>
        <Button className='max-w-full rounded'>{t('auctionPacks:add_to_cart')}</Button>
      </div>
    </div>
  );
};
