export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    ARTICLE = "article",
    ARTICLE_DETAIL = "article_detail",
    ARTICLE_CREATE = "article_create",
    ARTICLE_EDIT = "article_edit",
    ADMIN = "admin",
    FORBIDDEN = "forbidden",
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/", // +id
    [AppRoutes.ARTICLE]: "/article/",
    [AppRoutes.ARTICLE_DETAIL]: "/article/", //+id
    [AppRoutes.ARTICLE_CREATE]: "/article/new",
    [AppRoutes.ARTICLE_EDIT]: "/article/:id/edit",
    [AppRoutes.ADMIN]: "/admin",
    [AppRoutes.FORBIDDEN]: "/forbidden",

    [AppRoutes.NOT_FOUND]: "/*",
};
