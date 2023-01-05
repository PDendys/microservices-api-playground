import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class LoggerService {
  constructor(
    @Inject('LOGGER_SERVICE') private readonly loggerClient: ClientKafka,
  ) {}

  log(msg: string) {
    this.loggerClient.send('LOGGER.LOG', msg);
  }
}
