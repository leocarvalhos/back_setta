import { History } from 'src/history/entities/history.entity';
import { Machine } from 'src/machine/entities/machine.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class MachineEfficiency {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ type: 'float' })
  temperature: number;

  @Column({ type: 'float' })
  efficiency: number;

  @OneToMany(() => History, (history) => history.machineEfficiency)
  histories: History[];

  @OneToOne(() => Machine, (machine) => machine.machineEfficiency)
  @JoinColumn()
  machine: Machine;
}
