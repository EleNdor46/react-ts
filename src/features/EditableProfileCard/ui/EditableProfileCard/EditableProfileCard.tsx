import { memo, useCallback, useEffect } from "react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/AppDispatch/AppDispatch";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { ProfileCard } from "entities/Profile/ui/ProfileCard/ProfileCard";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileValidateError } from "../../model/selectors/getProfileValidateError/getProfileValidateError";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { profileActions, profileReducer } from "../../model/slice/ProfileSlice";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";
import { VStack } from "shared/ui/Stack";
interface EditableProfileCardProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo(
    ({ className, id }: EditableProfileCardProps) => {
        const dispatch = useAppDispatch();
        const formData = useSelector(getProfileForm);
        const error = useSelector(getProfileError);
        const isLoading = useSelector(getProfileIsLoading);
        const readonly = useSelector(getProfileReadonly);
        const validateErrors = useSelector(getProfileValidateError);

        useEffect(() => {
            if (id) {
                dispatch(fetchProfileData(id));
            }
        }, [dispatch, id]);

        const onChangeFirtsname = useCallback(
            (value?: string) => {
                dispatch(profileActions.updateProfile({ first: value || "" }));
            },
            [dispatch]
        );

        const onChangeLastname = useCallback(
            (value?: string) => {
                dispatch(
                    profileActions.updateProfile({ lastname: value || "" })
                );
            },
            [dispatch]
        );
        const onChangeAge = useCallback(
            (value?: string) => {
                dispatch(
                    profileActions.updateProfile({ age: Number(value) || 0 })
                );
            },
            [dispatch]
        );
        const onChangeCity = useCallback(
            (value?: string) => {
                dispatch(profileActions.updateProfile({ city: value || "" }));
            },
            [dispatch]
        );
        const onChangeUsername = useCallback(
            (value?: string) => {
                dispatch(
                    profileActions.updateProfile({ username: value || "" })
                );
            },
            [dispatch]
        );
        const onChangeAvatar = useCallback(
            (value?: string) => {
                dispatch(profileActions.updateProfile({ avatar: value || "" }));
            },
            [dispatch]
        );
        const onChangeCurrency = useCallback(
            (currency?: Currency) => {
                dispatch(profileActions.updateProfile({ currency }));
            },
            [dispatch]
        );
        const onChangeCountry = useCallback(
            (country?: Country) => {
                dispatch(profileActions.updateProfile({ country }));
            },
            [dispatch]
        );

        return (
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <VStack gap="8" max>
                    <EditableProfileCardHeader />
                    {validateErrors?.length &&
                        validateErrors.map((err: string) => (
                            <Text
                                theme={TextTheme.ERROR}
                                text={err}
                                key={err}
                            />
                        ))}

                    <ProfileCard
                        onChangeAge={onChangeAge}
                        data={formData}
                        isLoading={isLoading}
                        error={error}
                        readonly={readonly}
                        onChangeCity={onChangeCity}
                        onChangeFirtsname={onChangeFirtsname}
                        onChangeLastname={onChangeLastname}
                        onChangeUsername={onChangeUsername}
                        onChangeAvatar={onChangeAvatar}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                    ></ProfileCard>
                </VStack>
            </DynamicModuleLoader>
        );
    }
);
