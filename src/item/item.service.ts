import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dtos/createItem.dto';
import { ItemEntity } from './entity/item.entity';
import { UpdateItemDto } from './dtos/updateItem.dto';

@Injectable()
export class ItemService {
  listItems: Array<ItemEntity> = [];
  id: number = 0;

  findAll() {
    return this.listItems;
  }

  private findOne(id: number) {
    const itemIndex = this.listItems.findIndex((item) => item.id === id);
    if (itemIndex === -1) throw new NotFoundException('Item não encontrado');

    return { ...this.listItems[itemIndex], index: itemIndex };
  }

  create(body: CreateItemDto) {
    const newItem: ItemEntity = {
      id: this.id++,
      name: body.name,
      price: body.price,
      createAt: new Date(),
      updateAt: new Date(),
    };

    this.listItems.push(newItem);
    return newItem;
  }

  update(body: UpdateItemDto, id: number) {
    const item = this.findOne(id);

    const updateItem: ItemEntity = {
      id: item.id,
      name: body.name ?? item.name,
      price: body.price ?? item.price,
      createAt: item.createAt,
      updateAt: new Date(),
    };

    this.listItems[item.index] = updateItem;
    return updateItem;
  }

  delete(id: number) {
    // A FAZER
  }
}
