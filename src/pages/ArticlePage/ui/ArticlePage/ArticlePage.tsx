import { useTranslation } from "react-i18next";
import { memo, useCallback, useEffect } from "react";
import {
    ArticleList,
    ArticleView,
    ArticleViewSelector,
} from "entities/Article";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useDispatch, useSelector } from "react-redux";
import { Page } from "shared/ui/Page/Page";
import cls from "./ArticlePage.module.scss";
import { useAppDispatch } from "shared/lib/hooks/AppDispatch/AppDispatch";
import {
    ArticlePageActions,
    ArticlePageReducer,
    getArticle,
} from "pages/ArticlePage/model/slice/ArticlePageSlice";
import {
    getArticlePageError,
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePageNum,
    getArticlePageView,
} from "pages/ArticlePage/model/selctors/articlePageSelectors";
import { fetchNextArticlesPage } from "pages/ArticlePage/model/services/fetchNextArticlePage/fetchNextArticlePage";
import { classNames } from "shared/lib/classNames/className";

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
    const view = useSelector(getArticlePageView);
    const error = useSelector(getArticlePageError);
    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(ArticlePageActions.setView(view));
        },
        [dispatch]
    );

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useEffect(() => {
        dispatch(ArticlePageActions.initState());
        // dispatch(
        //     fetchArticlesList({
        //         page: 1,
        //     })
        // );
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);

function fetchArticlesList(arg0: { page: number }): any {
    throw new Error("Function not implemented.");
}
