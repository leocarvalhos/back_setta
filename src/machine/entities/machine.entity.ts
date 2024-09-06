import { History } from 'src/history/entities/history.entity';
import { MachineEfficiency } from 'src/machine-efficiency/entities/machine-efficiency.entity';

import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Machine {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  model: string;

  @Column()
  year: string;

  @Column()
  city: string;

  @Column({ type: 'float' })
  lat: number;

  @Column({ type: 'float' })
  lon: number;

  @OneToMany(() => History, (histories) => histories.machine)
  histories: History[];

  @OneToOne(
    () => MachineEfficiency,
    (machineEfficiency) => machineEfficiency.machine,
  )
  machineEfficiency: MachineEfficiency;
}
