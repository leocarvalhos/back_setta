import { IsDate, IsString } from 'class-validator';

export class CreateHistoryDto {
  @IsString()
  machineId: string;

  @IsDate()
  date: any;

  @IsString()
  machineEfficiencyId: string;
}
