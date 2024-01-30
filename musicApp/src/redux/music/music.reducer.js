import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    hidden: true
}

const profileSlice = createSlice({
    name: "music",
    initialState,
    reducers: {
        toggleMusic: (state) => {
            state.hidden = !state.hidden
        }
    }

})

export const {toggleMusic} = profileSlice.actions

export default profileSlice.reducer 
