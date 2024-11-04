import { classNames } from "shared/lib/classNames/className";
import cls from "./Page.module.scss";
import {
    MutableRefObject,
    ReactNode,
    UIEvent,
    memo,
    useEffect,
    useRef,
} from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/AppDispatch/AppDispatch";
import { getUIScroll, getUIScrollByPath, uiActions } from "features/UI";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";
interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getUIScrollByPath(state, pathname)
    );
    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    }, []);

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        console.log('scroll')
        dispatch(
            uiActions.setScrollPosition({
                path: pathname,
                position: e.currentTarget.scrollTop,
            })
        );
    },1000);

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
