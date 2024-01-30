import {createSelector} from 'reselect';

const selectMusicProfile = state => state.music;

export const selectMusicHidden = createSelector(
    [selectMusicProfile], 
    music => music.hidden
)