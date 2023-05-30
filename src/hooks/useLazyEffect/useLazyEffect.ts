import { useRef, useEffect } from 'react';

export const useLazyEffect: typeof useEffect = (cb, dep) => {
  const initializeRef = useRef<boolean>(false);

  useEffect((...args) => {
    if (initializeRef.current) {
      cb(...args);
    } else {
      initializeRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dep);
};
