import cls from "./ArticleList.module.scss";
import { Article, ArticleView } from "entities/Article/model/types/article";
import { HTMLAttributeAnchorTarget, memo, useState } from "react";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { classNames } from "shared/lib/classNames/className";
interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                view={view}
                key={index}
                className={cls.card}
            />
        ));
};

export const ArticleList = memo(
    ({
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    }: ArticleListProps) => {
        const isBig = view === ArticleView.BIG;
        if (!isLoading && !articles.length) {
            return <div>Статьи не найдены</div>;
        }
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                {articles.map((item) => (
                    <ArticleListItem
                        article={item}
                        view={view}
                        key={item.id}
                        className={cls.card}
                        target={target}
                    />
                ))}

                {isLoading && getSkeletons(view)}
            </div>
        );
    }
);
