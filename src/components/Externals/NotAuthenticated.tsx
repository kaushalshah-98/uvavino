import cx from 'clsx';
import Link from 'next/link';
import { ROUTES } from '~/config';

export const NotAuthenticated = () => (
  <div
    className={cx(
      'flex h-screen w-full items-center justify-center',
      'bg-[url("/images/homepage/loader.jpg")] bg-cover bg-right-top bg-no-repeat'
    )}
  >
    <div className='flex w-[60rem] flex-col items-center justify-center space-y-8 rounded-md bg-chalk-50 py-32 shadow-xl'>
      <h1 className='text-9xl font-medium text-cherry-50'>403</h1>
      <h1 className='text-4xl font-medium text-graphite-400'>You are Not authorized</h1>

      <Link href={ROUTES.MAIN}>
        <button className='mt-6 rounded-md bg-secondary-200 px-8 py-3 text-xl text-chalk-50 shadow'>
          Go to HomePage
        </button>
      </Link>
    </div>
  </div>
);
