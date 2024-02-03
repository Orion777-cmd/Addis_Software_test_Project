import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    hidden: true,
    addModalState: true,
    musicData: null
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal: (state, action) => {
            state.hidden = !state.hidden
            state.musicData = action.payload
        },
        toggleAddModalState: (state, action) => {
            state.addModalState = !state.addModalState
        }
    }

})

export const {toggleModal, toggleAddModalState} = modalSlice.actions

export default modalSlice.reducer 
