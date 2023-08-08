import { useState, useEffect, useRef } from "react";
import { debounce, throttle } from "lodash";

interface ScrollEvent {
  scrollY: number;
  scrollX: number;
}

interface IsScrollingValue {
  isScrolling: boolean;
}

const DEFAULT_VALUE: IsScrollingValue = {
  isScrolling: false,
};

export const useIsScrolling = (): IsScrollingValue => {
  const [value, setValue] = useState(DEFAULT_VALUE);

  const lastEventRef = useRef<ScrollEvent>();
  const scrollTimerRef = useRef<number>();

  const listener = () => {
    const { scrollX, scrollY } = window;

    if (lastEventRef.current) {
      const lastEvent = lastEventRef.current;
      const nextIsScrollingX = scrollX !== lastEvent.scrollX;
      const nextIsScrollingY = scrollY !== lastEvent.scrollY;
      const nextIsScrolling = nextIsScrollingX || nextIsScrollingY;

      setValue({
        isScrolling: nextIsScrolling,
      });

      if (nextIsScrolling) {
        resetTimer();
      } else {
        resetValues();
      }
    }

    lastEventRef.current = { scrollX, scrollY };
  };

  const throttledListener = throttle(listener, 75);

  const resetValues = () => {
    setValue(DEFAULT_VALUE);
  };

  const clearTimer = () => {
    if (scrollTimerRef.current) {
      window.clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = undefined;
    }
  };

  const resetTimer = () => {
    clearTimer();
    scrollTimerRef.current = window.setTimeout(onTimerEnded, 250);
  };

  const onTimerEnded = () => {
    clearTimer();
    setValue(DEFAULT_VALUE);
  };

  const listen = () => {
    window.addEventListener("scroll", throttledListener);
    return unsubscribe;
  };

  const unsubscribe = () => {
    window.removeEventListener("scroll", throttledListener);
    clearTimer();
  };

  useEffect(listen, []);

  return value;
};
