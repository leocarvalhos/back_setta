import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryService } from './history.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  @ApiOperation({ summary: 'Criação' })
  @ApiResponse({
    status: 201,
    description:
      'Criação de historico relacionado com uma maquina e eficiência de uma máquina',
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  create(@Body() createHistoryDto: CreateHistoryDto) {
    return this.historyService.create(createHistoryDto);
  }
}
