import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    hidden: -1
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
        }
    }

})

export const {toggleMusic} = profileSlice.actions

export default profileSlice.reducer 
