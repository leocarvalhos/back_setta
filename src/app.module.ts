import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryModule } from './history/history.module';
import { MachineModule } from './machine/machine.module';
import { MachineEfficiencyModule } from './machine-efficiency/machine-efficiency.module';
import { Machine } from './machine/entities/machine.entity';
import { MachineEfficiency } from './machine-efficiency/entities/machine-efficiency.entity';
import { History } from './history/entities/history.entity';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASS,
      database: process.env.POSTGRES_NAME,
      entities: [Machine, MachineEfficiency, History],
      synchronize: true,
    }),
    MachineModule,
    MachineEfficiencyModule,
    HistoryModule,
  ],
})
export class AppModule {}
