import {createSelector} from 'reselect';

const selectMusicProfile = state => state.music;

export const selectMusicHidden = createSelector(
    [selectMusicProfile], 
    music => music.hidden
)



export const selectCurrentMusicPlayPause = createSelector(
    [selectMusicProfile],
    music => music.currentMusic.playPause,
)

export const selectCurrentMusicData = createSelector(
    [selectMusicProfile],
    music => music.currentMusic.data
)

export const selectMusicData = createSelector(
    [selectMusicProfile],
    music => music.music
)

export const selectAllMusicData = createSelector(
    [selectMusicProfile],
    music => music.musics
)