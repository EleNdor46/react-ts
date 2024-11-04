import { classNames } from "shared/lib/classNames/className";
import cls from "./ArticleSortSelector.module.scss";
import { memo, useCallback, useMemo } from "react";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";
interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(
    ({
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    }: ArticleSortSelectorProps) => {
        const orderOptions = useMemo<SelectOption<SortOrder>[]>(
            () => [
                {
                    value: "asc",
                    content: "возрастанию",
                },
                {
                    value: "desc",
                    content: "убыванию",
                },
            ],
            []
        );
        const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
            () => [
                {
                    value: ArticleSortField.CREATED,
                    content: "дате создания",
                },
                {
                    value: ArticleSortField.TITTLE,
                    content: "названию",
                },
                {
                    value: ArticleSortField.VIEWS,
                    content: "популярности",
                },
            ],
            []
        );

        return (
            <div
                className={classNames(cls.ArticleSortSelector, {}, [className])}
            >
                <Select<ArticleSortField>
                    label={"Сортировать ПО"}
                    options={sortFieldOptions}
                    onChange={onChangeSort}
                    value={sort}
                />
                <Select
                    label={"по"}
                    options={orderOptions}
                    value={order}
                    onChange={onChangeOrder}
                    className={cls.order}
                />
            </div>
        );
    }
);
