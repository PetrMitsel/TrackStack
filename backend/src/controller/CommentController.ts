import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Comment } from "../entity/Comment";
import { Post } from "../entity/Post";

export class CommentController {

    private commentRepository = getRepository(Comment);
    private postRepository = getRepository(Post);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.commentRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.commentRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.commentRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let commentToRemove = await this.commentRepository.findOne(request.params.id);
        await this.commentRepository.remove(commentToRemove);
    }

    async all_by_post(request: Request, response: Response, next: NextFunction) {
        let post = await this.postRepository.findOne(request.params.postid);
        return post.comments;
    }
}