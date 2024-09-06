import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  create(@Body() createHistoryDto: CreateHistoryDto) {
    return this.historyService.create(createHistoryDto);
  }

  @Get(':id')
  findAllFromMachineId(@Param('id') id: string) {
    return this.historyService.findAllFromMachineId(id);
  }
}
