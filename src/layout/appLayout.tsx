import { cx } from '../libs';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { useLoadResources } from '~/hooks';

export const AppLayout = ({ children, className }: React.ComponentProps<'main'>) => {
  useLoadResources();

  return (
    <main className={cx('h-full w-full', className)}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
