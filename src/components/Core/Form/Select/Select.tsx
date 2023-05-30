import React, { forwardRef, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BsChevronDown, BsChevronUp, BsX } from 'react-icons/bs';
import { ImFileEmpty } from 'react-icons/im';
import { cx } from '~/libs';
import { Menu } from '../../Overlay';
import { Input, InputProps } from '../Input/Input';

export interface SelectItem<T = string | number> {
  className?: string;
  label: string;
  labelClass?: string;
  value: T;
}
export interface SelectProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  className?: string;
  input?: Omit<InputProps, 'onChange'>;

  lazy?: boolean;
  manual?: boolean;
  menuWrapperClass?: string;
  onChange?: (data?: SelectItem) => void;
  onClear?: () => void;
  onOutSideClick?: () => void;
  open?: boolean;
  optionWrapperClass?: string;
  options: Array<SelectItem>;
  value?: SelectItem;
  wrapperClass?: string;
}

const SelectComponent = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      options,
      menuWrapperClass,
      optionWrapperClass,
      onOutSideClick,
      onClear,
      wrapperClass,
      manual = true,
      open = false,
      lazy = false,
      onChange,
      value = undefined,
      placeholder,
      input,
    },
    ref
  ): JSX.Element => {
    const [state, setState] = useState(false);
    const [searchVal, setSearchVal] = useState<null | string>(null);
    const [selectedVal, setSelectedVal] = useState<SelectItem | undefined>(undefined);
    const isInitialized = useRef(false);
    const cachedList = useRef<SelectItem | undefined>();

    const visibleOptions = useMemo(() => {
      if (!searchVal) {
        return options;
      }
      return options.filter((o) => o.label.toLowerCase().includes(searchVal.toLowerCase()));
    }, [options, searchVal]);

    const setData = useCallback(
      (data: SelectItem | undefined) => {
        setSelectedVal(data);
        cachedList.current = data;
        if (onChange) onChange(data);
      },
      [onChange]
    );

    useEffect(() => {
      if (lazy && cachedList.current !== value) {
        isInitialized.current = true;
        if (value) {
          setData(value);
        } else {
          setData(undefined);
        }
      } else if (!isInitialized.current) {
        isInitialized.current = true;
        setData(value);
      }
    }, [lazy, setData, value]);

    useEffect(() => {
      if (open !== undefined && open !== null) {
        setState(open);
      }
    }, [open]);

    const toggle = useCallback((val: boolean) => {
      if (!val) {
        setSearchVal(null);
      }
      setState(val);
    }, []);

    const handleChange = useCallback(
      (item: SelectItem) => {
        setData(item);
        toggle(false);
      },
      [setData, toggle]
    );

    const onReset = useCallback(
      (e: React.MouseEvent<SVGElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (onClear) onClear();
        if (selectedVal?.label) setData(undefined);
      },
      [onClear, selectedVal?.label, setData]
    );

    const onSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchVal(value);
    }, []);

    const handleInputClick = () => {
      toggle(!state);
    };

    const overlayJSX = (
      <>
        <div className={''}>
          <div
            className={cx(
              'max-h-[18rem] overflow-y-auto',
              'px-1.5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-100 scrollbar-thumb-rounded-xl',
              optionWrapperClass
            )}
          >
            {visibleOptions.length ? (
              visibleOptions.map((item, idx) => {
                const isSelected = selectedVal?.value === item.value;
                return (
                  <button
                    key={idx}
                    className={cx(
                      'my-1 flex w-full cursor-pointer flex-row space-x-4 rounded py-2 px-4',
                      {
                        'bg-primary-100': isSelected,
                        'hover:bg-secondary-50': !isSelected,
                      },
                      item.className
                    )}
                    onClick={() => handleChange(item)}
                  >
                    <span
                      className={cx(
                        'text-sm text-graphite-400',
                        {
                          'font-medium text-secondary-50': isSelected,
                        },
                        item.labelClass
                      )}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })
            ) : (
              <div className='flex flex-col items-center justify-center space-y-3 p-4'>
                <ImFileEmpty className='h-7 w-7 text-primary-200' />
                <span className='text-md text-primary-400'>No Search Found</span>
              </div>
            )}
          </div>
        </div>
      </>
    );

    return (
      <Menu
        className={className}
        positions={['bottom']}
        component={overlayJSX}
        manual={manual}
        menuWrapperClass={cx(
          'min-w-fit border bg-chalk-50 border-secondary-100 right-0 mt-0.5',
          menuWrapperClass
        )}
        open={state}
        wrapperClass={cx('', wrapperClass)}
      >
        <div
          className='flex w-full select-none items-center justify-between'
          onClick={handleInputClick}
        >
          <Input
            {...input}
            autoComplete='off'
            className={cx('', input?.className)}
            inputClass={cx('', input?.inputClass)}
            placeholder={placeholder}
            type='text'
            value={searchVal ?? selectedVal?.label ?? ''}
            rightIcon={
              selectedVal?.label ? (
                <BsX
                  className='h-6 w-6 cursor-pointer text-center text-primary-100'
                  onClick={onReset}
                />
              ) : state ? (
                <BsChevronUp className='text-primary-100' />
              ) : (
                <BsChevronDown className='text-primary-100' />
              )
            }
            // onBlur={onBlur}
            onChange={onSearch}
          />
        </div>
      </Menu>
    );
  }
);

export const Select = memo(SelectComponent) as typeof SelectComponent;
