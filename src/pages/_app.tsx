import { appWithTranslation } from 'next-i18next';
import { Providers } from '~/providers';
import { Maintenance } from '~/components';
import { envVars } from '~/config';
import nextI18nConfig from '../../next-i18next.config';
import type { AppProps } from 'next/app';
import '~/styles/index.css';

function App({ Component, pageProps }: AppProps) {
  if (envVars.underMaintainence) {
    return <Maintenance />;
  }

  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default appWithTranslation(App, nextI18nConfig);
