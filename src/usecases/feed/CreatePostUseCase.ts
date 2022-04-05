import { Injectable } from "@nestjs/common";
import { from, Observable } from "rxjs";
import { FeedPost } from "../../models/feed/post.interface";
import { FeedRepository } from "../../repositories/feed.repository";

@Injectable()
export class CreatePostUseCase {
    
    constructor(
        private readonly feedRepository: FeedRepository
    ){}

    execute(feedPost: FeedPost): Observable<FeedPost>{
        return from(this.feedRepository.createPost(feedPost));
    }
}