import { CreateMusicDto } from '../dto/create-music.dto';
export class Music {
    id : string;
    title: string;
    artist: string;
    genre: string;
    duration: string;
    coverArtUrl: string;

    constructor( title: string, artist: string, genre: string, duration: string, coverArtUrl: string) {

        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.duration = duration;
        this.coverArtUrl = coverArtUrl;
    }

    static from(dto: CreateMusicDto) {
        const { title, artist, genre, duration, coverArtUrl } = dto;
        return new this( title, artist, genre, duration, coverArtUrl);
    }
}
