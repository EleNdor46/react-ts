import React, { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContenext } from "../lib/ThemeContext";
const ThemeProvider: FC = ({ children }) => {
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
      ;
    </>
  );
};

export default ThemeProvider;
