import { classNames } from "shared/lib/classNames/className";
import cls from "./ArticleDetailPage.module.scss";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/AppDispatch/AppDispatch";
import { Page } from "widgets/Page/Page";
import { articleDetailReducer } from "pages/ArticleDetailsPage/model/slices";
import { ArticleDetailPageHeader } from "../ArticleDetailPageHeader/ArticleDetailPageHeader";
import { VStack } from "shared/ui/Stack";
import { ArticleRecommendationsLIst } from "features/ArticleRecomendationsLIst/ui/ArticleRecommendationsLIst";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleRaiting } from "features/articleRaiting";

interface ArticleDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailPage: articleDetailReducer,
};

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Page className={classNames("", {}, [className])}>
                Dont fiend Article
            </Page>
        );
    }

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailPage, {}, [className])}
            >
                <VStack gap="16" max>
                    <ArticleDetailPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRaiting articleId={id} />
                    <ArticleRecommendationsLIst />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailPage);
