import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private readonly tasks = [
    {
      id: 1,
      name: 'рFADFGADG',
      description: 'современного',
    },
    {
      id: 2,
      name: 'в',
      description: 'опыт',
    },
    {
      id: 3,
      name: 'целесообразности',
      description: 'модели',
    },
    {
      id: 4,
      name: 'реализация',
      description: 'участия',
    },
    {
      id: 5,
      name: 'материально-технической',
      description: 'систему',
    },
  ];

  findAll() {
    return this.tasks;
  }
}
