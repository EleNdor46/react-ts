import { To } from "history";
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
import { NavigateOptions } from "react-router-dom";
import { articleDetailsSchema } from "entities/Article";
import { ArticleDetailsCommentsSchema } from "pages/ArticleDetailsPage";
import { addCommentFormSchema } from "features/addCommentForm";
import { ArticlePageShema } from "pages/ArticlePage";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    //async
    profile?: ProfileSchema;
    loginForm?: loginSchema;
    articleDetails?: articleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
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
