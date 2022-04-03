import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { FeedPost } from '../../models/feed/post.interface';
import { CreatePostUseCase } from '../../usecases/feed/CreatePostUseCase';
import { FindAllPostsUseCase } from '../../usecases/feed/FindAllPostsUseCase';

@Controller('feed')
export class FeedController {

    constructor(
        private readonly createPostUseCase: CreatePostUseCase,
        private readonly findAllPostsUseCase: FindAllPostsUseCase
    ) {}

    @UseGuards(JwtGuard)
    @Post()
    create(@Body() feedPost: FeedPost){
        return this.createPostUseCase.execute(feedPost)
    }

    @UseGuards(JwtGuard)
    @Get()
    findAll(): Observable<FeedPost[]>{
        return this.findAllPostsUseCase.execute();
    }
    
}
