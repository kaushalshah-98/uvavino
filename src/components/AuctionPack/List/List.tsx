import { IAuctionPack } from '~/types';
import { AuctionPackTile, AuctionPackTileSkeleton } from '../../Core';

type Props = {
  isLoading: boolean;
  data: IAuctionPack[] | undefined;
};

export const AuctionPackList = ({ data, isLoading }: Props) => {
  if (isLoading || !data) {
    return (
      <section className='flex flex-col space-y-4'>
        {[1, 2, 3, 4].map((item) => (
          <AuctionPackTileSkeleton key={item} />
        ))}
      </section>
    );
  }

  return (
    <section className='flex flex-col space-y-4'>
      {data.map((pack) => (
        <AuctionPackTile data={pack} key={pack.id} />
      ))}
    </section>
  );
};
