import { classNames } from "shared/lib/classNames/className";
import cls from "./Code.module.scss";
import { Button, ThemeButton } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import CopyIcon from "widgets/assets/icon/CopyIcon.svg";
import { useCallback } from "react";
interface CodeProps {
    className?: string;
    text: string;
}

export const Code = ({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme={ThemeButton.CLEAR}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
};
