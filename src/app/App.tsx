import { classNames } from "shared/lib/classNames/className";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.setAuthData());
  }, [dispatch]);

  
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
