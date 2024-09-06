import { DataSource } from 'typeorm';
import { MachineEfficiency } from '../entities/machine-efficiency.entity';

export const machineEfficiencyProviders = [
  {
    provide: 'MACHINEEFFICIENCY_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(MachineEfficiency),
    inject: ['DATA_SOURCE'],
  },
];
