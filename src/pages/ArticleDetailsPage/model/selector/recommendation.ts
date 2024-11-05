import { ArticleDetailPageSchema } from "./../../../../entities/Article/model/types/index";
import { StateSchema } from "app/providers/StoreProvider";

export const getArticleRecommendationIsLoading = (state: StateSchema) =>
    state.articleDetailPage?.recommendation.isLoading;

export const getArticleRecommendationError = (state: StateSchema) =>
    state.articleDetailPage?.recommendation.error;
