import { classNames } from "shared/lib/classNames/className";
import cls from "./CommentList.module.scss";
import { Text } from "shared/ui/Text/Text";
import { CommentCard } from "../CommentCard/CommentCard";
import { Comment } from "entities/Comment/model/types/commemts";
import { VStack } from "shared/ui/Stack";
interface CommentListProps {
    className?: string;
    comments?: Array<Comment>;
    isLoading?: boolean;
}

export const CommentList = ({
    className,
    comments,
    isLoading,
}: CommentListProps) => {
    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack max  gap='16' className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                    />
                ))
            ) : (
                <Text text={"Комментарии отсутствуют"} />
            )}
        </VStack>
    );
};
