import { cx } from '~/libs';
import { Text } from '../../Display';
import { Button } from '../../Form';

export const AuctionPackCardSkeleton = () => {
  return (
    <div
      className={cx(
        'rounded bg-chalk-50 shadow animate-pulse',
        'group grid grid-rows-6',
        'h-[35rem] overflow-hidden',
        'hover:shadow-card grid'
      )}
    >
      <div className='row-span-4 overflow-hidden'>
        <div className='h-full bg-secondary-300'></div>
      </div>
      <div className='row-span-2 flex flex-col justify-evenly pt-2 pb-4 px-4'>
        <Text className='h-4 w-64 rounded bg-secondary-300 ' />
        <Text className='h-3 w-48 rounded bg-secondary-300' />
        <Button className='mt-6 py-5 bg-secondary-300 rounded max-w-full' />
      </div>
    </div>
  );
};
