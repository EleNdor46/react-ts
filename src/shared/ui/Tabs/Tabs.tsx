import { classNames } from "shared/lib/classNames/className";
import cls from "./Tabs.module.scss";
import { memo, ReactNode, useCallback } from "react";
import { Card, CardTheme } from "../Card/Card";

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo(
    ({ className, tabs, value, onTabClick }: TabsProps) => {
        const clickHandler = useCallback((tab: TabItem) => {
            return () => {
                onTabClick(tab);
            };
        }, [onTabClick]);

        return (
            <div className={classNames(cls.Tabs, {}, [className])}>
                {tabs.map((tab) => (
                    <Card
                        key={tab.value}
                        className={cls.tab}
                        theme={
                            tab.value === value
                                ? CardTheme.NORMAL
                                : CardTheme.OUTLINE
                        }
                        onClick={clickHandler(tab)}
                    >
                        {tab.content}
                    </Card>
                ))}
            </div>
        );
    }
);
