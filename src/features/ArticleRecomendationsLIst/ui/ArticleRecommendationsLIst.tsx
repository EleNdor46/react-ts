import { classNames } from "shared/lib/classNames/className";
import { memo } from "react";
import { ArticleList } from "entities/Article";
import { Text, TextSize } from "shared/ui/Text/Text";
import { VStack } from "shared/ui/Stack";
import { rtkApi } from "shared/api/rtkApi";
import { useArticleRecommendationsList } from "../api/articleRecommendationsApi";
interface ArticleRecomendationsLIstProps {
    className?: string;
}

export const ArticleRecommendationsLIst = memo(
    ({ className }: ArticleRecomendationsLIstProps) => {
        const { isLoading, data: articles } = useArticleRecommendationsList(4);

        if (isLoading || !articles) {
            return null;
        }

        return (
            <VStack gap="8">
                <Text title={"Recomendation"} size={TextSize.M} />
                <ArticleList
                    articles={articles}
                    target="_blank"
                    virtualization={false}
                />
            </VStack>
        );
    } 
);
