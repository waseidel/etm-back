import { RegisterUserDto } from 'src/auth/dto/register.dto';
import { User } from 'src/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(registerUserDto: RegisterUserDto): Promise<void> {}
}
