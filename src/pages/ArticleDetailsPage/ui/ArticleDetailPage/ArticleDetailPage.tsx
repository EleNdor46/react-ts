import { classNames } from "shared/lib/classNames/className";
import cls from "./ArticleDetailPage.module.scss";
import { memo, useCallback, useEffect } from "react";
import { ArticleDetails, ArticleList } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { Text, TextSize } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from "../../model/slices/ArticleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading,
} from "pages/ArticleDetailsPage/model/selector/comments";
import { useAppDispatch } from "shared/lib/hooks/AppDispatch/AppDispatch";
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticle";
import AddCommentForm from "features/addCommentForm/ui/addCommentForm/addCommentForm";
import { addCommentForArticle } from "pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/RouterConfig/routerConfig";
import { Page } from "widgets/Page/Page";
import {
    articleDetailPageRecomendationReducer,
    getArticleRecomendation,
} from "pages/ArticleDetailsPage/model/slices/articleDetailPageRecomendationSlice";
import {
    getArticleRecommendationError,
    getArticleRecommendationIsLoading,
} from "pages/ArticleDetailsPage/model/selector/recommendation";
import { fetchArticleRecommendation } from "pages/ArticleDetailsPage/model/services/fetchArticleRecomendation/fetchArticleRecomendation";
import { articleDetailReducer } from "pages/ArticleDetailsPage/model/slices";

interface ArticleDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailPage: articleDetailReducer,
};

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const recomendations = useSelector(getArticleRecomendation.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const commentsError = useSelector(getArticleDetailsCommentsError);
    const recomendationIsLoading = useSelector(
        getArticleRecommendationIsLoading
    );
    const recomendationError = useSelector(getArticleRecommendationError);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    const onBackToList = useCallback(() => {
        navigate(RoutePath.article);
    }, [navigate]);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchArticleRecommendation());
    }, [dispatch]);

    if (!id) {
        return (
            <Page className={classNames("", {}, [className])}>
                Dont fiend Article
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailPage, {}, [className])}
            >
                <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
                    Back
                </Button>
                <ArticleDetails id={id} />
                <Text
                    title={"Recomendation"}
                    className={cls.recomendationTitle}
                    size={TextSize.M}
                />
                <ArticleList
                    articles={recomendations}
                    isLoading={recomendationIsLoading}
                    className={cls.recommendation}
                    target="_blank"
                />
                <Text
                    title={"Comments"}
                    className={cls.commentTitle}
                    size={TextSize.M}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailPage);
