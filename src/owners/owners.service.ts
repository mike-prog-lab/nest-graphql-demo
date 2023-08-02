import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownersRepository: Repository<Owner>,
  ) {}

  create(createOwnerInput: CreateOwnerInput): Promise<Owner> {
    const owner = this.ownersRepository.create(createOwnerInput);

    return this.ownersRepository.save(owner);
  }

  findAll(): Promise<Owner[]> {
    return this.ownersRepository.find();
  }

  findOne(id: number) {
    return this.ownersRepository.findOneOrFail({
      where: { id },
    });
  }

  async update(id: number, updateOwnerInput: UpdateOwnerInput): Promise<void> {
    await this.ownersRepository.update({ id }, updateOwnerInput);
  }

  async remove(id: number): Promise<void> {
    await this.ownersRepository.delete({ id });
  }
}
