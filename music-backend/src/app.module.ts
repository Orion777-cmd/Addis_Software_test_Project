import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MusicModule } from './music/music.module';
import { UserModule } from './user/user.module';

import {MongooseModule} from '@nestjs/mongoose';


@Module({
  imports: [MusicModule,
     UserModule,
     MongooseModule.forRoot('mongodb+srv://abiy:QS$F9bJLp_P5pXc@cluster0.udmwhv0.mongodb.net/music?retryWrites=true&w=majority'),
    
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
