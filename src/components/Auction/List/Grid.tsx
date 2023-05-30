import { IAuction } from '~/types';
import { AuctionCard, AuctionCardSkeleton } from '../../Core';

type Props = {
  isLoading: boolean;
  data: IAuction[] | undefined;
};

export const AuctionGrid = ({ data, isLoading }: Props) => {
  if (isLoading || !data) {
    return (
      <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-y-8 gap-x-6'>
        {[1, 2, 3, 4].map((item) => (
          <AuctionCardSkeleton key={item} />
        ))}
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-y-8 gap-x-6'>
      {data.map((data) => {
        return <AuctionCard key={data.name} data={data} />;
      })}
    </div>
  );
};
