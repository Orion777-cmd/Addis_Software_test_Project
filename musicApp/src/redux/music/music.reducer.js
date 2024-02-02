import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    hidden: -1,
    pauseButton: true,
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
        }
    }

})

export const {toggleMusic, toggleMusicButton} = profileSlice.actions

export default profileSlice.reducer 
