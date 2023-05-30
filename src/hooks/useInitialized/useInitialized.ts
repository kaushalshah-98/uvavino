import { useEffect, useRef } from 'react';

export function useInitialized<T = unknown>(
  constructor: (data: NonNullable<T>) => unknown,
  data?: T
) {
  const isConstructorCalled = useRef(false);

  useEffect(() => {
    if (!isConstructorCalled.current && data) {
      constructor(data as NonNullable<T>);
      isConstructorCalled.current = true;
    }
  }, [constructor, data]);
}
