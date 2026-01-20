import { Injectable, NotFoundException } from '@nestjs/common';

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

  addTodo() {
    const lastTask = this.todos[this.todos.length - 1];
    const newTodo = {
      id: lastTask.id + 1,
      name: `pepe + ${lastTask.id}`,
      description: `faaaaaaa + ${lastTask.id}`,
    };
    return this.todos.push(newTodo);
  }
}
