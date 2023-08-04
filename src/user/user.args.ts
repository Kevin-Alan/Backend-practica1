import {ArgsType, InputType, Field, ID } from '@nestjs/graphql';
import {
    IsString,
    IsNotEmpty,
    IsMongoId,
  } from 'class-validator'

@ArgsType()
@InputType()
export class UserId{
   @Field(() => ID, {nullable: true})
   @IsString()
   @IsMongoId()
   @IsNotEmpty()
   _id: String;
}