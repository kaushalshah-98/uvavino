import { createApi } from '@reduxjs/toolkit/query/react';
import { Robot } from '~/types';
import { fetchCustomBaseQuery } from '../fetcher';
import { envVars } from '~/config';

export const robotApi = createApi({
  reducerPath: 'robotApi',
  baseQuery: fetchCustomBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    mock: envVars.mock,
  }),
  tagTypes: ['robots'],
  endpoints: (builder) => ({
    getRobots: builder.query<Robot[], null>({
      query: () => ({ url: 'users' }),
    }),
    getRobotsById: builder.query<Robot, { id: string }>({
      query: ({ id }) => ({ url: `users/${id}` }),
    }),
  }),
});

export const { useGetRobotsQuery, useGetRobotsByIdQuery } = robotApi;
