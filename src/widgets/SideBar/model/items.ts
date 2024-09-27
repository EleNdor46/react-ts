import AboutIcon from "widgets/assets/icon/AboutIcon.svg";
import MainIcon from "widgets/assets/icon/MainIcon.svg";
import ProfileIcon from "widgets/assets/icon/ProfileIcon.svg";
import { RoutePath } from "shared/config/RouterConfig/routerConfig";

export interface SideBarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SideBarItemsList: SideBarItemType[] = [
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
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: "Profile",
  },
];
