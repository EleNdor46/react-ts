import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";

import { fetchArticleList } from "../fetchArticleList/fetchArticleList";
import { ArticlePageActions } from "../../slice/ArticlePageSlice";
import { getArticlePageInited } from "../../selctors/articlePageSelectors";
import { SortOrder } from "shared/types";
import {
    ArticleSortField,
    ArticleType,
} from "entities/Article/model/types/article";

export const initArticlePage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>("articlesPage/initArticlePage", async (searchParams, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    const _inited = getArticlePageInited(getState());

    if (!_inited) {
        const orderFromUrl = searchParams.get("order") as SortOrder;
        const sortFromUrl = searchParams.get("sort") as ArticleSortField;
        const searchFromUrl = searchParams.get("search");
        const typeFromUrl = searchParams.get("type") as ArticleType;

        if (orderFromUrl) {
            dispatch(ArticlePageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(ArticlePageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(ArticlePageActions.setSearch(searchFromUrl));
        }
        if (typeFromUrl) {
            dispatch(ArticlePageActions.setType(typeFromUrl));
        }

        dispatch(ArticlePageActions.initState());
        dispatch(fetchArticleList({}));
    }
});
