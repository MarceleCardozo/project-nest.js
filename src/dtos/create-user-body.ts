/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateUserBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  role: string;
}
