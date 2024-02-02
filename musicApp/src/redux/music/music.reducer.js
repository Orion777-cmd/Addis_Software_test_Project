import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    hidden: -1,
    pauseButton: true,
    music: {
        data: null,
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
            state.music.errors = '';
        },

        getMusicSuccessAction :  ( state, {payload: music}) =>{
            state.music.data = music;
            state.music.isLoading = false;
            state.music.errors = '';
        }, 

        getMusicErrorAction: (state, {payload: error}) =>{
            state.music.isLoading = false;
            state.music.errors = error;
        }
    }

})

export const {toggleMusic,
    toggleMusicButton,
    getMusicAction,
    getMusicErrorAction,
    getMusicSuccessAction,
    } = profileSlice.actions

export default profileSlice.reducer 
