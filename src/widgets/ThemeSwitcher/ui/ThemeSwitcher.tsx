import { classNames } from "shared/lib/classNames/className";
import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "widgets/assets/icon/LightIcon.svg";
import DarkIcon from "widgets/assets/icon/DarkIcon.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? (
        <LightIcon width={30} height={30} />
      ) : (
        <DarkIcon width={30} height={30} />
      )}
    </Button>
  );
};
