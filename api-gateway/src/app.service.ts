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

  async getCategories(params: any): Promise<any> {
    return this.entitiesClient.send('ENTITIES.CATEGORY.GET', params);
  }

  async getCategoryById(id: string): Promise<any | null> {
    return this.entitiesClient.send('ENTITIES.CATEGORY_BY_ID.GET', { id });
  }

  async onModuleInit() {
    this.entitiesClient.subscribeToResponseOf('ENTITIES.CATEGORY.GET');
    this.entitiesClient.subscribeToResponseOf('ENTITIES.CATEGORY_BY_ID.GET');
    this.entitiesClient.subscribeToResponseOf('SAMPLE_MESSAGE');
    await this.entitiesClient.connect();
  }
}
