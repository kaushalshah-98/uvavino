import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { cx } from '~/libs';
import { debounce } from '~/utils';
import { Icon } from '../../Icons';

export interface SearchInputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'onChange'> {
  contentClass?: string;
  inputClass?: string;

  isInvalid?: boolean;
  leftIconClass?: string;
  onChange?: (value: string) => void;

  rightIconClass?: string;

  onStateChange?: (state: 'focus' | 'blur') => void;

  type?: string;
}

const SearchInputComponent = ({
  type = 'text',
  className = '',
  contentClass,
  leftIconClass,
  onChange,
  onStateChange,
  inputClass,
  ...others
}: SearchInputProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [focused, setFocused] = useState(false);

  const onHandleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (onChange) onChange(value);
      (inputRef.current as HTMLInputElement).value = value;
    },
    [onChange]
  );

  const debouncedChangeHandler = useMemo(() => debounce(onHandleChange, 500), [onHandleChange]);

  // Stop the invocation of the debounced function after unmounting
  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  const setFocus = useCallback(
    (value: boolean) => {
      if (onStateChange) {
        onStateChange(value ? 'focus' : 'blur');
      }
      setFocused(value);
    },
    [setFocused, onStateChange]
  );

  return (
    <fieldset
      className={cx(
        'flex justify-between items-center w-[80%]',
        'border border-secondary-200 rounded px-4 py-2',
        'transition-all duration-500 float-right',
        { 'border-secondary-300 w-full': focused }
      )}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      <input
        ref={inputRef}
        autoComplete='off'
        type='text'
        className={cx(
          'w-full bg-transparent font-normal',
          'leading-6 text-primary-400',
          'placeholder:font-normal placeholder:text-graphite-100',
          'placeholder:text-sm placeholder:tracking-[0.124rem]',
          inputClass
        )}
        onChange={debouncedChangeHandler}
        {...others}
      />
      <Icon name='SEARCH' width={30} height={30} className={leftIconClass} />
    </fieldset>
  );
};

export const SearchInput = memo(SearchInputComponent) as typeof SearchInputComponent;
