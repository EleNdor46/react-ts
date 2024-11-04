import { memo, useCallback, useMemo } from "react";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "entities/Article/model/types/article";
import { classNames } from "shared/lib/classNames/className";
interface ArticleTypeTabsProps {
    className?: string;
    onChangeType: (type: ArticleType) => void;
    value: ArticleType;
}

export const ArticleTypeTabs = memo(
    ({ onChangeType, value,className } : ArticleTypeTabsProps) => {
        const typeTabs = useMemo<TabItem[]>(
            () => [
                {
                    value: ArticleType.IT,
                    content: "IT",
                },
                {
                    value: ArticleType.ECONOMICS,
                    content: "ECONOMICS",
                },
                {
                    value: ArticleType.SCIENCE,
                    content: "SCIENCE",
                },
                {
                    value: ArticleType.ALL,
                    content: "ALL",
                },
            ],
            []
        );

        const onTabClick = useCallback((tab:TabItem) => {
            onChangeType(tab.value as ArticleType);
        }, [onChangeType]);

        return <Tabs onTabClick={onTabClick} tabs={typeTabs} value={value} className={classNames('' ,{} , [className])}/>;
    }
);
