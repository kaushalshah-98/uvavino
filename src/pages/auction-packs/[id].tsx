import { GetStaticProps } from 'next';
import { SSRConfig, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { AuctionPackDetailView, Breadcrumb, Icon, Text } from '~/components';
import { AppLayout } from '~/layout';
import { API } from '~/store/api';

const AuctionPack = () => {
  const { t } = useTranslation(['auctionPacks']);
  const router = useRouter();
  const auctionPackId = router.query?.id;

  const { isLoading, isFetching, data, error } = API.auctionPackApi.useGetAuctionPacksByIdQuery(
    { id: Number(auctionPackId) as number },
    { skip: !auctionPackId }
  );

  if (error) {
    return (
      <div className='flex h-full justify-center items-center space-y-6 flex-col'>
        <Icon name='EMPTY' />
        <Text className='text-2xl font-medium'>{t('auctionPacks:error')}</Text>
      </div>
    );
  }

  return (
    <AppLayout className='bg-secondary-50'>
      <div className='py-40 bg-secondary-50 px-24'>
        <section className='flex justify-between items-center'>
          <Breadcrumb activePage={`Pack ${data?.data.id} Auction`} />
        </section>
        <AuctionPackDetailView data={data?.data} isLoading={isLoading || isFetching} />
      </div>
    </AppLayout>
  );
};

export const getServerSideProps: GetStaticProps<SSRConfig> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'header',
        'footer',
        'home',
        'auctionPacks',
      ])),
    },
  };
};

export default AuctionPack;
