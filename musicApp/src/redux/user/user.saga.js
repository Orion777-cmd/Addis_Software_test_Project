import {takeLatest, put, call} from "redux-saga/effects";

import {
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
    signUpFailureAction
} from "./user.reducer";


import {getAuth, singInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import {getDoc} from "firebase/firestore";

import {getCurrentUser, createUserProfileDocument} from "../../firebase/firebase.utils";

export function* signInWithGoogle(){
    
}