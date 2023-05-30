import cx from 'clsx';

export const Maintenance = () => (
  <div className={cx('flex h-screen w-full items-center justify-center')}>
    <div className='flex w-[60rem] flex-col items-center justify-center space-y-8 rounded-md bg-chalk-50 py-32 shadow-xl'>
      <div className='text-center'>
        <h1 className='text-3xl text-graphite-400'>We are sorry for the trouble</h1>
        <h1 className='text-xl  text-graphite-300'>The site is under maintaindence</h1>
      </div>
    </div>
  </div>
);
