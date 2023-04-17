import { Field, ObjectType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'Nombre completo del usuario' })
  name: string;

  @Prop()
  @Field(() => String, { description: 'Email del usuario' })
  email: string;

  @Prop()
  @Field(() => String, { description: 'Contraseña del usuario' })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
