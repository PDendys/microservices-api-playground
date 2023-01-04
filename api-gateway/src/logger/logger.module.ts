import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoggerService } from './logger.service';
import { LoggerController } from './logger.controller';

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'LOGGER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'logger_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [LoggerController],
  providers: [LoggerService],
})
export class LoggerModule {}
