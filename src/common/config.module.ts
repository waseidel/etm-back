import { Module } from '@nestjs/common';
import { ConfigModule as Configuration } from '@nestjs/config';

@Module({
  imports: [
    Configuration.forRoot({
      isGlobal: true,
    }),
  ],
})
export class ConfigModule { }
