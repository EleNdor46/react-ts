import { MutableRefObject, useEffect, useRef } from "react";

export interface UseInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps) => {
    const { callback, triggerRef, wrapperRef } = props;

    useEffect(() => {

const triggerEllement = triggerRef.current
const WrapperEllement = wrapperRef.current


        let observer: IntersectionObserver | null = null;
        if (callback) {
            const options = {
                root: WrapperEllement ,
                rootMargin: "0px",
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(triggerEllement);
        }

        return () => {
            if (observer && triggerEllement) {
                observer.unobserve(triggerEllement);
            }
        };
    }, [triggerRef, wrapperRef]);
};
