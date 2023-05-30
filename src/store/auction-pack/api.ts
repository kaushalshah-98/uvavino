import { createApi } from '@reduxjs/toolkit/query/react';
import { envVars } from '~/config';
import { auctionPacks } from '~/mocks';
import {
  IGetAuctionPackByIdRequest,
  IGetAuctionPackByIdResposne,
  IGetAuctionPacksResponse,
} from '~/types/auction-pack';
import { fetchCustomBaseQuery } from '../fetcher';

export const auctionPackApi = createApi({
  reducerPath: 'auctionPackApi',
  refetchOnMountOrArgChange: 30,
  // keepUnusedDataFor: 5,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchCustomBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    mock: envVars.mock,
  }),
  tagTypes: ['auction-pack'],
  endpoints: (builder) => ({
    getAuctionPacks: builder.query<IGetAuctionPacksResponse, null>({
      query: () => ({ url: 'auction-pack', mockData: { message: '', data: auctionPacks } }),
    }),
    getAuctionPacksById: builder.query<IGetAuctionPackByIdResposne, IGetAuctionPackByIdRequest>({
      query: ({ id }) => ({
        url: `auction-pack/${id}`,
        mockData: { message: '', data: auctionPacks.find((a) => a.id === id) },
      }),
    }),
  }),
});
