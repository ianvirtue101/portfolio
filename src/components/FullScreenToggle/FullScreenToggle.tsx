import { useCallback, useEffect, useRef } from "react";

const useFullscreenToggle = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return { containerRef, handleDoubleClick };
};

export { useFullscreenToggle };
