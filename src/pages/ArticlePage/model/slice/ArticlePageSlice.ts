import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { ArticlePageShema } from "../type/ArticlePageShema";
import { StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleView } from "entities/Article";
import { fetchArticleList } from "../services/fetchArticleList/fetchArticleList";
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from "shared/const/localStorage";

const articleAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticle = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articleAdapter.getInitialState()
);
export const ArticlePageSlice = createSlice({
    name: "ArticlePageSlice",
    initialState: articleAdapter.getInitialState<ArticlePageShema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
    }),
    reducers: {
        setView(state, action: PayloadAction<ArticleView>) {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY , action.payload)
        },
        initState(state) {
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleList.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    articleAdapter.setAll(state, action.payload);
                }
            )
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: ArticlePageActions } = ArticlePageSlice;
export const { reducer: ArticlePageReducer } = ArticlePageSlice;
