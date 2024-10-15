import { classNames } from "shared/lib/classNames/className";
import cls from "./ArtilcleImageBlockComponent.module.scss";
import { ArticleImageBlock } from "entities/Article/model/types/article";
import { Text, TextAlign } from "shared/ui/Text/Text";
interface ArtilcleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArtilcleImageBlockComponent = ({
    className,
    block,
}: ArtilcleImageBlockComponentProps) => {
    return (
        <div
            className={classNames(cls.ArtilclemageBlockComponent, {}, [
                className,
            ])}
        >
            <img src={block.src} className={cls.img}  alt={block.title}/>
            {block.title && (
                <Text text={block.title} aligin={TextAlign.CENTER}/>
            )}
        </div>
    );
};
