import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Owner } from '../owners/entities/owner.entity';

@Entity()
@ObjectType()
export class Pet {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  ownerId?: number;

  @ManyToOne(() => Owner, (owner) => owner.pets)
  @Field(() => Owner, { nullable: true })
  owner?: Owner;
}
