import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { CounterSchema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { loginSchema } from "features/AuthByUsername";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  //async
  profile?:ProfileSchema
  loginForm?: loginSchema;
}

export type StateShemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateShemaKey, reducer: Reducer) => void;
  remove: (key: StateShemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
