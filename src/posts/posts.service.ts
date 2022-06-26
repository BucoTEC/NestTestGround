import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(private userSrvice: UsersService) {}
  allPosts() {
    console.log('all posts');

    return this.userSrvice.helloFromUsers();
  }
}
