import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Music } from "../schemas/music.schema";
import { Model, model } from "mongoose";

@Injectable()
export class MusicService {
  constructor(@InjectModel(Music.name) private musicModel: Model<Music>) {}
  async create(createMusicDto: CreateMusicDto) {
    const createdCat = new this.musicModel(createMusicDto);
    return createdCat.save();
  }

  async findAll(): Promise<Music[]> {
    return this.musicModel.find().exec();
  }

  async findOne(id: string) {
    return this.musicModel.findById(id).exec();
  }

  async update(id: string, updateMusicDto: UpdateMusicDto) {
    return this.musicModel.findByIdAndUpdate (id, updateMusicDto).exec();
  }

  async remove(id: string) {
    return this.musicModel.findByIdAndDelete(id).exec();
  }
}
