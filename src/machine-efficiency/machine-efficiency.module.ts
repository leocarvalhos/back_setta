import { HttpModule } from '@nestjs/axios';
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MachineModule } from 'src/machine/machine.module';
import { MachineEfficiency } from './entities/machine-efficiency.entity';
import { MachineEfficiencyController } from './machine-efficiency.controller';
import { MachineEfficiencyService } from './machine-efficiency.service';
import { HistoryModule } from 'src/history/history.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MachineEfficiency]),
    HttpModule,
    forwardRef(() => MachineModule),
    HistoryModule,
  ],
  controllers: [MachineEfficiencyController],
  providers: [MachineEfficiencyService],
  exports: [MachineEfficiencyService],
})
export class MachineEfficiencyModule {}
