import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDTO {
  @IsString()
  @IsNotEmpty({ message: 'email must not be empty' })
  @MaxLength(255, {
    message: 'must be a valid email address',
  })
  @Transform(({ value }) => value.trim())
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'password must not be empty' })
  @MinLength(3, {
    message: 'must be a valid password',
  })
  @Transform(({ value }) => value.trim())
  password!: string;

}