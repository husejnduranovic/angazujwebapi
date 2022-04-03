import { Injectable } from "@nestjs/common";
import { from, Observable } from "rxjs";
import { FeedPost } from "../../models/feed/post.interface";
import { FeedRepository } from "../../repositories/feed.repository";

@Injectable()
export class CreatePostUseCase {
    
    constructor(
        // @InjectRepository(FeedPostEntity)
        // private readonly feedPostRepository: Repository<FeedPostEntity>
        private readonly feedRepository: FeedRepository
    ){}

    execute(feedPost: FeedPost): Observable<FeedPost>{
        return from(this.feedRepository.createPost(feedPost));
    }
}