import { classNames } from "shared/lib/classNames/className";
import cls from "./StarRating.module.scss";
import { memo, useState } from "react";
import { Icon } from "../Icon/Icon";
import StartIcon from "widgets/assets/icon/StarIcon.svg";
interface StarRatingProps {
    className?: string;
    onSelect?: (startCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(
    ({
        className,
        onSelect,
        size = 30,
        selectedStars = 0,
    }: StarRatingProps) => {
        const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
        const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

        const onHover = (starCount: number) => () => {
            if (!isSelected) {
                setCurrentStarsCount(starCount);
            }
        };

        const onLeave = () => () => {
            if (!isSelected) {
                setCurrentStarsCount(0);
            }
        };

        const onClick = (starCount: number) => () => {
            if (!isSelected) {
                onSelect?.(starCount);
                setCurrentStarsCount(starCount);
                setIsSelected(true);
            }
        };

        return (
            <div className={classNames(cls.StarRating, {}, [className])}>
                {stars.map((star) => (
                    <Icon
                        Svg={StartIcon}
                        key={star}
                        className={classNames(cls.starIcon, {[cls.selected]: isSelected }, [
                            currentStarsCount >= star
                                ? cls.hovered
                                : cls.normal,
                        ])}
                        width={size}
                        height={size}
                        onMouseLeave={onLeave}
                        onMouseEnter={onHover(star)}
                        onClick={onClick(star)}
                    />
                ))}
            </div>
        );
    }
);
