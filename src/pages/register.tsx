import { GetStaticProps } from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { LoginForm, RegisterForm } from '~/components';
import { AppLayout } from '~/layout';

const Register = () => {
  return (
    <AppLayout>
      <div className='bg-secondary-50 flex justify-center items-center py-12 sm:px-6 lg:px-8'>
        <div className='flex items-start w-full pb-24 pt-36 justify-between px-16 space-x-16'>
          <LoginForm />
          <RegisterForm />
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

export default Register;
