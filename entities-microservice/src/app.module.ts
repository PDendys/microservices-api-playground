import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PackingItemsModule } from './packing-items/packing-items.module';

@Module({
  imports: [PrismaModule, CategoriesModule, AuthModule, PackingItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
