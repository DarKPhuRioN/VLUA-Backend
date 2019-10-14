import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { Book } from './../../entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookService {
  constructor(
    private readonly connection : Connection,
    @InjectRepository(Book)
    private readonly repository : Repository<Book>
  ){}

  public async findAll(){
    return await this.repository
      .createQueryBuilder('book')
      .select('book.isbn', 'ISBN')
      .addSelect('book.name', 'nameBook')
      .addSelect('book.publication', 'datePublication')
      .addSelect('book.tomo', 'tomo')
      .addSelect('book.state', 'state')
      .addSelect('author.name', 'nameOne')
      .addSelect('author.lastname', 'nameTwo')
      .addSelect('editorial.name', 'editorialName')
      .addSelect('editorial.direction', 'editorialDirection')
      .addSelect('category.name', 'categoryName')
      .leftJoin('book.editorial', 'editorial')
      .leftJoin('book.category', 'category')
      .leftJoin('book.author', 'author')
      .where("book.state = 'Active'")
      .execute()
    ;
  }
}