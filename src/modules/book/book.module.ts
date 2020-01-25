import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookController } from './book.controller';
import { BookService } from './book.service';

import { Book } from './../../entities/book.entity';
import { Editorial } from './../../entities/editorial.entity';
import { Author } from './../../entities/author.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Book, Editorial, Author ]),
    MulterModule.registerAsync({
      useFactory: async file => (
        file.configMulter()
      ),
      inject: ['FileUploadService']
    })
  ],
  controllers: [
    BookController
  ],
  providers: [
    BookService
  ],
  exports: []
})
export class BookModule {}
