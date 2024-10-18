import { classNames } from "shared/lib/classNames/className";
import cls from "./ProfilePageHeader.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/AppDispatch/AppDispatch";
import { useCallback } from "react";
import { getUserAuthData } from "entities/User";
interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <div className={cls.header}>
                <Text title={"profile"} />
                {canEdit && (
                    <div className={cls.btnsWrapper}>
                        {readonly ? (
                            <Button
                                className={cls.editBtn}
                                theme={ThemeButton.OUTLINE}
                                onClick={onEdit}
                            >
                                Редактировать
                            </Button>
                        ) : (
                            <>
                                <Button
                                    className={cls.editBtn}
                                    theme={ThemeButton.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    отменить
                                </Button>
                                <Button
                                    className={cls.saveBtn}
                                    theme={ThemeButton.OUTLINE}
                                    onClick={onSave}
                                >
                                    сохранить
                                </Button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
