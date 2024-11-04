import { useTranslation } from "react-i18next";
import { memo, useCallback, useEffect } from "react";
import { ArticleList } from "entities/Article";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { Page } from "widgets/Page/Page";
import cls from "./ArticlePage.module.scss";
import { useAppDispatch } from "shared/lib/hooks/AppDispatch/AppDispatch";
import {
    ArticlePageReducer,
    getArticle,
} from "pages/ArticlePage/model/slice/ArticlePageSlice";
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from "pages/ArticlePage/model/selctors/articlePageSelectors";
import { fetchNextArticlesPage } from "pages/ArticlePage/model/services/fetchNextArticlePage/fetchNextArticlePage";
import { classNames } from "shared/lib/classNames/className";
import { initArticlePage } from "pages/ArticlePage/model/services/initArticlePage/initArticlePage";
import { ArticlePageFilter } from "../ArticlePageFilter/ArticlePageFilter";
import { useSearchParams } from "react-router-dom";

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePage: ArticlePageReducer,
};

const ArticlePage = (props: ArticlePageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticle.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const error = useSelector(getArticlePageError);
    let [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    const view = useSelector(getArticlePageView);
    useEffect(() => {
        dispatch(initArticlePage(searchParams));
    }, [dispatch]);


   


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlePageFilter />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
