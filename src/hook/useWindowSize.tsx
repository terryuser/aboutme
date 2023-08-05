import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
};

const useIsMobile = () => {
  const { width } = useWindowSize();

  if (!width) return false;
  return width < 768;
};

const useIsTablet = () => {
  const { width } = useWindowSize();

  if (!width) return false;
  return width >= 768 && width < 1024;
};

export { useWindowSize, useIsMobile, useIsTablet };
