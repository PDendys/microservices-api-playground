import { Module } from '@nestjs/common';
import { EntitiesController } from './entities.controller';
import { EntitiesService } from './entities.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ENTITIES_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'entities_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
      // ClientsModule.register([
      //   {
      //     name: 'ENTITIES_SERVICE',
      //     transport: Transport.KAFKA,
      //     options: {
      //       client: {
      //         clientId: 'entities',
      //         brokers: ['localhost:9092'],
      //       },
      //       consumer: {
      //         groupId: 'entities-consumer',
      //       },
      //     },
      //   },
      // ]),
    ]),
  ],
  controllers: [EntitiesController],
  providers: [EntitiesService],
})
export class EntitiesModule {}
