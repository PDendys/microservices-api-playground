import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class EntitiesService {
  constructor(
    @Inject('ENTITIES_SERVICE') private readonly entitiesClient: ClientKafka,
    @Inject('LOGGER_SERVICE') private readonly loggerClient: ClientKafka,
  ) {}

  async getCategories(params: any): Promise<any> {
    const lastReadingTime = `API last usage: ${new Date().toLocaleTimeString()}`;
    this.loggerClient.emit('LOGGER.LOG', lastReadingTime);
    return this.entitiesClient.send('ENTITIES.CATEGORY.GET', params);
  }

  async getCategoryById(id: string): Promise<any | null> {
    return this.entitiesClient.send('ENTITIES.CATEGORY.GET_BY_ID', { id });
  }

  async createCategory(params: any): Promise<any> {
    return this.entitiesClient.send('ENTITIES.CATEGORY.CREATE', params);
  }

  async createPackingItem(params: any): Promise<any> {
    return this.entitiesClient.send('ENTITIES.PACKING_ITEM.CREATE', params);
  }
}
