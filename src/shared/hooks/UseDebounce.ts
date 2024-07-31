import { useCallback, useRef } from 'react';

export const useDebounce = (delay = 300, noteDelayInFirstTime = true ) => {   //delay para a consulta
  const debouncing = useRef<NodeJS.Timeout>();
  const isFirstTime = useRef(noteDelayInFirstTime);

  const debounce = useCallback((func: () => void) => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      func();
    } else {
      if (debouncing.current) {
        clearTimeout(debouncing.current);
      }
      debouncing.current = setTimeout(() => func(), delay); //1000ms para atraso da consulta
    }
  }, [delay]);

  return { debounce };
};