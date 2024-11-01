import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";

import { fetchArticleList } from "../fetchArticleList/fetchArticleList";
import { ArticlePageActions } from "../../slice/ArticlePageSlice";
import { getArticlePageInited } from "../../selctors/articlePageSelectors";

export const initArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>("articlesPage/initArticlePage", async (_, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    const _inited = getArticlePageInited(getState());
    if (!_inited) {
        dispatch(ArticlePageActions.initState());
        dispatch(
            fetchArticleList({
                page: 1,
            })
        );
    }
});
