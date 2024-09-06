import { DataSource } from 'typeorm';
import { Machine } from '../entities/machine.entity';

export const machineProviders = [
  {
    provide: 'MACHINE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Machine),
    inject: ['DATA_SOURCE'],
  },
];
