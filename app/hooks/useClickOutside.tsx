import { useRef, useEffect } from "react";

interface UseClickOutsideOptions {
  onClickOutside?: (target: MouseEvent | TouchEvent) => void;
  onClickInside?: (target: MouseEvent | TouchEvent) => void;
}

export const useClickOutside = ({
  onClickOutside,
  onClickInside,
}: UseClickOutsideOptions) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || !event.target) {
        return;
      }

      if (ref.current.contains(event.target as Node)) {
        onClickInside?.(event);
      } else {
        onClickOutside?.(event);
      }
    };

    if (window.PointerEvent) {
      document.addEventListener("pointerdown", listener);
    } else {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }

    return () => {
      if (window.PointerEvent) {
        document.removeEventListener("pointerdown", listener);
      } else {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      }
    };
  }, [ref, onClickInside, onClickOutside]);

  return [ref];
};
