// import {PayloadAction} from "@reduxjs/toolkit"
import {put, takeLatest,takeEvery, all} from "redux-saga/effects"
import { getAllMusicErrorAction, getAllMusicSuccessAction, getMusicErrorAction, getMusicSuccessAction } from "./music.reducer"
import { GET_MUSIC_BY_ID, GET_ALL_MUSIC, POST_MUSIC, PUT_MUSIC, DELETE_MUSIC } from "./music.types";


function* getMusicSaga({ payload: id }) {
    try {
        const response = yield fetch(`http://localhost:3000/music/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch music');
        }
        const music = yield response.json();
        yield put(getMusicSuccessAction(music));
    } catch (error) {
        yield put(getMusicErrorAction(error.message));
    }
}

function* getAllMusicSaga(){
    try{
        console.log("get all music saga called")
        const response = yield fetch('http://localhost:3000/music');
        if (!response.ok){
            throw new Error('Failed to fetch the musics');
        }

        const musics = yield response.json();
        yield put(getAllMusicSuccessAction(musics));
    }catch(error){
        yield put(getAllMusicErrorAction(error.message));
    }
}

export function* watchGetMusic(){
    yield all ([
        takeLatest(GET_MUSIC_BY_ID, getMusicSaga),
        takeEvery(GET_ALL_MUSIC, getAllMusicSaga),
    ])
    
}