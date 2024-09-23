import { classNames } from "shared/lib/classNames/className";
import cls from "./LoginForm.module.scss";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input className={cls.input} type="text" placeholder={'email'} autoFocus={true} />
      <Input className={cls.input} type="text" placeholder={'password'} />
      <Button className={cls.loginBtn}>Войти</Button>
    </div>
  );
};
