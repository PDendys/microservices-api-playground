import { Module } from '@nestjs/common';
import { EntitiesModule } from './entities/entities.module';
import { AuthModule } from './auth/auth.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [LoggerModule, EntitiesModule, AuthModule],
})
export class AppModule {}
