import { Controller, Get, Param, UseInterceptors, Post, Body, Put, Patch, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { LoggindInterceptor } from '../conceptions/interceptor';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
@UseInterceptors(LoggindInterceptor)
export class TodosController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.todoService.getTodo(+id);
  }

  @Post()
  createTodo(@Body() dto: CreateTodoDto) {
    return this.todoService.createTodo(dto);
  }

  @Put(':id')
  updateTodo(@Param('id') id: string, @Body() dto: UpdateTodoDto) {
    return this.todoService.updateTodo(+id, dto);
  }

  @Patch(':id')
  updateTodoPatch(@Param('id') id: string, @Body() dto: Partial<UpdateTodoDto>) {
    return this.todoService.updateTodoPatch(+id, dto);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(+id);
  }
}
