import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  helloFromUsers() {
    return 'hello from users global service ';
  }
}
