import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile, validateProfileError } from "../../types/Profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<validateProfileError[]>
>("profile/updateProfileData", async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const formData = getProfileForm(getState());

    const errors = validateProfileData(formData);

    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        const response = await extra.api.put<Profile>(
            `/profile/${formData?.id}`,
            formData
        );

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue([validateProfileError.SERVER_ERROR]);
    }
});
