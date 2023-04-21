import { ValidationError } from '@nestjs/apollo';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponse } from './dto/user-response.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) { }
  @Query(() => UserResponse, { name: 'users' })
  async findAll(): Promise<UserResponse[] | undefined> {
    const users = await this.usersService.findAll();
    console.log(users);
    return users;
  }

  @Mutation(() => User, { name: 'createUser' })
  async createUser(
    @Args({ name: 'user' }) user: CreateUserDto,
  ): Promise<UserResponse> {
    const existingUser = await this.usersService.findByEmail(user.email);
    if (existingUser) {
      throw new ValidationError('El correo ya está en uso');
    }
    if (user.password !== user.confirmPassword) {
      throw new ValidationError('Las contraseñas no coinciden');
    }
    return this.usersService.createUser(user);
  }

  @Mutation(() => User, { name: 'deleteUser' })
  async deleteUser(@Args('id') id: string): Promise<any> {
    const deletdUser = this.usersService.deleteUser(id);
    return deletdUser;
  }
}
