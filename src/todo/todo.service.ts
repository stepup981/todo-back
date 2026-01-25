import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}
  private todos = [
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

  async findAll() {
    return this.prisma.todo.findMany();
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

  update(id: number, dto: UpdateTodoDto) {
    const { name, description } = dto;
    const todo = this.findById(id);
    todo.name = name;
    todo.description = description;
    return todo;
  }

  patchUpdate(id: number, dto: Partial<UpdateTodoDto>) {
    const todo = this.findById(id);
    Object.assign(todo, dto);
    return todo;
  }

  delete(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    return true;
  }
}
