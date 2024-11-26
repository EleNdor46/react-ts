import { AboutPage } from "pages/AboutPage/index";
import { MainPage } from "pages/MainPage";
import { UserRole } from "entities/User";
import { ProfilePage } from "pages/ProfilePage";
import { AdminPanelPage } from "pages/AdminPanelPage";
import { ArticleDetailPage } from "pages/ArticleDetailsPage";
import { ArticleEditPage } from "pages/ArticleEditPage";
import { ArticlePage } from "pages/ArticlePage";
import { ForbiddenPage } from "pages/ForbiddenPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { AppRoutesProps } from "shared/types/router";
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdmin,
    getRouteArticleCreate,
    getRouteArticleDetail,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteProfile,
} from "shared/const/router";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(":id"),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE]: {
        path: getRouteArticles(),
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAIL]: {
        path: getRouteArticleDetail(":id"),
        element: <ArticleDetailPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(":id"),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
