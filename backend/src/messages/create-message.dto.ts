import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  content: string;
}
