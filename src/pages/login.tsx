import { GetStaticProps } from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Button, LoginForm, Text } from '~/components';
import { ROUTES } from '~/config';
import { AppLayout } from '~/layout';

const Login = () => {
  const { t } = useTranslation(['auth']);
  return (
    <AppLayout>
      <div className='bg-secondary-50 flex justify-center items-center py-12 sm:px-6 lg:px-8'>
        <div className='flex items-start h-full w-full pb-24 pt-36 justify-between px-16 space-x-16'>
          <LoginForm />
          <div className='rounded bg-chalk-50 px-12 py-16 shadow-card mx-auto w-[50%]'>
            <Text font='playfair' className={'text-5xl font-bold tracking-[0.35rem] leading-4'}>
              {t('auth:not_a_member')}
              <span className={'block text-primary-300 pt-5'}>{t('auth:join_now')}</span>
            </Text>
            <div className='flex mt-20 flex-col space-y-6 max-w-[34rem]'>
              <Text className='whitespace-pre-line text-xl 2xl:text-2xl font-medium'>
                {t('auth:welcome.text1')}
              </Text>
              <Text className='whitespace-pre-line text-xl 2xl:text-2xl font-medium'>
                {t('auth:welcome.text2')}
              </Text>
            </div>
            <Link href={ROUTES.REGISTER}>
              <Button className='uppercase mt-16'>{t('auth:register')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps<SSRConfig> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'header',
        'cookies',
        'confirmModal',
        'footer',
        'auth',
      ])),
    },
  };
};

export default Login;
