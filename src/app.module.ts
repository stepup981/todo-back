import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodosModule } from './todo/todo.module';
import { LoggerMiddleware } from './conceptions/middleware';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TodosModule, PrismaModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('todos');
  }
}
