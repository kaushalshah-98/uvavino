import { cx } from '~/libs';
import { Text } from '../../Display';
import { Button } from '../../Form';
import { Icon } from '../../Icons';

export const AuctionTileSkeleton = () => {
  return (
    <div
      className={cx(
        'rounded border border-secondary-200 bg-chalk-50',
        'h-[17rem] hover:shadow-card overflow-hidden',
        'group grid grid-cols-4 animate-pulse'
      )}
    >
      <div className='col-span-1 overflow-hidden relative'>
        <div className='h-full bg-secondary-300'></div>
      </div>

      <div className='p-6 col-span-3 flex flex-col justify-between'>
        <div className='flex items-center justify-between'>
          <Text className='h-4 w-80 rounded bg-secondary-300 ' />
          <Icon name='HEART' />
        </div>
        <Text className='h-3 w-72 rounded bg-secondary-300' />

        <div className='flex my-4'>
          <Text className='h-3 w-56 rounded bg-secondary-300' />
        </div>

        <Text className='h-3 w-36 rounded bg-secondary-300' />
        <Text className='h-3 w-32 rounded bg-secondary-300' />
        <div className='flex justify-between items-end'>
          <Text className='h-3 w-32 rounded bg-secondary-300' />
          <Button className='mt-6 py-5 bg-secondary-300 rounded' />
        </div>
      </div>
    </div>
  );
};
