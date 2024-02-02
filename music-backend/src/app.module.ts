import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicModule } from './music/music.module';
import { UserModule } from './user/user.module';

import {MongooseModule} from '@nestjs/mongoose';


@Module({
  imports: [MusicModule, UserModule, MongooseModule.forRoot('mongodb://localhost:27017/music')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
