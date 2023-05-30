import { IAuctionPack } from './models';
import { IResponse } from './response';

/**
 * get auctions packs
 */
export interface IGetAuctionPacksRequest {
  page: number;
  limit: number;
}

export type IGetAuctionPacksResponse = IResponse<IAuctionPack[]>;

/**
 * get auction pack by id
 */
export interface IGetAuctionPackByIdRequest {
  id: number;
}

export type IGetAuctionPackByIdResposne = IResponse<IAuctionPack>;
