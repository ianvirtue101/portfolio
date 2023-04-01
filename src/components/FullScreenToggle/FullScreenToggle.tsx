import { useCallback, useRef, useState } from "react";

const useFullscreenToggle = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lastTap, setLastTap] = useState<number>(0);

  const handleDoubleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;

      if (container) {
        if (!document.fullscreenElement) {
          // If not in fullscreen mode, request fullscreen
          container.requestFullscreen();
        } else {
          // If in fullscreen mode, exit fullscreen
          document.exitFullscreen();
        }
      }
    },
    []
  );

  const handleDoubleTap = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      const tapTimeout = 300; // Adjust this value to control the time between taps

      if (tapLength < tapTimeout && tapLength > 0) {
        event.preventDefault();
        handleDoubleClick(event as any);
      }

      setLastTap(currentTime);
    },
    [handleDoubleClick, lastTap]
  );

  return { containerRef, handleDoubleClick, handleDoubleTap };
};

export { useFullscreenToggle };
