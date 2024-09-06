import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('machine')
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma máquina' })
  @ApiResponse({
    status: 201,
    description: 'A máquina foi criada com sucesso.',
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  create(@Body() createMachineDto: CreateMachineDto) {
    return this.machineService.create(createMachineDto);
  }

  @Get()
  @ApiOperation({ summary: 'Criar uma máquina' })
  @ApiResponse({
    status: 200,
    description: 'Lista de máquinas',
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  findAll() {
    return this.machineService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Criar uma máquina' })
  @ApiResponse({
    status: 200,
    description: 'Lista com uma máquina',
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  findOne(@Param('id') id: string) {
    return this.machineService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma máquina' })
  @ApiResponse({
    status: 200,
    description: 'Atualizar máquina por ID',
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  update(@Param('id') id: string, @Body() updateMachineDto: UpdateMachineDto) {
    return this.machineService.update(id, updateMachineDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma máquina' })
  @ApiResponse({
    status: 200,
    description: 'Deletar máquina por ID',
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  remove(@Param('id') id: string) {
    return this.machineService.remove(id);
  }
}
