import { cx } from '~/libs';
import { Text } from '../../Display';
import { Button } from '../../Form';

export const AuctionPackTileSkeleton = () => {
  return (
    <div
      className={cx(
        'rounded border border-secondary-200 bg-chalk-50',
        'h-[16rem] hover:shadow-card overflow-hidden',
        'group grid grid-cols-4 animate-pulse'
      )}
    >
      <div className='col-span-1 overflow-hidden relative'>
        <div className='h-full bg-secondary-300'></div>
      </div>

      <div className='p-6 col-span-3 flex flex-col justify-evenly'>
        <Text className='h-6 w-80 rounded bg-secondary-300 ' />

        <div className='flex justify-between items-end'>
          <Text className='h-4 w-64 rounded bg-secondary-300' />
          <Button className='mt-6 py-5 bg-secondary-300 rounded' />
        </div>
      </div>
    </div>
  );
};
