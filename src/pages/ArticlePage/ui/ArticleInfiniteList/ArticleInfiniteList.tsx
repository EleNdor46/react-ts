import { classNames } from "shared/lib/classNames/className";
import { memo, useEffect } from "react";
import { ArticleList } from "entities/Article";
import {
    getArticlePageIsLoading,
    getArticlePageError,
    getArticlePageView,
} from "pages/ArticlePage/model/selctors/articlePageSelectors";
import { initArticlePage } from "pages/ArticlePage/model/services/initArticlePage/initArticlePage";
import { getArticle } from "pages/ArticlePage/model/slice/ArticlePageSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/AppDispatch/AppDispatch";
import { useSearchParams } from "react-router-dom";
import { Text, TextTheme } from "shared/ui/Text/Text";
interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo(
    ({ className }: ArticleInfiniteListProps) => {
        const dispatch = useAppDispatch();
        const articles = useSelector(getArticle.selectAll);
        const isLoading = useSelector(getArticlePageIsLoading);
        const error = useSelector(getArticlePageError);
        const view = useSelector(getArticlePageView);
        let [searchParams] = useSearchParams();

        useEffect(() => {
            dispatch(initArticlePage(searchParams));
        }, [dispatch]);

        if (error) {
            return <Text title={error} theme={TextTheme.ERROR} />;
        }

        return (
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={className}
            />
        );
    }
);
