import { GetStaticProps } from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import cx from 'clsx';
import { AppLayout } from '~/layout';
import { Button, AuctionFilters, FeatureHeader, Icon, Text, AuctionUI } from '~/components';
import { useState } from 'react';
import { VIEW_MODE } from '~/config';
import { noop } from '~/utils';

const Auctions = () => {
  const [viewType, setViewType] = useState<VIEW_MODE>(VIEW_MODE.GRID);

  return (
    <AppLayout className='bg-secondary-50'>
      <div className='py-40 bg-secondary-50 px-24'>
        <FeatureHeader
          activePage='Wine'
          onFilterChange={noop}
          onModeChange={(mode) => setViewType(mode)}
          title='Auctions'
        >
          <Button
            className='py-2.5 max-w-[11rem] rounded'
            textClass={cx('flex flex-row justify-center items-center space-x-3')}
          >
            <Icon width={15} height={15} name='PLUS'></Icon>
            <Text className='text-chalk-50'>Create auctions</Text>
          </Button>
        </FeatureHeader>
        <div className='grid my-5 grid-cols-4'>
          <AuctionFilters />
          <div className='col-span-3 ml-10'>
            <AuctionUI viewType={viewType} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps<SSRConfig> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['header', 'footer', 'home', 'auctions'])),
    },
  };
};

export default Auctions;
