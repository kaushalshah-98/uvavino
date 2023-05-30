import { ComponentPropsWithoutRef, memo } from 'react';
import { cx } from '~/libs';
import { Text } from '../../Display';

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  label?: string;
  required?: boolean;
}

const LabelComponent = ({ label = '', required = false, className }: LabelProps): JSX.Element => {
  return (
    <label className={cx('flex flex-row items-center')} htmlFor={label}>
      <Text
        className={cx(
          'max-w-fit tracking-[0.14rem] truncate text-base text-primary-300',
          className
        )}
      >
        {label}
      </Text>
      {required && <span className='text-primary-300'>*</span>}
    </label>
  );
};

export const Label = memo(LabelComponent) as typeof LabelComponent;
