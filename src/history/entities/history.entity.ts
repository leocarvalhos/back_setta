import { MachineEfficiency } from 'src/machine-efficiency/entities/machine-efficiency.entity';
import { Machine } from 'src/machine/entities/machine.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class History {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'timestamp' })
  date: Date;

  @ManyToOne(() => Machine, (machine) => machine.histories)
  @JoinColumn()
  machine: Machine;

  @ManyToOne(
    () => MachineEfficiency,
    (machineEfficiency) => machineEfficiency.histories,
  )
  machineEfficiency: MachineEfficiency;
}
