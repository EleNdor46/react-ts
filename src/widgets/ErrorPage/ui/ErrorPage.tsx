import { classNames } from "shared/lib/classNames/className";
import cls from "./ErrorPage.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Page } from "widgets/Page/Page";
interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        location.reload();
    };
    return (
        <Page
            data-testid={"ErrorPage"}
            className={classNames(cls.ErrorPage, {}, [className])}
        >
            <p>{t("произошла непредвиденная ошибка")}</p>
            <Button onClick={reloadPage}> Обновить страницу</Button>
        </Page>
    );
};
