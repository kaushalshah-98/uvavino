import { forwardRef, memo } from 'react';
import { cx } from '~/libs';
import { Text } from '../../Display';

export interface CheckboxProps extends Omit<React.ComponentPropsWithRef<'input'>, 'type' | 'size'> {
  elementRef?: React.ForwardedRef<HTMLInputElement>;
  inputClass?: string;
  label?: React.ReactNode;
  labelClass?: string;
}

const CheckboxComponent = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, inputClass, labelClass, label = '', elementRef, children, ...others },
    ref
  ): JSX.Element => {
    return (
      <div className={cx('flex flex-row items-center space-x-3', className)}>
        <input
          ref={ref}
          type='checkbox'
          className={cx(
            'text-primary-300 form-checkbox h-4 w-4 cursor-pointer rounded-sm',
            'border border-primary-50 focus:outline-0 focus:ring-0',
            inputClass
          )}
          {...others}
        />
        {children ?? <Text className={cx('text-lg', labelClass)}>{label}</Text>}
      </div>
    );
  }
);

export const Checkbox = memo(CheckboxComponent) as typeof CheckboxComponent;
