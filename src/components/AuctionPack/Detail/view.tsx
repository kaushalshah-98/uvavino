import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useState } from 'react';
import { Button, NumberInput, Text } from '~/components';
import { cx } from '~/libs';
import { useAppSelector } from '~/store';
import { IAuctionPack } from '~/types';
import { AuctionPackDetailViewSkeleton } from './Detail.skeleton';

type Props = {
  isLoading: boolean;
  data: IAuctionPack | undefined;
};

export const AuctionPackDetailView = ({ isLoading, data }: Props) => {
  const theme = useAppSelector((state) => state.theme.value);
  const [value, setValue] = useState(1);
  const { t } = useTranslation(['auctionPacks']);

  if (isLoading || !data) {
    return <AuctionPackDetailViewSkeleton />;
  }

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-x-12 mt-12'>
      <div className='col-span-1'>
        <div
          className={cx(
            'border border-secondary-200',
            'group row-span-4 w-[90%] py-24 px-32 overflow-hidden',
            {
              'bg-graphite-200': theme === 'dark-theme',
              'bg-secondary-200': theme !== 'dark-theme',
            }
          )}
        >
          <Image
            src={data.src}
            alt={data.title}
            priority
            width={1500}
            height={1500}
            style={{ width: '100%', height: '100%' }}
            className='group-hover:scale-90 transition-all duration-500'
          />
        </div>
      </div>
      <div className='col-span-1 flex flex-col mt-8'>
        <Text className='opacity-50 text-base tracking-[0.32px]'>
          {t('auctionPacks:auctionPack')}
        </Text>
        <Text className='font-bold text-[32px] tracking-[1.6px] my-4'>Pack {data.id} Auction</Text>
        <div>
          <Text className='font-bold flex text-[32px] items-center tracking-[0.9px]'>
            € {data.discountRate}
            <Text className='text-xl line-through text-graphite-100 tracking-[0.7px] ml-5'>
              € {data.rate}
            </Text>
          </Text>
          <Text className='opacity-50 text-sm tracking-[0.7px]'>
            {t('auctionPacks:tax_included')}
          </Text>
        </div>

        <div className='flex space-x-8 mt-12'>
          <NumberInput
            onChange={(e) => setValue(Number(e.target.value as string))}
            className='max-w-[10rem]'
            value={value}
          />
          <Button className='max-w-full rounded'>
            {t('auctionPacks:add_to_cart')}&nbsp;-&nbsp;€ {data.discountRate}{' '}
          </Button>
        </div>
      </div>
    </section>
  );
};
