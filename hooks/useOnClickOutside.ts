import { useEffect } from "react";

export default function useOnClickOutside(ref: any, handler: any) {
    useEffect(
      () => {
        
        const listener = (event: MouseEvent | TouchEvent) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          
          console.log("updating visibility from hook");
          handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }