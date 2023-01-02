import { Module } from '@nestjs/common';
import { EntitiesModule } from './entities/entities.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [EntitiesModule, AuthModule],
})
export class AppModule {}
