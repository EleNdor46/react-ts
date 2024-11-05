import { StateSchema } from "app/providers/StoreProvider";

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) =>
    state.articleDetailPage?.comments.isLoading;

export const getArticleDetailsCommentsError = (state: StateSchema) =>
    state.articleDetailPage?.comments.error;
