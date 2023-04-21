import { Module } from '@nestjs/common';
import { TypeOrmModule as TypeORM } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeORM.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB_NAME,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class TypeOrmModule { }
