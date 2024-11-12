import { getUserAuthData } from "entities/User";
import { getProfileData } from "features/EditableProfileCard/model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "features/EditableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly";
import { updateProfileData } from "features/EditableProfileCard/model/services/updateProfileData/updateProfileData";
import { profileActions } from "features/EditableProfileCard/model/slice/ProfileSlice";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/className";
import { useAppDispatch } from "shared/lib/hooks/AppDispatch/AppDispatch";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { HStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    ({ className }: EditableProfileCardHeaderProps) => {
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
                            <Button
                                theme={ThemeButton.OUTLINE}
                                onClick={onEdit}
                            >
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
    }
);
