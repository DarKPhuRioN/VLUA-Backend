import { IsNumberString, IsString, IsNotEmpty, MinLength, MaxLength, IsISO8601, IsISBN } from 'class-validator';
import { IsStr, IsNE, MinL, MaxL, IsDt, IsIsbn, IsNmbStr } from './../../common/const/const.dto';

export class BookDto {

  @IsString({ message : IsStr })
  @IsISBN(13, { message : IsIsbn })
  @IsNotEmpty({ message: 'Un ISBN ( International Standard Book Number )' + IsNE })
  public readonly isbn : string;

  @IsString({ message: IsStr })
  @IsNotEmpty({ message : IsNE })
  @MinLength(2, {
    message : 'El nombre del libro ' + MinL + ' 2 Carácteres.' 
  })
  @MaxLength(450, {
    message : 'El nombre del libro ' + MaxL + ' 450 Carácteres.'
  })
  public readonly name : string;

  @IsISO8601({ message : IsDt })
  @IsNotEmpty({ message : IsNE })
  public readonly publication : string;

  @IsNotEmpty({ message : IsNE })
  @IsNumberString({message : IsNmbStr })
  public readonly edition : number;

  @IsNotEmpty({ message : IsNE })
  @IsNumberString({ message : IsNmbStr })
  public readonly tomo : number;

  @IsString({ message: IsStr })
  @IsNotEmpty({ message : IsNE })
  public readonly category : string;

  @IsString({ message: IsStr })
  @IsNotEmpty({ message : IsNE })
  public readonly author : string;

  @IsString({ message: IsStr })
  @IsNotEmpty({ message : IsNE })
  public readonly editorial : string;
}