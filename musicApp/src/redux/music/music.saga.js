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
    getMusicByTitleSuccessAction,
    getMusicByTitleErrorAction,
    getMusicByArtistSuccessAction,
    getMusicByArtistErrorAction,
    getMusicByGenreSuccessAction,
    getMusicByGenreErrorAction,
    getAllMusicAction,
    } from "./music.reducer"
import { GET_MUSIC_BY_ID, GET_ALL_MUSIC, POST_MUSIC, PUT_MUSIC, DELETE_MUSIC, GET_MUSIC_BY_ARTIST, GET_MUSIC_BY_GENRE, GET_MUSIC_BY_TITLE } from "./music.types";


function* getMusicSaga({ payload: id }) {
    try {
        const response = yield fetch(`https://music-backeend.vercel.app/music/${id}`);
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
       
        const response = yield fetch('https://music-backeend.vercel.app/music');
        if (!response.ok){
            throw new Error('Failed to fetch the musics');
        }

        const musics = yield response.json();
        yield put(getAllMusicSuccessAction(musics));
    }catch(error){
        yield put(getAllMusicErrorAction(error.message));
    }
}

function* getMusicByTitleSaga({payload: title}) {
    try{
        const response = yield fetch(`https://music-backeend.vercel.app/music/title/${title}`);
        if (!response.ok){
            throw new Error('Failed to fetch music by title');
        }
        const searchedMusics = yield response.json();
        yield put(getMusicByTitleSuccessAction(searchedMusics));
    }catch(error){
        yield put(getMusicByTitleErrorAction(error.message));
    }
}

function* getMusicByArtistSaga({payload: artist}) {
    try{
        const response = yield fetch(`https://music-backeend.vercel.app/music/artist/${artist}`);
        if (!response.ok){
            throw new Error('Failed to fetch musics by artist');
        }

        const searchedMusics = yield response.json();
        yield put(getMusicByArtistSuccessAction(searchedMusics));
    }catch(error){
        yield put(getMusicByArtistErrorAction(error.message));
    }
}

function* getMusicByGenreSaga({payload: genre}) {
    try{
        const response = yield fetch(`https://music-backeend.vercel.app/music/genre/${genre}`);
        if (!response.ok){
            throw new Error('Failed to fetch music by Genre');
        }
        const filteredMusics = yield response.json();
        yield put(getMusicByGenreSuccessAction(filteredMusics));
    }catch(error){
        yield put(getMusicByGenreErrorAction(error.message));
    }
}

function* createMusicSaga({payload: music}){
    try{
        const response = yield fetch("https://music-backeend.vercel.app/music", {
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
        yield put(getAllMusicAction())


    }catch(error){
        yield put(postMusicErrorAction(error.message));
    }
}

function* updateMusicSaga({payload: music}){
    try{
        const response = yield fetch(`https://music-backeend.vercel.app/music/${music._id}`, {
            method:'PATCH',
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
        yield put(getAllMusicAction())
    }catch (error){
        put(putMusicErrorAction(error.message));
    }
}

function* deleteMusicSaga({payload:id}){
    try{
        const response = yield fetch(`https://music-backeend.vercel.app/music/${id}`, {
            method: 'DELETE',
        })
        if (!response.ok){
            throw new Error('Failed to delete music');
        }
        const deletedMusic = yield response.json();
        yield put(deleteMusicSuccessAction(deletedMusic));
        yield put(getAllMusicAction())

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
        takeLatest(DELETE_MUSIC, deleteMusicSaga),
        takeLatest(GET_MUSIC_BY_TITLE, getMusicByTitleSaga),
        takeLatest(GET_MUSIC_BY_ARTIST, getMusicByArtistSaga),
        takeLatest(GET_MUSIC_BY_GENRE, getMusicByGenreSaga),
    ])
    
}