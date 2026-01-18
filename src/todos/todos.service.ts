import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  getAll() {
    return [
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
      {
        id: 6,
        name: 'системы',
        description: 'порядка',
      },
      {
        id: 7,
        name: 'участниками',
        description: 'рамки',
      },
      {
        id: 8,
        name: 'активности',
        description: 'оценить',
      },
      {
        id: 9,
        name: 'также',
        description: 'повышению',
      },
      {
        id: 10,
        name: 'в',
        description: 'уровня',
      },
    ];
  }
}
