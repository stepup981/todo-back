import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Todo } from 'generated/prisma/client';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async getTodos(): Promise<Todo[]> {
    return await this.prisma.todo.findMany();
  }

  async getTodo(id: number): Promise<Todo> {
    const task = await this.prisma.todo.findUnique({ where: { id } });

    if (!task) throw new NotFoundException('Такой записи не найдено');
    return task;
  }

  async createTodo(dto: CreateTodoDto): Promise<Todo> {
    const { name, description } = dto;
    const todo = await this.prisma.todo.create({
      data: {
        name,
        description: description ?? '',
      },
    });

    return todo;
  }

  async updateTodo(id: number, dto: UpdateTodoDto): Promise<Todo> {
    const { name, description } = dto;

    return await this.prisma.todo.update({
      where: { id },
      data: {
        name,
        description,
      },
    });
  }

  async updateTodoPatch(id: number, dto: Partial<UpdateTodoDto>): Promise<Todo> {
    const { name, description } = dto;

    return await this.prisma.todo.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(description !== undefined && { description }),
      },
    });
  }

  async deleteTodo(id: number): Promise<boolean> {
    await this.prisma.todo.delete({ where: { id } });
    return true;
  }
}
