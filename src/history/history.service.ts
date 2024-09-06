import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHistoryDto } from './dto/create-history.dto';
import { History } from './entities/history.entity';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
  ) {}
  async create(createHistoryDto: CreateHistoryDto): Promise<void> {
    await this.historyRepository.insert({
      machine: { id: createHistoryDto.machineId },
      machineEfficiency: { id: createHistoryDto.machineEfficiencyId },
      date: createHistoryDto.date,
    });

    return;
  }

  async findAllFromMachineId(id: string): Promise<any> {
    if (id === 'undefined') return;

    const history = await this.historyRepository.find({
      skip: 0,
      take: 25,
      order: {
        date: 'DESC',
      },
      where: {
        machine: { id },
      },
      relations: {
        machineEfficiency: true,
      },
    });

    const historyFormatted = history.map((data) => {
      return {
        temperature: data.machineEfficiency.efficiency,
        date: data.date.toLocaleString('pt-BR', {
          timeZone: 'America/Sao_Paulo',
        }),
      };
    });

    return historyFormatted;
  }
}
