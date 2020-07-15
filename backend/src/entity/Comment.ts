import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, EntitySchemaRelationOptions, ManyToOne, OneToMany } from "typeorm";
import { type } from "os";
import { User } from "./User";
import { Post } from "./Post";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    body: string;


    @Column({
        default: 0
    })
    upvotes: number;

    @Column({
        default: 0
    })
    downvotes: number;

    @ManyToOne(type => User, user => user.comments)
    author: User;

    @ManyToOne(type => Post, post => post.comments)
    post: Post;

    @ManyToOne(type => Comment, comment => comment.replies)
    parentComment: Comment;

    @OneToMany(type => Comment, comment => comment.parentComment)
    replies: Comment[];

    @CreateDateColumn()
    createdAt: Date;

}