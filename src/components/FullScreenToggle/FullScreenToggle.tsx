import { useCallback, useRef, useState } from "react";

const useFullscreenToggle = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lastTap, setLastTap] = useState<number>(0);
  const handleDoubleClick = useCallback(
    (
      event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) => {
      const fullscreenElement =
        (document as any).fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement;

      if (!fullscreenElement) {
        if (containerRef.current) {
          const el = containerRef.current as any;
          const requestFullscreen =
            el.requestFullscreen ||
            el.webkitRequestFullscreen ||
            el.mozRequestFullScreen ||
            el.msRequestFullscreen;
          requestFullscreen.call(el);
        }
      } else {
        const exitFullscreen =
          document.exitFullscreen ||
          (document as any).webkitExitFullscreen ||
          (document as any).mozCancelFullScreen ||
          (document as any).msExitFullscreen;
        exitFullscreen.call(document);
      }
    },
    []
  );

  const handleTouch = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      if (event.touches.length !== 1) {
        return;
      }

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

  return { containerRef, handleDoubleClick, handleTouch };
};

export { useFullscreenToggle };
