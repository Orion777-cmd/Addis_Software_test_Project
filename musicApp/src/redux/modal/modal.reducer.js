import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    hidden: true
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.hidden = !state.hidden
        }
    }

})

export const {toggleModal} = modalSlice.actions

export default modalSlice.reducer 
