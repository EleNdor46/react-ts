import { classNames } from "shared/lib/classNames/className";
import cls from "./ArticleEditPage.module.scss";
import { memo } from "react";
import { Page } from "widgets/Page/Page";
import { useParams } from "react-router-dom";
interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? 'edit ' + id: 'created'}
        </Page>
    );
});
export default ArticleEditPage;
