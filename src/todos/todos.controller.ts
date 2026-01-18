import { Controller, Get, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { TodosService } from './todos.service';
import { ParseIntPipe } from '@/conceptions/pipe';
import { AuthGuard } from '@/conceptions/guard';
import { LoggindInterceptor } from '@/conceptions/interceptor';

@Controller('todos')
@UseInterceptors(LoggindInterceptor)
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  @UseGuards(AuthGuard)
  getAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber);
    return this.todosService.getAll();
  }
}
