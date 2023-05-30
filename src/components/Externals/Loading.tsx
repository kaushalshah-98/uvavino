import cx from 'clsx';

export const Loading = () => (
  <div className={cx('flex h-screen w-full items-center justify-center')}>
    <div className='flex w-[60rem] flex-col items-center justify-center space-y-8 rounded-md bg-chalk-50 py-56 shadow-xl'>
      <span className='text-4xl font-medium text-graphite-400'>....</span>
    </div>
  </div>
);
