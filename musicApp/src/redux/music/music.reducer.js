import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    hidden: -1,
    pauseButton: false,
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
        toggleMusicButton: (state, action) => {
            state.pauseButton = !state.pauseButton
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
    }

})

export const {toggleMusic,
    toggleMusicButton,
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
    deleteMusicSuccessAction

    } = profileSlice.actions

export default profileSlice.reducer 
