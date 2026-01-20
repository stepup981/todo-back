import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodosController } from './todo.controller';

@Module({
  controllers: [TodosController],
  providers: [TodoService],
})
export class TodosModule {}
