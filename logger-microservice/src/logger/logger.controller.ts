import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { LoggerService } from './logger.service';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @EventPattern('LOGGER.LOG')
  getAllCategories(msg: string) {
    return this.loggerService.log(msg);
  }
}
