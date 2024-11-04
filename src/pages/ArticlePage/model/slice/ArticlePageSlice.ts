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
import {
    ArticleSortField,
    ArticleType,
} from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";

const articleAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticle = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articleAdapter.getInitialState()
);
const ArticlePageSlice = createSlice({
    name: "ArticlePageSlice",
    initialState: articleAdapter.getInitialState<ArticlePageShema>({
        isLoading: true,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        hasMore: true,
        page: 1,
        _inited: false,
        limit: 9,
        sort: ArticleSortField.CREATED,
        search: "",
        order: "asc",
        type: ArticleType.ALL,
    }),
    reducers: {
        setView(state, action: PayloadAction<ArticleView>) {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        setOrder(state, action: PayloadAction<SortOrder>) {
            state.order = action.payload;
        },
        setSort(state, action: PayloadAction<ArticleSortField>) {
            state.sort = action.payload;
        },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
        setType(state, action: PayloadAction<ArticleType>) {
            state.type = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(
                ARTICLE_VIEW_LOCALSTORAGE_KEY
            ) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articleAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false;

                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articleAdapter.setAll(state, action.payload);
                } else {
                    articleAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: ArticlePageActions } = ArticlePageSlice;
export const { reducer: ArticlePageReducer } = ArticlePageSlice;
