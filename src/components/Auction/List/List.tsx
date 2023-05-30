import { IAuction } from '~/types';
import { AuctionTile, AuctionTileSkeleton } from '../../Core';

type Props = {
  isLoading: boolean;
  data: IAuction[] | undefined;
};

export const AuctionList = ({ data, isLoading }: Props) => {
  if (isLoading || !data) {
    return (
      <div className='flex flex-col space-y-6'>
        {[1, 2, 3, 4].map((item) => (
          <AuctionTileSkeleton key={item} />
        ))}
      </div>
    );
  }

  return (
    <div className='flex flex-col space-y-6'>
      {data.map((auction) => {
        return <AuctionTile data={auction} key={auction.name} />;
      })}
    </div>
  );
};
