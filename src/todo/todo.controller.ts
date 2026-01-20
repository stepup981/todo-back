import {
  Controller,
  Get,
  Param,
  Query,
  UseGuards,
  UseInterceptors,
  Post,
  Body,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { ParseIntPipe } from '@/conceptions/pipe';
import { AuthGuard } from '@/conceptions/guard';
import { LoggindInterceptor } from '@/conceptions/interceptor';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

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
  addTodo(@Body() dto: CreateTodoDto) {
    return this.todoService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTodoDto) {
    return this.todoService.update(Number(id), dto);
  }

  @Patch(':id')
  patchUpdate(@Param('id') id: string, @Body() dto: Partial<UpdateTodoDto>) {
    return this.todoService.patchUpdate(Number(id), dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todoService.delete(Number(id));
  }
}
