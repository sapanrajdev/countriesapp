import { useEffect, useState } from "react";

export const useDebounce = (value, timeout) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [value, timeout]);

  return debouncedValue;
};
