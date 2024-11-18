import { classNames, Mods } from "shared/lib/classNames/className";
import cls from "./Drawer.module.scss";
import { memo, ReactNode } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { Portal } from "@headlessui/react";
import { Overlay } from "../Overlay/Overlay";
interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo(
    ({ className, children, isOpen, onClose }: DrawerProps) => {
        const { theme } = useTheme();

        const mods: Mods = {
            [cls.opened]: isOpen,
        };

        return (
            <Portal>
                <div
                    className={classNames(cls.Drawer, mods, [
                        className,
                        theme,
                        "app_drawer",
                    ])}
                >
                    <Overlay onClick={onClose} />
                    <div className={cls.content}>{children}</div>
                </div>
            </Portal>
        );
    }
);
