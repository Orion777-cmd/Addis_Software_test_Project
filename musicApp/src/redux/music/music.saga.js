// import {PayloadAction} from "@reduxjs/toolkit"
import {put, takeLatest} from "redux-saga/effects"
import { getMusicErrorAction, getMusicSuccessAction } from "./music.reducer"
import { GET_MUSIC_BY_ID } from "./music.types";
function* getMusicSaga({payload: id}){
    try{
        const response = yield fetch(`http://localhost:3000/music/${id}`);
        if(!response.ok){
            throw new Error('failed to fetch music')
        }
        console.log("response: ", response)
        const music = yield response.json();
        yield put(getMusicSuccessAction(music))
    }catch(error){
        yield put(getMusicErrorAction(error.message))
    }
}

export function* watchGetMusic(){
    yield takeLatest(GET_MUSIC_BY_ID, getMusicSaga)
}