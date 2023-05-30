import { Lato } from 'next/font/google';
import cx from 'clsx';
import { useAppDispatch, useAppSelector } from '~/store';
import { toggleTheme } from '~/store/actions';

const lato = Lato({ weight: ['100', '300', '400', '700', '900'], subsets: ['latin'] });

export default function Home() {
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <main
      className={cx(
        'flex flex-col items-center justify-between',
        'transition-colors duration-700 ease-in-out',
        'min-h-screen bg-secondary-100 p-24',
        theme
      )}
    >
      <span className={cx('font-medium text-8xl text-primary-200', lato.className)}>
        UVA
        <span className={cx('font-light text-8xl text-primary-200', lato.className)}>Vino</span>
      </span>

      <button
        onClick={handleChangeTheme}
        className='bg-primary-200 text-chalk-100 rounded-lg px-8 text-2xl py-2'
      >
        ChangeTheme
      </button>
    </main>
  );
}
