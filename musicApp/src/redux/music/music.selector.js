import {createSelector} from 'reselect';

const selectMusicProfile = state => state.music;

export const selectMusicHidden = createSelector(
    [selectMusicProfile], 
    music => music.hidden
)



export const selectMusicPauseButton = createSelector(
    [selectMusicProfile],
    music => music.pauseButton,
)

export const selectMusicData = createSelector(
    [selectMusicProfile],
    music => music.music
)

export const selectAllMusicData = createSelector(
    [selectMusicProfile],
    music => music.musics
)