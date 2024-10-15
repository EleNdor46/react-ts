import { classNames } from "shared/lib/classNames/className";
import cls from "./ArticleDetailPage.module.scss";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { id } = useParams<{ id: string }>();
    console.log(id)
    if (!id) {
        return (
            <div className={classNames("", {}, [className])}>
                Dont fiend Article
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailPage);
