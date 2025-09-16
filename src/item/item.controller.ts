import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dtos/createItem.dto';
import { UpdateItemDto } from './dtos/updateItem.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Post()
  create(@Body() body: CreateItemDto) {
    console.log(typeof body);
    return this.itemService.create(body);
  }

  @Patch('/:id')
  update(@Body() body: UpdateItemDto, @Param('id') id: string) {
    return this.itemService.update(body, +id);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.itemService.delete(+id);
  }
}
