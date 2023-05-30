import { forwardRef, memo, useState } from 'react';
import { IFormState } from '~/types';
import { cx } from '~/libs';

export interface InputProps extends Omit<React.ComponentPropsWithRef<'input'>, 'type' | 'size'> {
  formState?: IFormState;

  inputClass?: string;
  isInvalid?: boolean;
  leftIcon?: React.ReactElement;

  prefix?: string;
  rightIcon?: React.ReactNode;

  type?: string;
}

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      prefix = '',
      type = 'text',
      className = '',
      leftIcon,
      rightIcon,
      formState,
      inputClass,
      ...others
    },
    ref
  ): JSX.Element => {
    const [focused, setFocused] = useState(false);
    const { error, touched } = formState || {};

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
            type={type}
            className={cx(
              'w-full',
              'leading-6 bg-transparent text-primary-400',
              'placeholder:font-normal placeholder:text-graphite-100',
              'placeholder:text-sm placeholder:tracking-[0.124rem]',
              inputClass
            )}
            {...others}
          />
        </div>
        {rightIcon && rightIcon}
      </div>
    );
  }
);

export const Input = memo(InputComponent) as typeof InputComponent;
