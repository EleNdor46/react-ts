import ArticleIcon from "widgets/assets/icon/ArticleIcon.svg";
import ProfileIcon from "widgets/assets/icon/ProfileIcon.svg";
import AboutIcon from "widgets/assets/icon/AboutIcon.svg";
import MainIcon from "widgets/assets/icon/MainIcon.svg";
import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { SideBarItemType } from "../types/sidbar";
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from "shared/const/router";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sideBarItemsList: SideBarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: "Main page",
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: "About page",
        },
    ];

    if (userData) {
        sideBarItemsList.push(
            {
                path:getRouteProfile(userData.id),
                Icon: ProfileIcon,
                text: "Profile",
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: ArticleIcon,
                text: "Artticle",
                authOnly: true,
            }
        );
    }
    return sideBarItemsList;
});
