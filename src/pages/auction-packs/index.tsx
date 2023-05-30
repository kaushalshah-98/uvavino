import { GetStaticProps } from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { AuctionPackUI, FeatureHeader } from '~/components';
import { VIEW_MODE } from '~/config';
import { AppLayout } from '~/layout';
import { noop } from '~/utils';

const AuctionPack = () => {
  const [viewType, setViewType] = useState<VIEW_MODE>(VIEW_MODE.GRID);
  const { t } = useTranslation(['auctionPacks']);

  return (
    <AppLayout className='bg-secondary-50'>
      <div className='py-40 bg-secondary-50 px-24'>
        <FeatureHeader
          onFilterChange={noop}
          onModeChange={(mode) => setViewType(mode)}
          title={t('auctionPacks:auctionPacks')}
        />
        <div className='mt-12'>
          <AuctionPackUI viewType={viewType} />
        </div>
      </div>
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps<SSRConfig> = async ({ locale }) => {
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
