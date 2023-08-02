import { Module } from '@nestjs/common';
import { PetsResolver } from './pets.resolver';
import { PetsService } from './pets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity';
import { OwnersModule } from '../owners/owners.module';

@Module({
  imports: [OwnersModule, TypeOrmModule.forFeature([Pet])],
  providers: [PetsResolver, PetsService],
})
export class PetsModule {}
