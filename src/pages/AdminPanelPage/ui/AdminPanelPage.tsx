import { classNames } from "shared/lib/classNames/className";
import cls from "./AdminPanelPage.module.scss";
import { memo } from "react";
import { Page } from "widgets/Page/Page";
interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = memo(({ className }: AdminPanelPageProps) => {

    




    return (
        <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
            ADMINPANEL
        </Page>
    );
});
export default AdminPanelPage;
