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
        return this.postRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.postRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.postRepository.save(request.body);
    }

    //DEL posts/:id
    async remove(request: Request, response: Response, next: NextFunction) {
        let postToRemove = await this.postRepository.findOne(request.params.id);
        await this.postRepository.remove(postToRemove);
    }

}