import { ComponentPropsWithoutRef, memo, ReactNode } from 'react';
import { cx } from '~/libs';
import { ErrorLabel } from '../ErrorLabel/ErrorLabel';
import { Label } from '../Label/Label';

export interface InputWrapperProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  errorClass?: string;

  errorMessage?: string;
  isInvalid?: boolean;

  label?: string;
  labelClass?: string;

  labelComponent?: ReactNode;
  required?: boolean;
}

const InputWrapperComponent = ({
  className = '',
  label = '',
  labelComponent,
  isInvalid = false,
  required = false,
  errorMessage,
  children,
  errorClass,
  labelClass,
}: InputWrapperProps): JSX.Element => {
  const LabelProps = {
    isInvalid,
    required,
    label,
    className: labelClass,
  };
  const ErrorProps = { errorMessage: isInvalid ? errorMessage : '', className: errorClass };

  return (
    <div className={cx('flex flex-col', className)}>
      {labelComponent ? labelComponent : label && <Label {...LabelProps} />}
      <div className='pt-1 pb-1'>{children}</div>
      <ErrorLabel {...ErrorProps} />
    </div>
  );
};

export const InputWrapper = memo(InputWrapperComponent) as typeof InputWrapperComponent;
