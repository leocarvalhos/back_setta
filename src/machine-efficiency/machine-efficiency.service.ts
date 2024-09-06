import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { GetWeather } from 'src/api/weather';
import { MachineService } from 'src/machine/machine.service';
import { Repository } from 'typeorm';
import { CreateMachineEfficiencyDto } from './dto/create-machine-efficiency.dto';
import { MachineEfficiency } from './entities/machine-efficiency.entity';
import { HistoryService } from 'src/history/history.service';
@Injectable()
export class MachineEfficiencyService {
  constructor(
    @InjectRepository(MachineEfficiency)
    private readonly machineEfficiencyRepository: Repository<MachineEfficiency>,
    private readonly httpService: HttpService,
    private readonly machineService: MachineService,
    private readonly historyService: HistoryService,
  ) {}

  async create(createMachineEfficiencyDto: CreateMachineEfficiencyDto) {
    const getWheater = new GetWeather(this.httpService);
    const dataTemperature = await getWheater.dataWeather(
      createMachineEfficiencyDto.lat,
      createMachineEfficiencyDto.lon,
    );

    const temperature = await this.calculateTemperature(dataTemperature);

    const efficiency = this.calculateEfficiency(temperature);

    const data = {
      machine: { id: createMachineEfficiencyDto.machineId },
      temperature,
      efficiency,
      date: new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
      }),
    };
    await this.machineEfficiencyRepository.insert(data);
  }

  async calculateTemperature(temperature: number): Promise<number> {
    const temperatureCelsius = temperature - 273.15;
    return temperatureCelsius;
  }

  calculateEfficiency(temperature: number): number {
    const maxEfficiency = 100;
    const minEfficiency = 75;
    const minTemp = 24;
    const maxTemp = 28;

    if (temperature >= maxTemp) {
      return maxEfficiency;
    }

    if (temperature > minTemp && temperature < maxTemp) {
      const efficiencyRange = maxEfficiency - minEfficiency;
      const tempRange = maxTemp - minTemp;
      return (
        minEfficiency + ((temperature - minTemp) / tempRange) * efficiencyRange
      );
    }

    return minEfficiency;
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  handleCron() {
    this.updateAllMachinesEfficiency();
  }

  async updateAllMachinesEfficiency(): Promise<void> {
    const getWheater = new GetWeather(this.httpService);
    const machines = await this.machineService.findAll();

    for (const machine of machines) {
      const { lat, lon, id: machineId } = machine;

      const temperatureKelvin = await getWheater.dataWeather(lat, lon);

      const temperature = await this.calculateTemperature(temperatureKelvin);

      const efficiency = this.calculateEfficiency(temperature);

      const machineEfficiency = await this.machineEfficiencyRepository.findOne({
        where: { machine: { id: machineId } },
      });

      if (machineEfficiency) {
        machineEfficiency.temperature = temperature;
        machineEfficiency.efficiency = efficiency;
        await this.machineEfficiencyRepository.save(machineEfficiency);

        await this.historyService.create({
          machineId,
          machineEfficiencyId: machineEfficiency.id,
          date: new Date().toLocaleString('pt-BR', {
            timeZone: 'America/Sao_Paulo',
          }),
        });
      }
    }
  }
}
