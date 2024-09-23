import { classNames } from "shared/lib/classNames/className";
import cls from "./StoreProvider.module.scss"
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";
import { DeepPartial } from "@reduxjs/toolkit";
interface StoreProviderProps {
    children?:ReactNode,
    initinalState?:DeepPartial<StateSchema>
}

export const StoreProvider = ({children,initinalState}:StoreProviderProps) => {
    const store = createReduxStore(initinalState as StateSchema)
return (
<Provider store={store}>
    {children}
</Provider>
 );
}; 