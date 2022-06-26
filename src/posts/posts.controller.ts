import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private serv: PostsService) {}

  @Get()
  allPosts() {
    return this.serv.allPosts();
  }
}
