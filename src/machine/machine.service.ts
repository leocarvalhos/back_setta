import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Machine } from './entities/machine.entity';
import { Repository } from 'typeorm';
import { MachineEfficiencyService } from 'src/machine-efficiency/machine-efficiency.service';

@Injectable()
export class MachineService {
  constructor(
    @InjectRepository(Machine)
    private readonly machineRepository: Repository<Machine>,

    @Inject(forwardRef(() => MachineEfficiencyService))
    private readonly machineEfficiencyService: MachineEfficiencyService,
  ) {}
  async create(createMachineDto: CreateMachineDto): Promise<void> {
    const machine = await this.machineRepository.save(createMachineDto);

    await this.machineEfficiencyService.create({
      machineId: machine.id,
      lat: createMachineDto.lat,
      lon: createMachineDto.lon,
    });

    return;
  }

  async findAll(): Promise<any> {
    const machines = await this.machineRepository.find({
      relations: {
        machineEfficiency: true,
      },
    });
    return machines;
  }

  async findOne(id: string): Promise<Machine> {
    const machine = await this.machineRepository.findOneByOrFail({ id });
    return machine;
  }

  async update(id: string, updateMachineDto: UpdateMachineDto): Promise<void> {
    await this.machineRepository.update(id, updateMachineDto);
    return;
  }

  async remove(id: string) {
    await this.machineRepository.delete(id);
    return;
  }
}
