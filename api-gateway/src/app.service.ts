import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('ENTITIES_SERVICE') private readonly entitiesClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getCategories(params: any): any {
    return this.entitiesClient.send('ENTITIES.CATEGORY.GET', params);
  }

  testEventPattern() {
    this.entitiesClient.emit('SAMPLE_EVENT', { lorem: 'ipsum' });
  }

  testMessagePattern() {
    return this.entitiesClient.send('SAMPLE_MESSAGE', {
      data: 'sample message',
    });
  }

  async onModuleInit() {
    this.entitiesClient.subscribeToResponseOf('ENTITIES.CATEGORY.GET');
    this.entitiesClient.subscribeToResponseOf('SAMPLE_MESSAGE');
    await this.entitiesClient.connect();
  }
}
