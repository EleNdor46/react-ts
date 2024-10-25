import { classNames } from "shared/lib/classNames/className";
import cls from "./ArticlePage.module.scss";
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
import {
    ArticlePageActions,
    ArticlePageReducer,
    getArticle,
} from "pages/ArticlePage/model/slice/ArticlePageSlice";
import { useAppDispatch } from "shared/lib/hooks/AppDispatch/AppDispatch";
import { fetchArticleList } from "pages/ArticlePage/model/services/fetchArticleList/fetchArticleList";
import { useSelector } from "react-redux";
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from "pages/ArticlePage/model/selctors/articlePageSelectors";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePage: ArticlePageReducer,
};

const ArticlePage = ({ className }: ArticlePageProps) => {
    const dispatch = useAppDispatch();
    const isLoaing = useSelector(getArticlePageIsLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView);
    const articles = useSelector(getArticle.selectAll);
    useEffect(() => {
        dispatch(fetchArticleList());
        dispatch(ArticlePageActions.initState());
    }, [dispatch]);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(ArticlePageActions.setView(view));
        },
        [dispatch]
    );

    if (error) {
        <>
            <Text
                text={error}
                aligin={TextAlign.CENTER}
                theme={TextTheme.ERROR}
            />
        </>;
    }
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlePage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoaing}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
