import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchCustomBaseQuery } from '../fetcher';
import { auctions } from '~/mocks';
import {
  IGetAuctionByIdRequest,
  IGetAuctionByIdResposne,
  IGetAuctionsRequest,
  IGetAuctionsResponse,
} from '~/types';
import { envVars } from '~/config';
import { convertToQuery } from '~/utils';

export const auctionApi = createApi({
  reducerPath: 'auctionApi',
  // refetchOnMountOrArgChange: 30,
  keepUnusedDataFor: 5,
  // refetchOnFocus: true,
  // refetchOnReconnect: true,
  baseQuery: fetchCustomBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    mock: envVars.mock,
  }),
  tagTypes: ['auctions'],
  endpoints: (builder) => ({
    getAuctions: builder.query<IGetAuctionsResponse, IGetAuctionsRequest>({
      query: (params) => {
        const query = convertToQuery(params);
        return { url: `auctions?${query}`, mockData: { message: '', data: auctions } };
      },
    }),
    getAuctionsById: builder.query<IGetAuctionByIdResposne, IGetAuctionByIdRequest>({
      query: ({ id }) => ({
        url: `auctions/${id}`,
        mockData: { message: '', data: auctions.filter((a) => a.id === id) },
      }),
    }),
  }),
});
