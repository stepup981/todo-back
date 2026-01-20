import { Controller, Get, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ParseIntPipe } from '@/conceptions/pipe';
import { AuthGuard } from '@/conceptions/guard';
import { LoggindInterceptor } from '@/conceptions/interceptor';

@Controller('todos')
@UseInterceptors(LoggindInterceptor)
export class TodosController {
  constructor(private readonly TodoService: TodoService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber);
    return this.TodoService.findAll();
  }
}
