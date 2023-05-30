import { motion, AnimatePresence } from 'framer-motion';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { cx } from '~/libs';
import { WatchClickOutside } from '../WatchClickOutside/WatchClickOutside';
import { Text } from '../../Display';

export interface CustomMenuItem {
  activeClass?: string;
  className?: string;
  id: number;
  label: { className?: string; name: string; url?: string };
}

export interface CustomMenuProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'size'> {
  activeId?: number;
  className?: string;

  component?: React.ReactNode;
  id?: string;

  manual?: boolean;
  menuWrapperClass?: string;

  onItemClick?: (item: CustomMenuItem) => void;
  onOutSideClick?: () => void;
  open?: boolean;

  options?: CustomMenuItem[];
  wrapperClass?: string;
}

const CustomMenuComponent = ({
  className,
  options,
  children,
  menuWrapperClass,
  activeId,
  component,
  wrapperClass,
  manual = false,
  open = false,
  onItemClick,
  onOutSideClick,
}: CustomMenuProps) => {
  const [state, setState] = useState(false);
  const isOpen = useMemo(() => state || open, [state, open]);

  const close = () => {
    if (onOutSideClick) {
      onOutSideClick();
      return;
    }
    setState(false);
  };

  const clicked = useCallback(
    (item: CustomMenuItem) => {
      if (onItemClick) {
        onItemClick(item);
      }
      setState(false);
    },
    [onItemClick]
  );

  return (
    <AnimatePresence>
      <WatchClickOutside
        className={cx('relative w-full text-left', className)}
        onClickOutside={close}
      >
        {manual ? (
          children
        ) : (
          <div
            role='button'
            tabIndex={0}
            className={cx(
              'inline-flex w-full justify-end rounded focus:outline-none',
              wrapperClass
            )}
            onClick={() => setState((e) => !e)}
          >
            {children}
          </div>
        )}
        {isOpen && (
          <>
            {/* <div className='h-6 w-6 left-6 rotate-45 shadow-2xl absolute border border-primary-200 bg-white'></div> */}
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className={cx(
                'absolute z-50 mt-1.5 min-h-[60px] w-full overflow-auto rounded',
                'bg-chalk-50 py-1 focus:outline-none',
                'border-2 border-chalk-100 text-sm sm:text-sm',
                menuWrapperClass
              )}
            >
              {component ? (
                <div
                  aria-labelledby='menu-button'
                  aria-orientation='vertical'
                  id='options'
                  role='listbox'
                >
                  {component}
                </div>
              ) : (
                <ul
                  aria-labelledby='menu-button'
                  aria-orientation='vertical'
                  id='options'
                  role='listbox'
                >
                  {options?.map((menu, idx) => {
                    const { label, className, activeClass, id } = menu;
                    return (
                      <li
                        key={label.name}
                        aria-selected
                        id={`option-${idx}`}
                        role='option'
                        tabIndex={idx}
                        className={cx(
                          'flex cursor-default select-none items-center',
                          'hover:bg-secondary-50 py-1.5 px-1.5 rounded-sm',
                          'duration-100 cursor-pointer',
                          className,
                          {
                            [activeClass ?? 'bg-secondary-50']: activeId === id,
                          }
                        )}
                        onClick={() => clicked(menu)}
                      >
                        <Text
                          className={cx('flex-start flex opacity-70', label.className, {
                            [activeClass ?? 'opacity-1']: activeId === id,
                          })}
                        >
                          {label.name}
                        </Text>
                      </li>
                    );
                  })}
                </ul>
              )}
            </motion.div>
          </>
        )}
      </WatchClickOutside>
    </AnimatePresence>
  );
};

export const CustomMenu = memo(CustomMenuComponent) as typeof CustomMenuComponent;
