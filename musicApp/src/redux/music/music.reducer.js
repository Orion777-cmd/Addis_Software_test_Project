import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    hidden: -1,
    currentMusic: {
        playPause: false,
        data: null,
    },
    music: {
        data: null,
        isLoading: false,
        errors: '',
    },
    musics: {
        data: [],
        isLoading: false,
        errors: '',
    }
}

const profileSlice = createSlice({
    name: "music",
    initialState,
    reducers: {
        toggleMusic: (state, action) => {
            console.log("reducer: ", action.payload)
            if (state.hidden == action.payload.idx){
                state.hidden = -1
            }else {
                state.hidden = action.payload.idx;
            }
        }, 
        toggleCurrentMusic: (state, action) => {
            state.currentMusic.playPause = !state.currentMusic.playPause;
            state.currentMusic.data = action.payload;
        }, 

        getMusicAction: (state, {payload: id}) => {
            state.music.isLoading = true;
            state.music.errors = null;
        },

        getMusicSuccessAction :  ( state, {payload: music}) =>{
            state.music.data = music;
            state.music.isLoading = false;
            state.music.errors = null;
        }, 

        getMusicErrorAction: (state, {payload: error}) =>{
            state.music.isLoading = false;
            state.music.errors = error;
        },
        getAllMusicAction: (state, action) => {
            console.log("action dispatched")
            state.musics.isLoading = true;
            state.musics.errors = null;
        },
        getAllMusicSuccessAction: (state, {payload: musics}) => {
            state.musics.data = musics;
            state.musics.errors = null;
            state.musics.isLoading = false;
            
        },
        getAllMusicErrorAction: (state, {payload: error}) => {
            
            state.musics.errors = error;
            state.musics.isLoading = false;
        },
        postMusicAction: (state, {payload: music}) => {
            state.music.isLoading = true;
            state.music.errors = '';
        },
        postMusicSuccessAction: (state, {payload: music}) => {
            state.music.data = music;
            state.music.isLoading = false;
            state.music.errors = '';
        },
        postMusicErrorAction: (state, {payload: error}) => {
            state.music.isLoading = false;
            state.music.errors = error;
        },
        putMusicAction: (state, {payload: music}) => {
            state.music.isLoading = true;
            state.music.errors = '';
        },
        putMusicSuccessAction: (state, {payload: music}) => {
            state.music.data = music;
            state.music.isLoading = false;
            state.music.errors = '';
        },
        putMusicErrorAction: (state, {payload: error}) => {
            state.music.isLoading = false;
            state.music.errors = error;
        },
        deleteMusicAction: (state, {payload: id}) => {
            state.music.isLoading = true;
            state.music.errors = '';
        },
        deleteMusicSuccessAction: (state, {payload: music}) => {
            state.music.data = music;
            state.music.isLoading = false;
            state.music.errors = '';
        },
        deleteMusicErrorAction: (state, {payload: error}) => {
            state.music.isLoading = false;
            state.music.errors = error;
        },
        getMusicByTitleAction: (state, {payload: title}) => {
            state.musics.isLoading = true;
            state.musics.errors = null;
        },
        getMusicByTitleSuccessAction: (state, {payload: musics}) => {
            state.musics.data = musics;
            state.musics.isLoading = false;
        },
        getMusicByTitleErrorAction: (state, {payload: error}) => {
            state.musics.errors = error;
            state.musics.isLoading = false;
        },
        getMusicByArtistAction: (state, {payload:artist}) =>{
            state.musics.isLoading = true;
            state.musics.errors = null;

        },
        getMusicByArtistSuccessAction: (state, {payload: musics}) => {
            state.musics.data = musics;
            state.musics.isLoading = false;

        },
        getMusicByArtistErrorAction: (state, {payload: error}) => {
            state.musics.errors = error;
            state.musics.isLoading = false;
        },
        getMusicByGenreACtion: (state, {payload: genre}) =>{
            state.musics.isLoading = true;
            state.musics.errors = null;
        },
        getMusicByGenreSuccessAction: (state, {payload: musics}) => {
            state.musics.data = musics;
            state.musics.isLoading = false;
        },
        getMusicByGenreErrorAction: (state, {payload: error}) => {
            state.musics.errors = error;
            state.musics.isLoading = false;
        }


    }

})

export const {toggleMusic,
    toggleCurrentMusic,
    getMusicAction,
    getMusicErrorAction,
    getMusicSuccessAction,
    getAllMusicAction,
    getAllMusicErrorAction,
    getAllMusicSuccessAction,
    postMusicAction,
    postMusicErrorAction,
    postMusicSuccessAction,
    putMusicAction,
    putMusicErrorAction,
    putMusicSuccessAction,
    deleteMusicAction,
    deleteMusicErrorAction,
    deleteMusicSuccessAction,
    getMusicByTitleAction,
    getMusicByTitleErrorAction,
    getMusicByTitleSuccessAction,
    getMusicByArtistAction,
    getMusicByArtistErrorAction,
    getMusicByArtistSuccessAction,
    getMusicByGenreACtion,
    getMusicByGenreErrorAction,
    getMusicByGenreSuccessAction,

    } = profileSlice.actions

export default profileSlice.reducer 
