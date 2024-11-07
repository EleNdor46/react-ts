import { classNames } from "shared/lib/classNames/className";
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
import { HStack } from "shared/ui/Stack/HStack/HStack";
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
        <HStack
            gap="8"
            justify={"between"}
            max
            className={classNames("", {}, [className])}
        >
            <Text title={"profile"} />
            {canEdit && (
                <>
                    {readonly ? (
                        <Button theme={ThemeButton.OUTLINE} onClick={onEdit}>
                            Редактировать
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >
                                отменить
                            </Button>
                            <Button
                                theme={ThemeButton.OUTLINE}
                                onClick={onSave}
                            >
                                сохранить
                            </Button>
                        </HStack>
                    )}
                </>
            )}
        </HStack>
    );
};
