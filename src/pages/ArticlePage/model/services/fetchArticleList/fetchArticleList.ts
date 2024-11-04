import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import {
    getArticlePageLimit,
    getArticlePageNum,
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
} from "../../selctors/articlePageSelectors";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";
import { ArticleType } from "entities/Article/model/types/article";

export interface FetchArticleListProps {
    replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>
>("articlePage/fetchArticleList", async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const order = getArticlePageOrder(getState());
    const sort = getArticlePageSort(getState());
    const search = getArticlePageSearch(getState());
    const limit = getArticlePageLimit(getState());
    const page = getArticlePageNum(getState());
    const type = getArticlePageType(getState());
    try {
        addQueryParams({
            sort,
            search,
            order,
        });
        const response = await extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: "user",
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === ArticleType.ALL ? undefined : type,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue("error");
    }
});
