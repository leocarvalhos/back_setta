import { IsNumber, IsString } from 'class-validator';

export class CreateMachineDto {
  @IsString()
  model: string;

  @IsString()
  year: string;

  @IsString()
  city: string;
  @IsNumber()
  lat: number;

  @IsNumber()
  lon: number;
}
