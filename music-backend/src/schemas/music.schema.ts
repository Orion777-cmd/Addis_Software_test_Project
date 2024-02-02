import {Prop , Schema , SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

@Schema()
export class Music {
    @Prop()
    id: string;
    @Prop({required: true,})
    title: string;
    @Prop({required: true, })
    artist: string;
    @Prop()
    genre: string;
    @Prop()
    duration: string;
    @Prop()
    coverArtUrl: string;

}

export const MusicSchema = SchemaFactory.createForClass(Music);