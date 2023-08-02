import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { OwnersService } from '../owners/owners.service';
import { Owner } from '../owners/entities/owner.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    private readonly ownersService: OwnersService,
  ) {}

  public create(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petRepository.create(createPetInput);

    return this.petRepository.save(newPet);
  }

  public getOwner(ownerId: number): Promise<Owner> {
    return this.ownersService.findOne(ownerId);
  }

  public async findAll(): Promise<Pet[]> {
    return this.petRepository.find();
  }

  public async findOne(id: number): Promise<Pet> {
    return this.petRepository.findOneOrFail({
      where: { id },
    });
  }
}
