import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  allPosts() {
    return 'all posts';
  }
}
