import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailPageSchema } from "entities/Article";
import { articleDetailsCommentsReducer } from "./ArticleDetailsCommentsSlice";
import { articleDetailPageRecomendationReducer } from "./articleDetailPageRecomendationSlice";

export const articleDetailReducer = combineReducers<ArticleDetailPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendation: articleDetailPageRecomendationReducer,
});
