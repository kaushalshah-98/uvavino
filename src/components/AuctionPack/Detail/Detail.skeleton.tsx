import { useTranslation } from 'next-i18next';
import { Button, Text } from '~/components';
import { cx } from '~/libs';
import { useAppSelector } from '~/store';

export const AuctionPackDetailViewSkeleton = () => {
  const theme = useAppSelector((state) => state.theme.value);
  const { t } = useTranslation(['auctionPacks']);

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-x-12 mt-12 animate-pulse'>
      <div className='col-span-1'>
        <div
          className={cx(
            'border border-secondary-200 w-[90%] h-[47.5rem]',
            'group row-span-4 overflow-hidden',
            {
              'bg-graphite-200': theme === 'dark-theme',
              'bg-secondary-200': theme !== 'dark-theme',
            }
          )}
        ></div>
      </div>
      <div className='col-span-1 flex flex-col mt-8'>
        <Text className='opacity-50 text-base tracking-[0.32px]'>
          {t('auctionPacks:auctionPack')}
        </Text>

        <Text className='h-12 w-56 rounded bg-secondary-200 my-3' />
        <Text className='h-12 w-44 rounded bg-secondary-200 mb-3  ' />
        <Text className='h-6 w-32 rounded bg-secondary-200 ' />

        <div className='flex space-x-8 mt-12'>
          <Button className='py-5 bg-secondary-200 rounded max-w-[10rem]' />
          <Button className='py-5 bg-secondary-200 rounded max-w-full' />
        </div>
      </div>
    </section>
  );
};
