import { classNames, Mods } from "shared/lib/classNames/className";
import cls from "./Input.module.scss";
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    readonly?: boolean;
}

export const Input = memo(
    ({
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        autoFocus,
        readonly,
        ...props
    }: InputProps) => {
        const ref = useRef<HTMLInputElement>(null);
        const [isFocused, setIsFocused] = useState(false);
        const [caretPosition, setCaretPosition] = useState(0);

        const isCaretVisible = isFocused && !readonly;

        const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
            setCaretPosition(e.target.value.length);
        };

        const onBlur = () => {
            setIsFocused(false);
        };

        const onFocus = () => {
            setIsFocused(true);
        };

        const onSelect = (e: any) => {
            setCaretPosition(e?.target?.selectionStart || 0);
        };

        useEffect(() => {
            if (autoFocus) {
                setIsFocused(true);
                ref.current?.focus();
            }
        }, [autoFocus]);

        const mods: Mods = {
            [cls.readonly]: readonly,
        };

        return (
            <div className={classNames(cls.InputWrapper, mods, [className])}>
                {placeholder && (
                    <div className={cls.placeholder}>{`${placeholder}>`}</div>
                )}
                <div className={cls.caretWrapper}>
                    <input
                        ref={ref}
                        type={type}
                        value={value}
                        onChange={onChangeHandler}
                        className={cls.input}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onSelect={onSelect}
                        readOnly={readonly}
                    />
                    {isCaretVisible && (
                        <span
                            className={cls.caret}
                            style={{ left: `${caretPosition * 7.5}px` }}
                        >
                            {" "}
                        </span>
                    )}
                </div>
            </div>
        );
    }
);
