import { classNames } from "shared/lib/classNames/className";
import cls from "./ArticlePageFilter.module.scss";
import { memo, useCallback, useMemo } from "react";
import { ArticleView, ArticleViewSelector } from "entities/Article";
import { useSelector } from "react-redux";
import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
    getArticlePageView,
} from "pages/ArticlePage/model/selctors/articlePageSelectors";
import { ArticlePageActions } from "pages/ArticlePage/model/slice/ArticlePageSlice";
import { useAppDispatch } from "shared/lib/hooks/AppDispatch/AppDispatch";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { ArticleSortSelector } from "entities/Article/ui/ArticleSortSelector/ArticleSortSelector";
import { SortOrder } from "shared/types";
import {
    ArticleSortField,
    ArticleType,
} from "entities/Article/model/types/article";
import { fetchArticleList } from "pages/ArticlePage/model/services/fetchArticleList/fetchArticleList";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleTypeTabs } from "entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs";
interface ArticlePageFilterProps {
    className?: string;
}

export const ArticlePageFilter = memo(
    ({ className }: ArticlePageFilterProps) => {
        const view = useSelector(getArticlePageView);
        const dispatch = useAppDispatch();
        const order = useSelector(getArticlePageOrder);
        const sort = useSelector(getArticlePageSort);
        const search = useSelector(getArticlePageSearch);
        const type = useSelector(getArticlePageType);
        const fetchData = useCallback(() => {
            dispatch(fetchArticleList({ replace: true }));
        }, [dispatch]);

        const debounceFetchData = useDebounce(fetchData, 500);

        const onChangeView = useCallback(
            (view: ArticleView) => {
                dispatch(ArticlePageActions.setView(view));
            },
            [dispatch]
        );

        const onChangeOrder = useCallback(
            (newOrder: SortOrder) => {
                dispatch(ArticlePageActions.setOrder(newOrder));
                dispatch(ArticlePageActions.setPage(1));
                debounceFetchData();
            },
            [dispatch, debounceFetchData]
        );

        const onChangeSort = useCallback(
            (newSort: ArticleSortField) => {
                dispatch(ArticlePageActions.setSort(newSort));
                dispatch(ArticlePageActions.setPage(1));
                debounceFetchData();
            },
            [dispatch, debounceFetchData]
        );
        const onChangeSearch = useCallback(
            (value: string) => {
                dispatch(ArticlePageActions.setSearch(value));
                dispatch(ArticlePageActions.setPage(1));
                debounceFetchData();
            },
            [dispatch, debounceFetchData]
        );
        const onChangeType = useCallback(
            (value: ArticleType) => {
                dispatch(ArticlePageActions.setType(value));
                dispatch(ArticlePageActions.setPage(1));
                debounceFetchData();
            },
            [dispatch, debounceFetchData]
        );

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

        return (
            <div className={classNames(cls.ArticlePageFilter, {}, [className])}>
                <div className={cls.sortWrapper}>
                    <ArticleSortSelector
                        order={order}
                        sort={sort}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ArticleViewSelector
                        view={view}
                        onViewClick={onChangeView}
                    />
                </div>
                <Card className={cls.search}>
                    <Input
                        placeholder={"Search"}
                        onChange={onChangeSearch}
                        value={search}
                    />
                </Card>
                <ArticleTypeTabs
                    onChangeType={onChangeType}
                    value={type}
                    className={cls.tabs}
                />
            </div>
        );
    }
);
