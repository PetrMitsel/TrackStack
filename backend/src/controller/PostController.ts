import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Post } from "../entity/Post";
import { User } from "../entity/User";
import { Comment } from "../entity/Comment";

export class PostController {

    private postRepository = getRepository(Post);
    private userRepository = getRepository(User);
    private commentRepositroy = getRepository(Comment);

    async all(request: Request, response: Response, next: NextFunction) {
        // let posts = await this.postRepository.find({ relations: [] });
        // posts.forEach(post => {
        //     post.author = await post.author;
        // });
        let posts = await this.postRepository.find();
        posts.forEach(async post => {
            post.author = await this.userRepository.findOne(post.author);
        },PostController)
        return posts;
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.postRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.postRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let postToRemove = await this.postRepository.findOne(request.params.id);
        await this.postRepository.remove(postToRemove);
    }

}