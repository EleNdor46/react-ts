import { AboutPage } from "pages/AboutPage/index";
import { MainPage } from "pages/MainPage/index";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/RouterConfig/routerConfig";
import { PageLoader } from "shared/ui/PageLoader/PageLoader";

const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">{element}</div>
          </Suspense>
        }
      />
    ))}
  </Routes>
);

export default AppRouter;
