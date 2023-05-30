import { IAuction } from './models';
import { IResponse } from './response';

/**
 * get auctions
 */
export interface IGetAuctionsRequest {
  page: number;
  limit: number;
}

export type IGetAuctionsResponse = IResponse<IAuction[]>;

/**
 * get auction pack by id
 */
export interface IGetAuctionByIdRequest {
  id: number;
}

export type IGetAuctionByIdResposne = IResponse<IAuction>;
