import { classNames } from "shared/lib/classNames/className";
import cls from "./ArticleDetailPage.module.scss";
import { memo } from "react";
interface ArticleDetailPageProps {
    className?: string;
}

 const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    return (
        <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
            ARTIVLE DETAILS
        </div>
    );
};

export default memo(ArticleDetailPage)