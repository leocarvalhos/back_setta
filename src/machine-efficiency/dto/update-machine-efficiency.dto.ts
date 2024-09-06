import { PartialType } from '@nestjs/mapped-types';
import { CreateMachineEfficiencyDto } from './create-machine-efficiency.dto';

export class UpdateMachineEfficiencyDto extends PartialType(
  CreateMachineEfficiencyDto,
) {}
