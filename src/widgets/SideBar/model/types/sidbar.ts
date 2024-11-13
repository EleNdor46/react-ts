export interface SideBarItemType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
