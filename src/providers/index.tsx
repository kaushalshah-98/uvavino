import { Provider } from 'react-redux';
import { AgeModal, Cookies } from '~/components';
import { store } from '~/store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AgeModal />
      <Cookies />
      <Provider store={store}>{children}</Provider>
    </>
  );
}
