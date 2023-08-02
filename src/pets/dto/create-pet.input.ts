import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreatePetInput {
  @Field()
  @IsString()
  name: string;

  @Field({ nullable: true })
  type?: string;
}
