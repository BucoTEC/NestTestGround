import { Controller, Get, Req } from '@nestjs/common';
import { ReqWithUser } from './middleware';

@Controller('users')
export class UsersController {
  @Get()
  allUsers() {
    return 'all users route';
  }

  @Get('single')
  singleUser(@Req() req: ReqWithUser) {
    console.log(req.headers.authorization);

    return req.currentUser;
  }
}
