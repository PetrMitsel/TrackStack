import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Comment } from "../entity/Comment";

export class CommentController {

    private commentRepository = getRepository(Comment);

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

}