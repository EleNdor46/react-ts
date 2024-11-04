import { MutableRefObject, useCallback, useRef } from "react";
import { callbackify } from "util";

export function useDebounce(callback: (...arg: any[]) => void, delay: number) {
    const timer = useRef(false) as MutableRefObject<any>;
    return useCallback(
        (...arg: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }

            timer.current = setTimeout(() => {
                callback(...arg);
            }, delay);
        },
        [callback, delay]
    );
}
