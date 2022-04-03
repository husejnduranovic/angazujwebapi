import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedController } from '../controllers/feed/feed.controller';
import { FeedPostEntity } from '../models/feed/post.entity';
import { FeedRepository } from '../repositories/feed.repository';
import { CreatePostUseCase } from '../usecases/feed/CreatePostUseCase';
import { FindAllPostsUseCase } from '../usecases/feed/FindAllPostsUseCase';

@Module({
  imports: [
    TypeOrmModule.forFeature([FeedPostEntity])
  ],
  providers: [FeedRepository, CreatePostUseCase, FindAllPostsUseCase],
  controllers: [FeedController]
})
export class FeedModule {}
