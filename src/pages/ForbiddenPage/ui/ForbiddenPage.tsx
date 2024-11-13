import { classNames } from "shared/lib/classNames/className";
import cls from "./ForbiddenPage.module.scss";
import { memo } from "react";
import { Page } from "widgets/Page/Page";
interface ForbiddenPageProps {
    className?: string;
}

 const ForbiddenPage = memo(({ className }: ForbiddenPageProps) => {
    return (
        <Page className={classNames(cls.ForbiddenPage, {}, [className])}>
            Forbidden
        </Page>
    );
});
export default ForbiddenPage
