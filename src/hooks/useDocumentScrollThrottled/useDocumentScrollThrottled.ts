import throttle from 'lodash.throttle';
import { useEffect, useState } from 'react';

type Callback = ({
  previousScrollTop,
  currentScrollTop,
}: {
  currentScrollTop: number;
  previousScrollTop: number;
}) => void;

export function useDocumentScrollThrottled(callback: Callback, delay: number) {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } = document.documentElement || document.body;

    setScrollPosition((previousPosition) => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    setTimeout(() => {
      callback({ previousScrollTop, currentScrollTop });
    }, delay);
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScrollThrottled);

    return () => window.removeEventListener('scroll', handleDocumentScrollThrottled);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
