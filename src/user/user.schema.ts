import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { HydratedDocument, Schema as schema } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@ObjectType({description: 'user'})
@Schema({
    timestamps: true,
})
export class User{
    @Field(() => ID)
    readonly id: schema.Types.ObjectId

    @Field(() => String)
    @Prop({
        required: true
    })
    name: string;

    @Field(() => String)
    @Prop()
    lastname: string;

    @Field(() => String)
    @Prop()
    email: string;

    @Field(() => String)
    @Prop()
    password: string;

    @Field(() => Date)
    @Prop()
    createdAt?: Date;

    @Field(() => Date)
    @Prop()
    updatedAt?: Date;
    
}
export type UpdateUser = Partial<User>;

export const usuarios = SchemaFactory.createForClass(User);


/*
Esta clase contiene los datos que se desean optener de la tabla donde se almacenan 
*/