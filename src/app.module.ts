import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodosModule } from '@/todos/todos.module';
import { LoggerMiddleware } from './conceptions/middleware';

@Module({
  imports: [TodosModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('todos');
  }
}
