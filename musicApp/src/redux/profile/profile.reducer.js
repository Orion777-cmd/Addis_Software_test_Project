import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    hidden: true
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        toggleProfile: (state) => {
            state.hidden = !state.hidden
        }
    }

})

export const {toggleProfile} = profileSlice.actions

export default profileSlice.reducer 
