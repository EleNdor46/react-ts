import { ArticleDetailPageSchema } from './../../../../entities/Article/model/types/index';
import { articleDetailPageRecomendationSchema } from "./../../../../pages/ArticlePage/model/type/articleDetailRecomendationSchema";
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { CounterSchema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { loginSchema } from "features/AuthByUsername";
import { articleDetailsSchema } from "entities/Article";
import { ArticleDetailsCommentsSchema } from "pages/ArticleDetailsPage";
import { addCommentFormSchema } from "features/addCommentForm";
import { ArticlePageShema } from "pages/ArticlePage";
import { UISchema } from "features/UI";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    ui: UISchema;
    //async
    profile?: ProfileSchema;
    loginForm?: loginSchema;
    articleDetails?: articleDetailsSchema;
    articleDetailPage?:ArticleDetailPageSchema
    addCommentForm?: addCommentFormSchema;
    articlePage?: ArticlePageShema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
