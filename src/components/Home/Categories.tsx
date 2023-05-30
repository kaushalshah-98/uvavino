import { useTranslation } from 'next-i18next';
import { CategoryCard, Text } from '~/components';

export const CategorySection = () => {
  const { t } = useTranslation(['home']);

  return (
    <>
      <Text className='text-3xl uppercase tracking-[3.36px]'>{t('home:categories.text')}</Text>

      <div className='grid grid-rows-5 grid-cols-2 grid-flow-col gap-4 w-full h-[40rem] mt-16'>
        <div className='row-span-5 grid-cols-1'>
          <CategoryCard
            title={t('home:categories.red_wines')}
            src='/images/wine-types/red-wine5.jpg'
            count={25}
          />
        </div>
        <div className='row-span-3 grid-cols-1'>
          <CategoryCard
            title={t('home:categories.white_wines')}
            titleClass='text-[32px] tracking-[1.6px]'
            src='/images/wine-types/white-wine2.webp'
            count={25}
          />
        </div>
        <div className='row-span-2 grid-cols-1 flex flex-row space-x-4'>
          <div className='w-full'>
            <CategoryCard
              titleClass='text-[32px] tracking-[1.6px]'
              title={t('home:categories.desert_wines')}
              src='/images/wine-types/red-wine4.jpg'
              count={25}
            />
          </div>
          <div className='w-full'>
            <CategoryCard
              titleClass='text-[32px] tracking-[1.6px]'
              title={t('home:categories.other_wines')}
              src='/images/wine-types/desert-wine.jpg'
              count={25}
            />
          </div>
        </div>
      </div>
    </>
  );
};
