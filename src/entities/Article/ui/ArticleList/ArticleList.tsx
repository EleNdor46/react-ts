import { classNames } from "shared/lib/classNames/className";
import cls from "./ArticleList.module.scss";
import { Article, ArticleView } from "entities/Article/model/types/article";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
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
        const ArticleRender = (article: Article) => (
            <ArticleListItem
                article={article}
                view={view}
                className={cls.card}
                key={article.id}
                target={target}
            />
        );

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
                {articles.length > 0 ? articles.map(ArticleRender) : null}
                {isLoading && getSkeletons(view)}
            </div>
        );
    }
);
