import { classNames } from "shared/lib/classNames/className";
import { memo, useCallback, useEffect } from "react";
import { CommentList } from "entities/Comment";
import AddCommentForm from "features/addCommentForm/ui/addCommentForm/addCommentForm";
import { Text, TextSize } from "shared/ui/Text/Text";
import {
    getArticleDetailsCommentsIsLoading,
    getArticleDetailsCommentsError,
} from "pages/ArticleDetailsPage/model/selector/comments";
import { addCommentForArticle } from "pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";
import { getArticleComments } from "pages/ArticleDetailsPage/model/slices/ArticleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/AppDispatch/AppDispatch";
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticle";
import { VStack } from "shared/ui/Stack";
interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo(
    ({ className, id }: ArticleDetailsCommentsProps) => {
        const comments = useSelector(getArticleComments.selectAll);
        const commentsIsLoading = useSelector(
            getArticleDetailsCommentsIsLoading
        );
        const commentsError = useSelector(getArticleDetailsCommentsError);
        const dispatch = useAppDispatch();

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text));
            },
            [dispatch]
        );

        useEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        }, [dispatch]);

        return (
            <VStack gap="16">
                <Text title={"Comments"} size={TextSize.M} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </VStack>
        );
    }
);
