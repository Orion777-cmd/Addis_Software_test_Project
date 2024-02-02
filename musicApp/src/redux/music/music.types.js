export const MusicType = {
    id: '',
    title: '',
    artist: '',
    genre: '',
    duration: '',
    coverArtUrl: ''
};

export const musicSubState = {
    data: [], 
    isLoading: false,
    errors: []
};

export const MusicState = {
    music: musicSubState
};

export const MUSIC = "music";

export const GET_MUSIC_BY_ID = `${MUSIC}/getMusicAction`;
