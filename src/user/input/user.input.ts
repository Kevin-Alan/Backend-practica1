import { Field, ID, InputType } from "@nestjs/graphql";
import { IsEmail, IsMongoId, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { Schema } from "mongoose";


@InputType()
export class userInput {  
    @Field(() => String)
    @MaxLength(20)
    name: string;
    @Field(() => String)
    @MaxLength(30)
    lastname: string;
    @Field(() => String)
    @MaxLength(60)
    @IsEmail()
    email: string;
    @Field(() => String)
    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    password: string;
}

@InputType()
export class userUpdate {   
    @Field(() => ID)
    @IsMongoId()
    @IsString()
    @IsNotEmpty()
    id: Schema.Types.ObjectId;
    @Field(() => String)
    @MaxLength(20)
    @IsString()
    @IsNotEmpty()
    name: string;
    @Field(() => String)
    @MaxLength(30)
    @IsString()
    @IsNotEmpty()
    lastname: string;
    @Field(() => String)
    @MaxLength(60)
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;
    @Field(() => String)
    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    password: string;
}

/*
Aqui se declaran todos los campos que se pueden insertar y todos son obligatorios 
*/