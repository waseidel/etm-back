import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Nombre completo del usuario' })
  name: string;

  @Field(() => String, { description: 'Email del usuario' })
  email: string;

  @Field(() => String, { description: 'Contraseña del usuario' })
  password: string;
}
