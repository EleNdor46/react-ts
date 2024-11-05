import { EntityState } from "@reduxjs/toolkit";
import { Article } from "entities/Article";

export interface articleDetailPageRecomendationSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
}
