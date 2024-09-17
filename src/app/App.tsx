import "./style/index.scss";
import { classNames } from "shared/lib/classNames/className";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { Suspense, useEffect } from "react";
import i18n from "shared/config/i18n/i18n";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";

const App = () => {
  const { theme } = useTheme();


  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
