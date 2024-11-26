import { classNames } from "shared/lib/classNames/className";
import cls from "./ArticleDetailPageHeader.module.scss";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getCanEditArticle } from "pages/ArticleDetailsPage/model/selector/article";
import { getArticleDetailsData } from "entities/Article";
import { HStack } from "shared/ui/Stack";
import {
    getRouteArticleCreate,
    getRouteArticleEdit,
    getRouteArticles,
} from "shared/const/router";
interface ArticleDetailPageHeaderProps {
    className?: string;
}

export const ArticleDetailPageHeader = memo(
    ({ className }: ArticleDetailPageHeaderProps) => {
        const navigate = useNavigate();
        const canEdit = useSelector(getCanEditArticle);
        const article = useSelector(getArticleDetailsData);
        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            if (article?.id) {
                navigate(getRouteArticleEdit(article.id));
            }
        }, [navigate, article?.id]);

        return (
            <HStack
                max
                justify={"between"}
                className={classNames(cls.ArticleDetailPageHeader, {}, [
                    className,
                ])}
            >
                <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
                    Back
                </Button>
                {canEdit && (
                    <Button
                        theme={ThemeButton.OUTLINE}
                        onClick={onEditArticle}
                        className={cls.editBtn}
                    >
                        Edit
                    </Button>
                )}
            </HStack>
        );
    }
);
