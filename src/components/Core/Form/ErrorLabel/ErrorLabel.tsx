import { ComponentPropsWithoutRef, memo } from 'react';
import { cx } from '~/libs';
import { Text } from '../../Display';

export interface ErrorLabelProps extends ComponentPropsWithoutRef<'span'> {
  className?: string;
  errorMessage?: string;
}

const ErrorLabelComponent = ({
  errorMessage = '',
  className = '',
}: ErrorLabelProps): JSX.Element => {
  return <Text className={cx('h-5 text-xs text-tomato-200 ', className)}>{errorMessage}</Text>;
};

export const ErrorLabel = memo(ErrorLabelComponent) as typeof ErrorLabelComponent;
