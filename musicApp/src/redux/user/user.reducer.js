import {createSlice} from "@reduxjs/toolkit";
import {signInWithEmailAndPassword} from "firebase/auth";

const initialState = {
    currentUser: null,
    error: null,
    isLoading: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        googleSignInStartAction: (state) => {
            state.isLoading = true;
        },

        signInSuccessAction: (state,action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
        },
        signInFailureAction: (state, action)=>{
            state.isLoading = false;
            state.error = action.payload.error;
        },
        emailSignInStartAction: (state) =>{
            state.isLoading = true;
        },
        checkUserSessionAction: (state) => {
            state.isLoading = true;
        },

        signOutStartAction: (state) => {
            state.isLoading = true;
        },

        signOutSuccessAction: (state, action) => {
            state.isLoading = false;
            state.currentUser = null;
        },

        signOutFailureAction: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },

        signUpStartAction: (state,action) => {
            state.isLoading = true;
        },

        signUpSuccessAction: (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
        },

        signUpFailureAction: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        }
    }

     
});

export const {
    googleSignInStartAction,
    signInSuccessAction,
    signInFailureAction,
    emailSignInStartAction,
    checkUserSessionAction,
    signOutStartAction,
    signOutSuccessAction,
    signOutFailureAction,
    signUpStartAction,
    signUpSuccessAction,
    signUpFailureAction,

} = userSlice.actions;


export default userSlice.reducer;