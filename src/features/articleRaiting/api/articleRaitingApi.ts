import { Raitig } from "entities/Raiting";
import { rtkApi } from "shared/api/rtkApi";

interface GetArticleRaitingArg {
    userId: string;
    articleId: string;
}

interface RateArticleArg {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRaitingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRaiting: build.query<Raitig[], GetArticleRaitingArg>({
            query: ({ userId, articleId }) => ({
                url: "/article-ratings",
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, RateArticleArg>({
            query: (arg) => ({
                url: "/article-ratings",
                method: "POST",
                body: arg,
            }),
        }),
    }),
});

export const useArticleRaiting = articleRaitingApi.useGetArticleRaitingQuery;
export const useRateArticle = articleRaitingApi.useRateArticleMutation;
