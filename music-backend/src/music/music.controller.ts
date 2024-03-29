import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusicService } from './music.service';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Post()
  create(@Body() createMusicDto: CreateMusicDto) {
    return this.musicService.create(createMusicDto);
  }

  @Get()
  findAll() {
    console.log("requested")
    return this.musicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.musicService.findOne(id);
  }

  @Get("title/:title")
  findByTitle(@Param('title') title: string) {
    return this.musicService.findByTitle(title);
  }

  @Get("artist/:artist")
  findByArtist(@Param('artist') artist: string) {
    return this.musicService.findByArtist(artist);
  }

  @Get("genre/:genre")
  filterByGenre(@Param('genre') genre: string) {
    return this.musicService.filterByGenre(genre);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMusicDto: UpdateMusicDto) {
    return this.musicService.update(id, updateMusicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicService.remove(id);
  }
}
