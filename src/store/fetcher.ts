import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import {
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

type AxiosArgs<T> = {
  url: string;
  method: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
  mockData?: T;
};

type Return1 = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
>;
type Return2<T> = BaseQueryFn<AxiosArgs<T>, T, unknown>;

export const fetchCustomBaseQuery = <T>({
  baseUrl = '',
  mock,
}: {
  baseUrl: string;
  mock?: boolean;
}): Return1 | Return2<T> => {
  if (!mock) {
    return fetchBaseQuery({ baseUrl });
  }
  const res = async ({ url, method, data, params, mockData }: AxiosArgs<T>) => {
    try {
      if (mockData && mock) {
        const newRes = await new Promise((res) => setTimeout(() => res(mockData), 2000));
        return { data: newRes as T };
      }
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data as T };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

  return res;
};
