import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/client.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ClientsModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/meili',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
