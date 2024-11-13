import cls from "./ArticleList.module.scss";
import { Article, ArticleView } from "entities/Article/model/types/article";
import { HTMLAttributeAnchorTarget, memo, useState } from "react";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { List, ListRowProps, WindowScroller } from "react-virtualized";
import { classNames } from "shared/lib/classNames/className";
interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualization?: boolean;
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
        virtualization = true,
    }: ArticleListProps) => {
        const isBig = view === ArticleView.BIG;
        const itemsPerRow = isBig ? 1 : 5;
        const rowCount = isBig
            ? articles.length
            : Math.ceil(articles.length / itemsPerRow);

        const rowRenderer = ({
            index,
            isScrolling,
            key,
            style,
        }: ListRowProps) => {
            const items = [];
            const fromIndex = index * itemsPerRow;
            const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

            for (let i = fromIndex; i < toIndex; i += 1) {
                items.push(
                    <ArticleListItem
                        article={articles[i]}
                        view={view}
                        className={cls.card}
                        target={target}
                        key={`str${i}`}
                    />
                );
            }

            return (
                <div key={key} style={style} className={cls.row}>
                    {items}
                </div>
            );
        };

        if (!isLoading && !articles.length) {
            return <div>Статьи не найдены</div>;
        }

        return (
            <WindowScroller
                scrollElement={document.getElementById("PAGE_ID") as Element}
            >
                {({
                    width,
                    height,
                    registerChild,
                    scrollTop,
                    isScrolling,
                    onChildScroll,
                }) => (
                    <div
                        ref={registerChild}
                        className={classNames(cls.ArticleList, {}, [
                            className,
                            cls[view],
                        ])}
                    >
                        {virtualization ? (
                            <List
                                height={height ?? 700}
                                rowCount={rowCount}
                                rowHeight={isBig ? 700 : 330}
                                rowRenderer={rowRenderer}
                                width={width ? width - 80 : 700}
                                autoHeight
                                onScroll={onChildScroll}
                                isScrolling={isScrolling}
                                scrollTop={scrollTop}
                            />
                        ) : (
                            articles.map((item) => (
                                <ArticleListItem
                                    article={item}
                                    view={view}
                                    key={item.id}
                                    className={cls.card}
                                    target={target}
                                />
                            ))
                        )}

                        {isLoading && getSkeletons(view)}
                    </div>
                )}
            </WindowScroller>
        );
    }
);
