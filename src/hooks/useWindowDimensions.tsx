import { useCallback, useEffect, useState } from "react";

interface WindowDimensions {
  width: number | null;
  height: number | null;
}

function useWindowDimensions(): WindowDimensions {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = useCallback(
    (): WindowDimensions => ({
      width: hasWindow ? window.innerWidth : null,
      height: hasWindow ? window.innerHeight : null,
    }),
    [hasWindow]
  );

  const [windowDimensions, setWindowDimensions] =
    useState<WindowDimensions>(getWindowDimensions);

  useEffect(() => {
    if (!hasWindow) return undefined;

    const handleResize = () => setWindowDimensions(getWindowDimensions());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hasWindow, getWindowDimensions]);

  return windowDimensions;
}

export default useWindowDimensions;
