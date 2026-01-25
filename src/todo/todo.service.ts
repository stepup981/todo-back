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

    if (!task) throw new NotFoundException('Такой задачи не существует');
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
    try {
      return await this.prisma.todo.update({
        where: { id },
        data: dto,
      });
    } catch (error) {
      console.error(error);
      throw new NotFoundException(`Такой задачи не существует`);
    }
  }

  async updateTodoPatch(id: number, dto: Partial<UpdateTodoDto>): Promise<Todo> {
    const { name, description } = dto;

    try {
      return await this.prisma.todo.update({
        where: { id },
        data: {
          ...(name !== undefined && { name }),
          ...(description !== undefined && { description }),
        },
      });
    } catch (error) {
      console.error(error);
      throw new NotFoundException(`Такой задачи не существует`);
    }
  }

  async deleteTodo(id: number): Promise<boolean> {
    const result = await this.prisma.todo.deleteMany({
      where: { id },
    });

    return result.count > 0;
  }
}
