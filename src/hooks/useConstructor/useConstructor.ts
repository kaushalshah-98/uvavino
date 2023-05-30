import { useRef } from 'react';

export type Constructor = (...args: unknown[]) => unknown;

export function useConstructor(constructor: Constructor) {
  const isConstructorCalled = useRef(false);
  if (!isConstructorCalled.current) {
    constructor();
    isConstructorCalled.current = true;
  }
}
