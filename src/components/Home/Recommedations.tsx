import { useTranslation } from 'next-i18next';
import {
  AuctionCard,
  AuctionCardSkeleton,
  Icon,
  Text,
  WineCard,
  WineCardSkeleton,
} from '~/components';
import { API } from '~/store/api';

export const Recommendations = () => {
  const { t } = useTranslation(['auctions']);
  const { isLoading, isFetching, data, error } = API.auctionApi.useGetAuctionsQuery({
    page: 1,
    limit: 4,
  });

  if (error) {
    return (
      <div className='flex h-full justify-center items-center space-y-6 flex-col'>
        <Icon name='EMPTY' />
        <Text className='text-2xl font-medium'>{t('auctions:error')}</Text>
      </div>
    );
  }

  if (data && !data.data.length) {
    return (
      <div className='flex h-full justify-center items-center space-y-6 flex-col'>
        <Icon name='EMPTY' />
        <Text className='text-2xl font-medium'>{t('auctions:no_auctions_found')}</Text>
      </div>
    );
  }

  if (isLoading || isFetching || !data) {
    return (
      <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 gap-y-8 gap-x-8'>
        {[1, 2, 3, 4].map((item) => (
          <WineCardSkeleton key={item} />
        ))}
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 gap-y-8 gap-x-8'>
      {data.data.slice(0, 4).map((data) => {
        return <WineCard key={data.name} data={data} />;
      })}
    </div>
  );
};

export const RecommendationSection = () => {
  const { t } = useTranslation(['home']);

  return (
    <section className='flex flex-col space-y-16 px-20'>
      <Text className='text-3xl justify-center flex uppercase tracking-[3.36px]'>
        {t('home:recommended')}
      </Text>
      <Recommendations />
    </section>
  );
};
