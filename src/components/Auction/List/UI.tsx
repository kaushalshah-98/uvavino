import { useTranslation } from 'next-i18next';
import { VIEW_MODE } from '~/config';
import { AuctionGrid } from './Grid';
import { AuctionList } from './List';
import { useState } from 'react';
import { API } from '~/store/api';
import { Icon, Pagination, Text } from '../../Core';

type Props = {
  viewType: VIEW_MODE;
};

export const AuctionUI = ({ viewType }: Props) => {
  const { t } = useTranslation(['auctions']);
  const [page, setpage] = useState(1);
  const { isLoading, isFetching, data, error } = API.auctionApi.useGetAuctionsQuery({
    page,
    limit: 10,
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

  const views: Record<VIEW_MODE, JSX.Element> = {
    [VIEW_MODE.GRID]: <AuctionGrid data={data?.data} isLoading={isLoading || isFetching} />,
    [VIEW_MODE.LIST]: <AuctionList data={data?.data} isLoading={isLoading || isFetching} />,
  };

  return (
    <>
      {views[viewType]}
      <br />
      <br />
      <br />
      <br />
      <Pagination
        page={page}
        totalRecords={40}
        numbersToShow={4}
        changePage={(newPage) => setpage(newPage)}
      />
    </>
  );
};
