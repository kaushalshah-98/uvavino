import cx from 'clsx';
import Link from 'next/link';
import { ROUTES } from '~/config';

export const ErrorComponent = () => (
  <div className={cx('flex h-screen w-full items-center justify-center')}>
    <div className='flex w-[60rem] flex-col items-center justify-center space-y-8 rounded-md bg-chalk-50 py-32 shadow-xl'>
      <div className='text-center'>
        <h1 className='text-3xl text-graphite-400'>We are sorry for the trouble</h1>
        <h1 className='text-xl  text-graphite-300'>Our team is already fixing this error</h1>
      </div>
      <Link href={ROUTES.MAIN}>
        <button className='mt-6 rounded-md bg-secondary-200 px-8 py-3 text-xl text-chalk-50 shadow'>
          Go to HomePage
        </button>
      </Link>
    </div>
  </div>
);
