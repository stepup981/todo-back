import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  private readonly todos = [
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
    return this.todos;
  }

  findById(id: number) {
    const task = this.todos.find(t => t.id === id);

    if (!task) throw new NotFoundException('Такой записи не найдено');
    return task;
  }

  create(dto: CreateTodoDto) {
    const { name, description } = dto;
    const newTodo = {
      id: this.todos.length + 1,
      name,
      description: description ?? '',
    };
    this.todos.push(newTodo);
    return this.todos;
  }
}
