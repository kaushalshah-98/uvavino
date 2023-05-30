import { Trans, useTranslation } from 'next-i18next';
import { LANGUAGES } from '~/config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import type { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import type { SSRConfig } from 'next-i18next';

const Translate = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common']);
  const router = useRouter();

  const changeLanguage = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <div className='flex h-screen flex-col items-center justify-center space-y-5'>
      <button
        aria-label='translate'
        className='bg-green-200 p-2'
        type='button'
        onClick={() => changeLanguage(LANGUAGES.PORTUGUESE)}
      >
        pt
      </button>
      <button
        aria-label='translate'
        className='bg-red-200 p-2'
        type='button'
        onClick={() => changeLanguage(LANGUAGES.ENGLISH)}
      >
        en
      </button>
      <h1>{t('welcome.title', { framework: 'React + Webpack' })}</h1>
      <h1>{t('description.part2')}</h1>
      <Trans i18nKey='description.part1'>
        To get started, edit <code>src/App.js</code> and save to reload.
      </Trans>
    </div>
  );
};

export default Translate;

export const getStaticProps: GetStaticProps<SSRConfig> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
