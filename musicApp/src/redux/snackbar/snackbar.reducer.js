import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    hidden: true,
}

const snackbarSlice = createSlice({
    name: "snackbar",
    initialState,
    reducers: {
        toggleSnackbar: (state, action) => {
            state.hidden = !state.hidden;
        }
    }
})

export const {toggleSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;