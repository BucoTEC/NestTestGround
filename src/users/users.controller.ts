import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  allUsers() {
    return 'all users route';
  }
}
