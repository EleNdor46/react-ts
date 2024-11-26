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

export const getRouteMain = () => "/";
export const getRouteAbout = () => "/about";
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => `/article`;
export const getRouteArticleDetail = (id: string) => `/article/${id}`;
export const getRouteArticleEdit = (id: string) => `/article/${id}/edit`;
export const getRouteArticleCreate = () => `/article/new`;
export const getRouteAdmin = () => `/admin`;
export const getRouteForbidden = () => `/forbidden`;


