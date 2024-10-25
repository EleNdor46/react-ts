import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { ArticlePageActions } from '../../slice/ArticlePageSlice';
import { getArticlePageHasMore, getArticlePageIsLoading, getArticlePageNum } from '../../selctors/articlePageSelectors';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchNextArticlePage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const hasMore = getArticlePageHasMore(getState());
            const page = getArticlePageNum(getState());
            const isLoading = getArticlePageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(ArticlePageActions.setPage(page + 1));
                dispatch(fetchArticleList({
                    page: page + 1,
                }));
            }
        },
    );
