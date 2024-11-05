import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { articleDetailPageRecomendationSchema } from "../../../ArticlePage/model/type/articleDetailRecomendationSchema";
import { fetchArticleRecommendation } from "../services/fetchArticleRecomendation/fetchArticleRecomendation";

const recommendationAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecomendation =
    recommendationAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailPage?.recommendation ||
            recommendationAdapter.getInitialState()
    );
const articleDetailPageRecomendationSlice = createSlice({
    name: "articleDetailPageRecomendationSlice",
    initialState:
        recommendationAdapter.getInitialState<articleDetailPageRecomendationSchema>(
            {
                isLoading: true,
                error: undefined,
                ids: [],
                entities: {},
            }
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendation.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendation.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendation.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailPageRecomendationActions } =
    articleDetailPageRecomendationSlice;
export const { reducer: articleDetailPageRecomendationReducer } =
    articleDetailPageRecomendationSlice;
