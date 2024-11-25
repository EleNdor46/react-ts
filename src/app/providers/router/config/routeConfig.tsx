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
import { AppRoutes, RoutePath } from "shared/const/router";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE]: {
        path: RoutePath.article,
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAIL]: {
        path: `${RoutePath.article_detail}:id`,
        element: <ArticleDetailPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.FORBIDDEN]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN]: {
        path: `${RoutePath.admin}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
