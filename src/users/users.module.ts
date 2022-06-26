import { Module, NestModule, MiddlewareConsumer, Global } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { isLogedIn } from './middleware';
@Global()
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(isLogedIn).forRoutes('users/*');
  }
}
