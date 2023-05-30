import { motion, AnimatePresence } from 'framer-motion';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { Popover } from 'react-tiny-popover';
import { cx } from '~/libs';
import type { PopoverProps } from 'react-tiny-popover';

export interface MenuItem {
  activeClass: string;
  className?: string;
  id: number;
  label: { className: string; name: string };
}

export interface MenuProps
  extends Omit<PopoverProps, 'children' | 'isOpen' | 'content'>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'size'> {
  activeId?: number;
  align?: 'center' | 'start' | 'end';

  className?: string;
  component?: React.ReactNode;

  id?: string;
  manual?: boolean;

  menuClass?: string;
  menuWrapperClass?: string;
  onItemClick?: (item: MenuItem) => void;

  onOutSideClick?: () => void;
  open?: boolean;
  options?: MenuItem[];
  wrapperClass?: string;
}

const MenuComponent = ({
  className,
  options,
  children,
  menuClass,
  menuWrapperClass,
  component,
  wrapperClass,
  onItemClick,
  activeId,
  manual = false,
  open = false,
  onOutSideClick,
  ...props
}: MenuProps) => {
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
    (item: MenuItem) => {
      if (onItemClick) {
        onItemClick(item);
      }
    },
    [onItemClick]
  );

  const JSX = (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      className={menuClass}
      initial={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {component ? (
        <div
          aria-labelledby='menu-button'
          aria-orientation='vertical'
          id='options'
          role='listbox'
          className={cx(
            'mt-1.5 min-h-[60px] w-full overflow-auto rounded-md',
            'bg-chalk-50 py-1 focus:outline-none',
            'border-2 border-chalk-100 text-sm shadow-lg sm:text-sm',
            menuWrapperClass
          )}
        >
          {component}
        </div>
      ) : (
        <ul
          aria-labelledby='menu-button'
          aria-orientation='vertical'
          id='options'
          role='listbox'
          className={cx(
            'absolute z-10 mt-1.5 min-h-[60px] w-full overflow-auto rounded-md',
            'bg-chalk-50 py-1 focus:outline-none',
            'border-2 border-chalk-100 text-sm shadow-lg sm:text-sm',
            menuWrapperClass
          )}
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
                className={cx('flex cursor-default select-none items-center', className, {
                  [activeClass]: activeId === id,
                })}
                onClick={() => clicked(menu)}
              >
                <span
                  className={cx('flex-start flex truncate', label.className, {
                    [activeClass]: activeId === id,
                  })}
                >
                  {label.name}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </motion.div>
  );

  return (
    <AnimatePresence>
      <Popover
        {...props}
        containerClassName={cx('z-50', className)}
        content={JSX}
        isOpen={isOpen}
        onClickOutside={close}
      >
        {manual ? (
          <div>{children}</div>
        ) : (
          <div
            role='button'
            tabIndex={0}
            className={cx(
              'inline-flex w-full justify-end rounded-md focus:outline-none',
              wrapperClass
            )}
            onClick={() => setState((e) => !e)}
          >
            {children}
          </div>
        )}
      </Popover>
    </AnimatePresence>
  );
};

export const Menu = memo(MenuComponent) as typeof MenuComponent;
