import { Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) { }

  @Query(() => [User], { name: 'users' })
  async users() {
    return this.userService.findAll();
  }
}
