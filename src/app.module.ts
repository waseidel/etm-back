import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CommonModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
