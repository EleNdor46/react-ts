import {
  AnyAction,
  combineReducers,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { ReducerManager, StateSchema, StateShemaKey } from "./StateSchema";

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: StateShemaKey[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (let key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: StateShemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateShemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}
