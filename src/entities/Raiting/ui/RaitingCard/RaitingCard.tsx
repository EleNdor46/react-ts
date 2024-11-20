import { classNames } from "shared/lib/classNames/className";
import cls from "./RaitingCard.module.scss";
import { memo, useCallback, useState } from "react";
import { Card } from "shared/ui/Card/Card";
import { HStack, VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import { StarRating } from "shared/ui/StarRating/StarRating";
import { Modal } from "shared/ui/Modal/Modal";
import { Input } from "shared/ui/Input/Input";
import { Button, ThemeButton } from "shared/ui/Button/Button";
interface RaitingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starCount: number) => void;
    onAccept?: (starCount: number, feedback?: string) => void;
}

export const RaitingCard = memo(
    ({
        className,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
        title,
    }: RaitingCardProps) => {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [starsCount, setStarsCount] = useState(0);
        const [feedback, setFeedback] = useState("");

        const onSelectStars = useCallback(
            (selectedStarsCount: number) => {
                setStarsCount(selectedStarsCount);

                if (hasFeedback) {
                    setIsModalOpen(true);
                } else {
                    onAccept?.(selectedStarsCount);
                }
            },
            [hasFeedback, onAccept]
        );

        const acceptHandler = useCallback(() => {
            setIsModalOpen(false);
            onAccept?.(starsCount, feedback);
        }, [starsCount, onAccept, feedback]);

        const cancelHandler = useCallback(() => {
            setIsModalOpen(false);
            onCancel?.(starsCount);
        }, [starsCount, onCancel]);

        return (
            <Card className={classNames(cls.RaitingCard, {}, [className])}>
                <VStack align="center" gap="8">
                    <Text title={title} />
                    <StarRating size={40} onSelect={onSelectStars} />
                </VStack>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap="32" max>
                        <Text title={feedbackTitle} />
                        <Input
                            placeholder="FeedBack"
                            value={feedback}
                            onChange={setFeedback}
                        />
                        <HStack gap="16" justify="end">
                            <Button
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={cancelHandler}
                            >
                                Close
                            </Button>
                            <Button onClick={acceptHandler}>Send</Button>
                        </HStack>
                    </VStack>
                </Modal>
            </Card>
        );
    }
);
