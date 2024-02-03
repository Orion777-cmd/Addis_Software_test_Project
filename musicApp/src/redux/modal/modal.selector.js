import {createSelector} from 'reselect';

const selectModal = state => state.modal;

export const selectModalState = createSelector(
    [selectModal], 
    modal => modal.hidden
)

export const selectModalData = createSelector(
    [selectModal],
    modal => modal.musicData
)

export const selectAddModalState = createSelector(
    [selectModal],
    modal => modal.addModalState
)