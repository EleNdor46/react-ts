import { ArticleDetailPageSchema } from "./../../../../entities/Article/model/types/index";
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { UserSchema } from "entities/User";
import { loginSchema } from "features/AuthByUsername";
import { articleDetailsSchema } from "entities/Article";
import { addCommentFormSchema } from "features/addCommentForm";
import { ArticlePageShema } from "pages/ArticlePage";
import { UISchema } from "features/UI";
import { rtkApi } from "shared/api/rtkApi";
import { ProfileSchema } from "features/EditableProfileCard/undex";

export interface StateSchema {
    user: UserSchema;
    ui: UISchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    //async
    profile?: ProfileSchema;
    loginForm?: loginSchema;
    articleDetails?: articleDetailsSchema;
    articleDetailPage?: ArticleDetailPageSchema;
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
