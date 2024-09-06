import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateMachineEfficiencyDto } from './dto/create-machine-efficiency.dto';
import { MachineEfficiencyService } from './machine-efficiency.service';

@Controller('machine-efficiency')
export class MachineEfficiencyController {
  constructor(
    private readonly machineEfficiencyService: MachineEfficiencyService,
  ) {}

  @Post()
  create(@Body() createMachineEfficiencyDto: CreateMachineEfficiencyDto) {
    return this.machineEfficiencyService.create(createMachineEfficiencyDto);
  }

  @Get()
  handleCron() {
    return this.machineEfficiencyService.handleCron();
  }
  @Put()
  updateAllMachinesEfficiency() {
    return this.machineEfficiencyService.updateAllMachinesEfficiency();
  }
}
