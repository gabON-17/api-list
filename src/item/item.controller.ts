import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dtos/createItem.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Post()
  create(@Body() body: CreateItemDto) {
    return this.itemService.create(body);
  }
}
