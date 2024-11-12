import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "widgets/Page/Page";
import cls from "./ArticlePage.module.scss";
import { useAppDispatch } from "shared/lib/hooks/AppDispatch/AppDispatch";
import { ArticlePageReducer } from "pages/ArticlePage/model/slice/ArticlePageSlice";
import { fetchNextArticlesPage } from "pages/ArticlePage/model/services/fetchNextArticlePage/fetchNextArticlePage";
import { classNames } from "shared/lib/classNames/className";
import { ArticlePageFilter } from "../ArticlePageFilter/ArticlePageFilter";
import { useSearchParams } from "react-router-dom";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";

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
    let [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlePageFilter />
                <ArticleInfiniteList className={cls.list}/>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
