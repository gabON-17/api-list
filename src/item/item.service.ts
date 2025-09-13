import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dtos/createItem.dto';

@Injectable()
export class ItemService {
  findAll() {}

  create(body: CreateItemDto) {
    return body;
  }
}
