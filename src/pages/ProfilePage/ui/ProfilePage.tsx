import { classNames } from "shared/lib/classNames/className";
import cls from "./ProfilePage.module.scss";
import { DynamicMuduleLoader , ReducerList } from "shared/lib/components/DynamicMuduleLoader/DynamicMuduleLoader";
import { profileReducer } from "entities/Profile";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducerList = {
  profile:profileReducer
}


const ProfilePage = ({ className }: ProfilePageProps) => {
  return (
    <DynamicMuduleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        Profiel
      </div>
    </DynamicMuduleLoader>
  );
};

export default ProfilePage;
