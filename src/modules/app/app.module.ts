import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudModule } from '../crud/crud.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/crud'),CrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
