import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsPhoneNumber,
  IsEmail,
  IsISO8601,
} from 'class-validator';
import {
  IsStr,
  IsNE,
  MinL,
  MaxL,
  IsDt,
} from '../../common/const/messages.const';

export class UserDto {
  @IsString({ message: IsStr })
  @IsNotEmpty({ message: IsNE })
  @MinLength(3, {
    message: `El Primer Nombre ${MinL(4)}`,
  })
  @MaxLength(50, {
    message: `El Primer Nombre${MaxL(45)}`,
  })
  public readonly nameOne: string;

  @IsString({ message: IsStr })
  @MaxLength(55, {
    message: `El Segundo Nombre  ${MaxL(55)}`,
  })
  public readonly nameTwo: string;

  @IsString({ message: IsStr })
  @IsNotEmpty({ message: IsNE })
  @MinLength(3, {
    message: `El Primer Apellido ${MinL(4)}`,
  })
  @MaxLength(60, {
    message: `El Primer Apellido ${MaxL(60)}`,
  })
  public readonly lastNameOne: string;

  @IsString({ message: IsStr })
  @IsNotEmpty({ message: IsNE })
  @MinLength(3, {
    message: `El Segundo Apellido ${MinL(3)}`,
  })
  @MaxLength(65, {
    message: `El Segundo Apellido  ${MaxL(65)}`,
  })
  public readonly lastNameTwo: string;

  @IsISO8601({ message: IsDt })
  @IsNotEmpty({ message: IsNE })
  public readonly dateBirth: string;

  @IsString({ message: IsStr })
  @IsNotEmpty({ message: IsNE })
  public readonly gender: string;

  @IsString({ message: IsStr })
  @IsNotEmpty({ message: IsNE })
  public readonly typeDoc: string;

  @IsEmail(
    {},
    {
      message: 'No es un Email valido',
    },
  )
  @IsNotEmpty({ message: IsNE })
  public readonly eMail: string;

  @IsPhoneNumber('CO', {
    message: 'No es un numero telefonico colombiano',
  })
  @IsNotEmpty({ message: IsNE })
  public readonly phone: number;
}
