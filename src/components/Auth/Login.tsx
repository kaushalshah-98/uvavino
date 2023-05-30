import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Button, Icon, Input, InputWrapper, PasswordInput, Text } from '~/components';

type ILoginForm = {
  email: string;
  password: string;
};

const schema: Yup.ObjectSchema<ILoginForm> = Yup.object()
  .shape({
    email: Yup.string()
      .email('Invalid email ID. Please try again')
      .required('Email is Required Field'),
    password: Yup.string().required('Password is Required Field'),
  })
  .required();

export const LoginForm = (_props: React.ComponentProps<'div'>) => {
  const { t } = useTranslation(['auth']);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<ILoginForm> = (data) => console.log(data);

  return (
    <div className='rounded bg-chalk-50 px-12 py-16 shadow-card mx-auto w-[50%]'>
      <Text className='uppercase text-[32px] tracking-[0.3rem] font-medium leading-4'>
        {t('auth:form.sign_in')}
      </Text>

      <section className='flex mt-10 flex-col space-y-1'>
        <InputWrapper
          label={t('auth:form.username_email')}
          errorMessage={errors.email?.message}
          isInvalid={!!(errors.email && touchedFields.email)}
        >
          <Input
            formState={{ error: !!errors.email, touched: touchedFields.email }}
            placeholder={t('auth:form.enter_username')}
            {...register('email')}
          />
        </InputWrapper>

        <InputWrapper
          label='Password'
          errorMessage={errors.password?.message}
          isInvalid={!!(errors.password && touchedFields.password)}
        >
          <PasswordInput
            formState={{ error: !!errors.password, touched: touchedFields.password }}
            placeholder={t('auth:form.enter_password')}
            {...register('password')}
          />
        </InputWrapper>
      </section>
      <div className='w-full'>
        <Text className='text-right cursor-pointer hover:underline block tracking-[1.9px] -mt-3 text-sm'>
          {t('auth:form.forgot_password')}
        </Text>
      </div>
      <section className='mt-8 flex flex-col space-y-12'>
        <div className='flex flex-row text-chalk-50 space-x-10 items-center'>
          <button className='p-3 flex justify-center items-center bg-custom-facebook rounded-full'>
            <Icon className='w-auto h-auto' name='FACEBOOK' width={25} height={25} />
          </button>
          <button className='p-3 flex justify-center items-center bg-custom-instagram rounded-full'>
            <Icon className='w-auto h-auto' name='INSTAGRAM' width={25} height={25} />
          </button>
          <button className='p-3 flex justify-center items-center bg-custom-twitter rounded-full'>
            <Icon className='w-auto h-auto' name='TWITTER' width={25} height={25} />
          </button>
        </div>

        <Button
          type='submit'
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
          className='uppercase'
        >
          {t('auth:form.sign_in')}
        </Button>
      </section>
    </div>
  );
};
