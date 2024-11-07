import { classNames } from "shared/lib/classNames/className";
import cls from "./ArticleDetailPageHeader.module.scss";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/RouterConfig/routerConfig";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getCanEditArticle } from "pages/ArticleDetailsPage/model/selector/article";
import { getArticleDetailsData } from "entities/Article";
import { HStack } from "shared/ui/Stack";
interface ArticleDetailPageHeaderProps {
    className?: string;
}

export const ArticleDetailPageHeader = memo(
    ({ className }: ArticleDetailPageHeaderProps) => {
        const navigate = useNavigate();
        const canEdit = useSelector(getCanEditArticle);
        const article = useSelector(getArticleDetailsData);
        console.log(article?.id);
        const onBackToList = useCallback(() => {
            navigate(RoutePath.article);
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            navigate(`${RoutePath.article}${article?.id}/edit`);
        }, [navigate, article?.id]);

        return (
            <HStack max justify={"between"}
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
