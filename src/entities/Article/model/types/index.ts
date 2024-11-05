import { articleDetailPageRecomendationSchema } from "./../../../../pages/ArticlePage/model/type/articleDetailRecomendationSchema";
import { ArticleDetailsCommentsSchema } from "pages/ArticleDetailsPage";

export interface ArticleDetailPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendation: articleDetailPageRecomendationSchema;
}
