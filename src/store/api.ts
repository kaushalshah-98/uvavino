/**
 * export all store api's
 */

import { robotApi } from './robots/api';
import { auctionApi } from './auctions/api';
import { auctionPackApi } from './auction-pack/api';

export const API = {
  robotApi,
  auctionPackApi,
  auctionApi,
};
