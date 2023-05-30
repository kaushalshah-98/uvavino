import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Button, Checkbox, Input, InputWrapper, PasswordInput, Text } from '~/components';

type IRegisterForm = {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  termCondition: boolean;
};

const schema: Yup.ObjectSchema<IRegisterForm> = Yup.object()
  .shape({
    email: Yup.string()
      .email('Invalid email ID. Please try again')
      .required('Email is Required Field'),
    userName: Yup.string().required('Username is Required Field'),
    firstName: Yup.string().required('FirstName is Required Field'),
    lastName: Yup.string().required('LastName is Required Field'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
    termCondition: Yup.boolean().required('').oneOf([true]),
  })
  .required();

export const RegisterForm = () => {
  const { t } = useTranslation(['auth']);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<IRegisterForm> = (data) => console.log(data);

  return (
    <div className='rounded bg-chalk-50 px-12 py-16 shadow-card mx-auto w-[50%]'>
      <Text className='uppercase text-[32px] tracking-[0.3rem] font-medium leading-4'>
        {t('auth:register')}
      </Text>

      <section className='flex mt-10 flex-col space-y-1'>
        <InputWrapper
          label={t('auth:form.username_email')}
          errorMessage={errors.userName?.message}
          isInvalid={!!(errors.userName && touchedFields.userName)}
        >
          <Input
            formState={{ error: !!errors.userName, touched: touchedFields.userName }}
            placeholder={t('auth:form.enter_username')}
            {...register('userName')}
          />
        </InputWrapper>

        <InputWrapper
          label={t('auth:form.firstName')}
          errorMessage={errors.firstName?.message}
          isInvalid={!!(errors.firstName && touchedFields.firstName)}
        >
          <Input
            formState={{ error: !!errors.firstName, touched: touchedFields.firstName }}
            placeholder={t('auth:form.enter_firstName')}
            {...register('firstName')}
          />
        </InputWrapper>

        <InputWrapper
          label={t('auth:form.lastName')}
          errorMessage={errors.lastName?.message}
          isInvalid={!!(errors.lastName && touchedFields.lastName)}
        >
          <Input
            formState={{ error: !!errors.lastName, touched: touchedFields.lastName }}
            placeholder={t('auth:form.enter_lastName')}
            {...register('lastName')}
          />
        </InputWrapper>

        <InputWrapper
          label={t('auth:form.email')}
          errorMessage={errors.email?.message}
          isInvalid={!!(errors.email && touchedFields.email)}
        >
          <Input
            formState={{ error: !!errors.email, touched: touchedFields.email }}
            placeholder={t('auth:form.enter_email')}
            {...register('email')}
          />
        </InputWrapper>

        <InputWrapper
          label={t('auth:form.password')}
          errorMessage={errors.password?.message}
          isInvalid={!!(errors.password && touchedFields.password)}
        >
          <PasswordInput
            formState={{ error: !!errors.password, touched: touchedFields.password }}
            placeholder={t('auth:form.enter_password')}
            {...register('password')}
          />
        </InputWrapper>

        <InputWrapper
          label={t('auth:form.confirm_assword')}
          errorMessage={errors.confirmPassword?.message}
          isInvalid={!!(errors.confirmPassword && touchedFields.confirmPassword)}
        >
          <PasswordInput
            formState={{ error: !!errors.confirmPassword, touched: touchedFields.confirmPassword }}
            placeholder={t('auth:form.confirm_your_password')}
            {...register('confirmPassword')}
          />
        </InputWrapper>
      </section>
      <div className='mb-12 mt-2 flex'>
        <Checkbox {...register('termCondition')}>
          <Text className='block tracking-[1.9px] text-sm text-primary-100'>
            {t('auth:accept')}
            &nbsp;
            <Link href='#'>
              <Text className='border-b-2 border-primary-300 text-primary-300'>
                {t('auth:terms_and_condition')}
              </Text>
            </Link>
            &nbsp;and&nbsp;
            <Link href='#'>
              <Text className='border-b-2 border-primary-300 font-medium text-primary-300'>
                {t('auth:privacy_policy')}
              </Text>
            </Link>
            .
          </Text>
        </Checkbox>
      </div>
      <Button
        type='submit'
        disabled={!isValid}
        onClick={handleSubmit(onSubmit)}
        className='uppercase'
      >
        {t('auth:register')}
      </Button>
    </div>
  );
};
