import { ChangeEvent, memo, useState } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { IFormState } from '~/types';
import { cx } from '~/libs';

export interface NumberInputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  elementRef?: React.ForwardedRef<HTMLInputElement>;
  formState?: IFormState;
  inputClass?: string;
  isInvalid?: boolean;
  prefix?: string;
}

const NumberInputComponent = ({
  prefix = '',
  elementRef,
  className = '',
  formState,
  inputClass,
  onChange,
  name,
  max = 100,
  value = 0,
  ...others
}: NumberInputProps): JSX.Element => {
  const [focused, setFocused] = useState(false);
  const { error, touched } = formState || {};

  const onDecrease = () => {
    if (Number(value) === 0) {
      return;
    }
    if (onChange) {
      onChange({
        target: { name: name as string, value: value ? Number(value) - 1 : 1 },
      } as unknown as ChangeEvent<HTMLInputElement>);
    }
  };

  const onIncrease = () => {
    if (onChange) {
      onChange({
        target: { name: name as string, value: value < max ? Number(value) + 1 : value ?? 1 },
      } as unknown as ChangeEvent<HTMLInputElement>);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (onChange && value <= max) {
      onChange({ ...e, target: { ...e.target, value } });
    }
  };

  return (
    <div
      className={cx(
        'flex w-full select-none flex-row items-center',
        'rounded border-2 border-secondary-200 bg-transparent h-12 px-4',
        {
          'border-tomato-200': error && touched,
          'shadow-input': focused && !error,
        },
        className
      )}
      onBlur={() => setFocused(false)}
      onFocus={() => setFocused(true)}
    >
      <BiMinus
        className={cx('w-full cursor-pointer justify-end text-right text-primary-100', {
          'opacity-50 cursor-not-allowed': Number(value) <= 0,
        })}
        onClick={onDecrease}
      />
      <div
        className={cx('flex w-full flex-row items-center space-x-6', 'justify-center text-center')}
      >
        <input
          ref={elementRef}
          autoComplete='off'
          name={name}
          type='number'
          value={prefix && value ? `${prefix}${value}` : value}
          className={cx(
            'w-full',
            'leading-6 bg-transparent text-primary-400 text-lg appearance-none text-center',
            'placeholder:font-normal placeholder:text-graphite-100',
            'placeholder:text-sm placeholder:tracking-[0.124rem]',
            inputClass
          )}
          onChange={handleChange}
          {...others}
        />
      </div>
      <BiPlus
        className={cx('w-full cursor-pointer justify-end text-right text-primary-100', {
          'opacity-50 cursor-not-allowed': Number(value) === max,
        })}
        onClick={onIncrease}
      />
    </div>
  );
};

export const NumberInput = memo(NumberInputComponent) as typeof NumberInputComponent;
