import ArticleIcon from "widgets/assets/icon/ArticleIcon.svg";
import ProfileIcon from "widgets/assets/icon/ProfileIcon.svg";
import AboutIcon from "widgets/assets/icon/AboutIcon.svg";
import MainIcon from "widgets/assets/icon/MainIcon.svg";
import { RoutePath } from "shared/config/RouterConfig/routerConfig";
import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { SideBarItemType } from "../types/sidbar";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    console.log(userData);
    const sideBarItemsList: SideBarItemType[] = [
        {
            path: RoutePath.main,
            Icon: MainIcon,
            text: "Main page",
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: "About page",
        },
    ];

    if (userData) {
        sideBarItemsList.push(
            {
                path: RoutePath.profile + userData.id,
                Icon: ProfileIcon,
                text: "Profile",
                authOnly: true,
            },
            {
                path: RoutePath.article,
                Icon: ArticleIcon,
                text: "Artticle",
                authOnly: true,
            }
        );
    }
    return sideBarItemsList;
});
