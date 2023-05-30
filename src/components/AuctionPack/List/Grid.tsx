import { IAuctionPack } from '~/types';
import { AuctionPackCard, AuctionPackCardSkeleton } from '../../Core';

type Props = {
  isLoading: boolean;
  data: IAuctionPack[] | undefined;
};

export const AuctionPackGrid = ({ data, isLoading }: Props) => {
  if (isLoading || !data) {
    return (
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {[1, 2, 3, 4].map((item) => (
          <AuctionPackCardSkeleton key={item} />
        ))}
      </section>
    );
  }

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {data.map((pack) => (
        <AuctionPackCard data={pack} key={pack.id} />
      ))}
    </section>
  );
};
