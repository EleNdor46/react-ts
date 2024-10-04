import { classNames } from "shared/lib/classNames/className";
import cls from "./ProfileCard.module.scss";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { useSelector } from "react-redux";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title = {'profile'}/>
        <Button className={cls.editBtn} theme={ThemeButton.OUTLINE}>Редактировать</Button>
      </div>
      <div className={cls.data}>
        <Input className={cls.iput} value={data?.first} placeholder={'your name'}/>
        <Input className={cls.iput} value={data?.lastname} placeholder={'your lastname'}/>
      </div>
    </div>
  );
};
