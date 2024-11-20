import { RaitingCard } from "entities/Raiting";
import { getUserAuthData } from "entities/User";
import { useArticleRaiting, useRateArticle } from "../../api/articleRaitingApi";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
interface ArticleRaitingProps {
    className?: string;
    articleId: string;
}

export const ArticleRaiting = memo(
    ({ className, articleId }: ArticleRaitingProps) => {
        const userData = useSelector(getUserAuthData);
        const { data, isLoading } = useArticleRaiting({
            articleId: articleId,
            userId: userData?.id ?? "",
        });

        const [rateArticleMutaion] = useRateArticle();

        const handlerRateArticle = useCallback(
            (starCount: number, feedback?: string) => {
                try {
                    rateArticleMutaion({
                        userId: userData?.id ?? "",
                        articleId,
                        rate: starCount,
                        feedback,
                    });
                } catch (err) {
                    console.log(err);
                }
            },
            [userData?.id, articleId, rateArticleMutaion]
        );

        const onCancel = useCallback(
            (starCount: number) => {
                handlerRateArticle(starCount);
            },
            [handlerRateArticle]
        );
        const onAccept = useCallback(
            (starCount: number, feedback?: string) => {
                handlerRateArticle(starCount, feedback);
            },
            [handlerRateArticle]
        );

        if (isLoading) {
            return <Skeleton width={"100%"} height={120} />;
        }

        const rating = data?.[0];

        return (
            <RaitingCard
                onCancel={onCancel}
                onAccept={onAccept}
                className={className}
                title="Оцените Статью"
                feedbackTitle="Оставьте отзыв"
                hasFeedback
                rate={rating?.rate}
            ></RaitingCard>
        );
    }
);
