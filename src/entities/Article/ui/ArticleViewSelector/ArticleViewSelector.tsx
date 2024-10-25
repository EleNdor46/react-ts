import { classNames } from "shared/lib/classNames/className";
import cls from "./ArticleViewSelector.module.scss";
import { memo, useState } from "react";
import { ArticleView } from "../../model/types/article";
import ListIcon from "widgets/assets/icon/list-24-24.svg";
import TitledIcon from "widgets/assets/icon/tiled-24-24.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

export const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TitledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = ({
    className,
    view,
    onViewClick,
}: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => {
        return () => {
            onViewClick?.(newView);
        };
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={viewType.view}
                >
                    <Icon Svg={viewType.icon} className={classNames('', {
                        [cls.active]: view === viewType.view
                    })} />
                </Button>
            ))}
        </div>
    );
};
