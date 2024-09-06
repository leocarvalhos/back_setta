import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateMachineEfficiencyDto } from './dto/create-machine-efficiency.dto';
import { MachineEfficiencyService } from './machine-efficiency.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('machine-efficiency')
export class MachineEfficiencyController {
  constructor(
    private readonly machineEfficiencyService: MachineEfficiencyService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criação' })
  @ApiResponse({
    status: 201,
    description: 'Criar dados relacionados a uma máquina',
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  create(@Body() createMachineEfficiencyDto: CreateMachineEfficiencyDto) {
    return this.machineEfficiencyService.create(createMachineEfficiencyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Requisição cronometrada' })
  @ApiResponse({
    status: 200,
    description:
      'Requisição cronometrada em 30 segundos para atualizar dados e criar historico da machineEfficiency',
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  handleCron() {
    return this.machineEfficiencyService.handleCron();
  }

  @Get()
  @ApiOperation({ summary: 'Atualização' })
  @ApiResponse({
    status: 200,
    description: 'Atualização de dados automatizados',
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Put()
  updateAllMachinesEfficiency() {
    return this.machineEfficiencyService.updateAllMachinesEfficiency();
  }
}
