import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addCommentFormSchema } from "../types/addCommentForm";

const initialState: addCommentFormSchema = {
    text: "",
    error: undefined,
};

export const addCommentFormSlice = createSlice({
    name: "addCommentForm",
    initialState,
    reducers: {
        setText(state, action: PayloadAction<string>) {
            state.text = action.payload;
        },
    },
    //   extraReducers: (builder) => {
    //       builder
    //           .addCase(loginByUsername.pending, (state) => {
    //             console.log()
    //               state.error = undefined;
    //               state.isLoading = true;
    //           })
    //           .addCase(loginByUsername.fulfilled, (state) => {
    //               state.isLoading = false;
    //           })
    //           .addCase(loginByUsername.rejected, (state, action) => {
    //               state.isLoading = false;
    //               state.error = action.payload;
    //           });
    //   },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
