import { forwardRef, memo, useCallback, useState } from 'react';
import { IFormState } from '~/types';
import { cx } from '~/libs';
import Image from 'next/image';
import { Icon } from '../../Icons';

export interface PasswordInputProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'type' | 'size'> {
  formState?: IFormState;

  inputClass?: string;
  isInvalid?: boolean;
  leftIcon?: React.ReactElement;

  prefix?: string;
  rightIcon?: React.ReactNode;
}

const PasswordInputComponent = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    { prefix = '', className = '', leftIcon, rightIcon, formState, inputClass, value, ...others },
    ref
  ): JSX.Element => {
    const [focused, setFocused] = useState(false);
    const { error, touched } = formState || {};
    const [hidden, setHidden] = useState(true);

    const toggle = useCallback(() => {
      setHidden((e) => !e);
    }, []);

    return (
      <div
        className={cx(
          'flex w-full flex-row items-center justify-between ',
          'rounded-sm border border-primary-50 bg-chalk-50 h-12 px-4',
          {
            'border-tomato-200': error && touched,
            'shadow-input': focused && !error,
          },
          className
        )}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
      >
        {leftIcon && leftIcon}
        <div className={cx('flex w-full flex-row items-center space-x-6')}>
          <input
            ref={ref}
            autoComplete='off'
            type={hidden ? 'password' : 'text'}
            value={prefix && value ? `${prefix}${value}` : value}
            className={cx(
              'w-full bg-transparent',
              'leading-6 text-primary-400',
              'placeholder:font-normal placeholder:text-graphite-100',
              'placeholder:text-sm placeholder:tracking-[0.124rem]',
              inputClass
            )}
            {...others}
          />
        </div>
        <button className={cx('rounded-full hover:bg-secondary-50')} type='button' onClick={toggle}>
          <Icon name={hidden ? 'EYE_OFF' : 'EYE'} />
        </button>
      </div>
    );
  }
);

export const PasswordInput = memo(PasswordInputComponent) as typeof PasswordInputComponent;
