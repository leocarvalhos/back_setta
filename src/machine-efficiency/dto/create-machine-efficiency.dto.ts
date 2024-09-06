import { IsNumber, IsString } from 'class-validator';

export class CreateMachineEfficiencyDto {
  @IsString()
  machineId: string;

  @IsNumber()
  lat: number;

  @IsNumber()
  lon: number;
}
