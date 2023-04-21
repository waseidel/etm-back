import { Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { GraphQLModule } from './graph-ql.module';
import { TypeOrmModule } from './type-orm.module';

@Module({
  imports: [ConfigModule, GraphQLModule, TypeOrmModule],
})
export class CommonModule { }
