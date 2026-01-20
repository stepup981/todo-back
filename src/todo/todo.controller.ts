import { Controller, Get, Param, Query, UseGuards, UseInterceptors, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ParseIntPipe } from '@/conceptions/pipe';
import { AuthGuard } from '@/conceptions/guard';
import { LoggindInterceptor } from '@/conceptions/interceptor';

@Controller('todos')
@UseInterceptors(LoggindInterceptor)
export class TodosController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber);
    return this.todoService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.todoService.findById(Number(id));
  }

  @Post()
  addTodo() {
    return this.todoService.addTodo();
  }
}
