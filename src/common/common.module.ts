import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphqlModule } from './graphql.module';
import { MongoDBModule } from './mongodb.module';

@Module({
  imports: [
    GraphqlModule,
    MongoDBModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class CommonModule { }
