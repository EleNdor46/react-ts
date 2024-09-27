import { FC, useEffect } from "react";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { useStore } from "react-redux";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateShemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type ReducerList = {
  [name in StateShemaKey]?: Reducer;
};

interface DynamicMuduleLoaderProps {
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

type ReducerListEntry = [StateShemaKey, Reducer];

export const DynamicMuduleLoader: FC<DynamicMuduleLoaderProps> = ({
  reducers,
  children,
  removeAfterUnmount,
}) => {
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, loginReducer);
    });

    if (removeAfterUnmount) {
      return () => {
        Object.entries(reducers).forEach(
          ([name, reducer]: ReducerListEntry) => {
            store.reducerManager.remove(name);
          }
        );
      };
    }
  }, []);

  return <>{children}</>;
};
