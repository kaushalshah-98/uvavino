import React, { useCallback, useEffect, useRef } from 'react';

export interface WatchClickOutsideProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
  className?: string;
  onClickOutside: () => void;
}

export const WatchClickOutside = (props: WatchClickOutsideProps) => {
  const { className, onClickOutside } = props;
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    },
    [onClickOutside]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return (
    <div ref={ref} className={className}>
      {props.children}
    </div>
  );
};
