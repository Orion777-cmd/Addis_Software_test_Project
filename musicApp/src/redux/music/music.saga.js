// import {PayloadAction} from "@reduxjs/toolkit"
import {put, takeLatest,takeEvery, all} from "redux-saga/effects"
import { getAllMusicErrorAction,
     getAllMusicSuccessAction,
     getMusicErrorAction,
     getMusicSuccessAction,
    postMusicErrorAction,
    postMusicSuccessAction,
    putMusicErrorAction,
    putMusicSuccessAction,
    deleteMusicErrorAction,
    deleteMusicSuccessAction,
    } from "./music.reducer"
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

function* createMusicSaga({payload: music}){
    try{
        const response = yield fetch('http://localhost:3000/music', {
            method:"POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(music)
        });

        if (!response.ok){
            throw new Error('Failed to create music');
        }

        const newMusic = yield response.json();
        yield put(postMusicSuccessAction(newMusic));


    }catch(error){
        yield put(postMusicErrorAction(error.message));
    }
}

function* updateMusicSaga({payload: music}){
    try{
        const response = yield fetch('http://localhost:3000/music', {
            method:'PUT',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(music)
        })
        if (!response.ok){
            throw new Error('Failed to update music');
        }
        
        const updatedMusic = yield response.json();
        yield put(putMusicSuccessAction(updatedMusic));
    }catch (error){
        put(putMusicErrorAction(error.message));
    }
}

function* deleteMusicSaga({payload:id}){
    try{
        const response = yield fetch(`http://localhost:3000/music/${id}`, {
            method: 'DELETE',
        })
        if (!response.ok){
            throw new Error('Failed to delete music');
        }
        const deletedMusic = yield response.json();
        yield put(deleteMusicSuccessAction(deletedMusic));

    }catch(error){
        yield put(deleteMusicErrorAction(error.message));
    }
}

export function* watchGetMusic(){
    yield all ([
        takeLatest(GET_MUSIC_BY_ID, getMusicSaga),
        takeLatest(GET_ALL_MUSIC, getAllMusicSaga),
        takeLatest(POST_MUSIC, createMusicSaga),
        takeLatest(PUT_MUSIC, updateMusicSaga),
        takeLatest(DELETE_MUSIC, deleteMusicSaga)
    ])
    
}