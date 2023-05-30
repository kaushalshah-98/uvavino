import { IAuctionPack } from '~/types';

export const auctionPacks: IAuctionPack[] = [
  { id: 1, title: 'Pack 1 Auction', rate: 3.7, discountRate: 5, src: '/images/auction-pack/1.png' },
  {
    id: 3,
    title: 'Pack 3 Auction',
    rate: 8.7,
    discountRate: 10,
    src: '/images/auction-pack/2.png',
  },
  {
    id: 5,
    title: 'Pack 5 Auction',
    rate: 10.7,
    discountRate: 12,
    src: '/images/auction-pack/3.png',
  },
  {
    id: 10,
    title: 'Pack 10 Auction',
    rate: 11.7,
    discountRate: 15,
    src: '/images/auction-pack/4.png',
  },
];
