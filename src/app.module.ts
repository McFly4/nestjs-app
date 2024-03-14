import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingMiddleware } from './logging/logging.middleware';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskValidationMiddleware } from './task-validator/task-validator.middleware';
import { RateLimiterMiddleware } from './rate-limiter/rate-limiter.middleware';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://127.0.0.1:27017', 
      }),
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware, RateLimiterMiddleware).forRoutes('*')
    consumer.apply(TaskValidationMiddleware).forRoutes('/tasks');
  }
}
