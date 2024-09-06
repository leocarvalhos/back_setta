import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MachineEfficiencyModule } from 'src/machine-efficiency/machine-efficiency.module';
import { Machine } from './entities/machine.entity';
import { MachineController } from './machine.controller';
import { MachineService } from './machine.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Machine]),
    forwardRef(() => MachineEfficiencyModule),
  ],
  controllers: [MachineController],
  providers: [MachineService],
  exports: [MachineService],
})
export class MachineModule {}
