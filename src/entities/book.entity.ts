import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { Editorial } from './editorial.entity';
import { Author } from './author.entity';
import { Category } from './category.entity';
import { History } from './history.entity';
import { State } from './enums/state.enum';

@Entity('Book')
@Index(['isbn', 'name'], { unique: true })
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
    type: 'varchar',
    name: 'isbn',
    length: 20,
  })
  isbn: string;

  @Column({
    nullable: false,
    type: 'varchar',
    name: 'name',
    length: 180,
  })
  name: string;

  @Column({
    nullable: false,
    type: 'text',
    name: 'description',
  })
  description: string;

  @Column({
    nullable: false,
    type: 'date',
    name: 'publication',
  })
  publication: string;

  @Column({
    nullable: true,
    type: 'int',
    name: 'edition',
  })
  edition: number;

  @Column({
    nullable: true,
    type: 'int',
    name: 'tomo',
  })
  tomo: number;

  @Column({
    nullable: false,
    type: 'text',
    name: 'urlBook',
  })
  urlBook: string;

  @Column({
    nullable: false,
    type: 'text',
    name: 'urlCover',
  })
  urlCover: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: State,
    name: 'state',
  })
  state: State;

  @ManyToOne(
    type => Editorial,
    editorial => editorial.book,
    { nullable: false },
  )
  @JoinColumn()
  editorial: Editorial;

  @ManyToOne(
    type => Author,
    author => author.book,
    { nullable: false },
  )
  @JoinColumn()
  author: Author;

  @ManyToOne(
    type => Category,
    category => category.book,
    { nullable: false },
  )
  @JoinColumn()
  category: Category;

  @OneToMany(
    type => History,
    history => history.book,
    { nullable: false },
  )
  history: History[];
}
