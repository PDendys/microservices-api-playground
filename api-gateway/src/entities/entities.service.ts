import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class EntitiesService {
  constructor(
    // private readonly loggerService: LoggerService,
    @Inject('ENTITIES_SERVICE') private readonly entitiesClient: ClientKafka,
    @Inject('LOGGER_SERVICE') private readonly loggerClient: ClientKafka,
  ) {}

  async getCategories(params: any): Promise<any> {
    const lastReadingTime = new Date().toLocaleTimeString();
    this.loggerClient.emit('LOGGER.LOG', lastReadingTime);
    return this.entitiesClient.send('ENTITIES.CATEGORY.GET', params);
  }

  async getCategoryById(id: string): Promise<any | null> {
    return this.entitiesClient.send('ENTITIES.CATEGORY_BY_ID.GET', { id });
  }

  async createCategory(params: any): Promise<any> {
    return this.entitiesClient.send('ENTITIES.CREATE_CATEGORY.POST', params);
  }
}
