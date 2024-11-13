import React, { FC, ReactNode, useMemo, useState } from "react";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContenext,
} from "../lib/ThemeContext";

interface ThemeProviderProps {
    ThemeProvider?: Theme;
    children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, ThemeProvider } = props;
    const defaultTheme =
        (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme]
    );

    return (
        <>
            <ThemeContenext.Provider value={defaultProps}>
                {children}
            </ThemeContenext.Provider>
        </>
    );
};

export default ThemeProvider;
