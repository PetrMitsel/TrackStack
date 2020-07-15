import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, EntitySchemaRelationOptions, ManyToOne, OneToMany } from "typeorm";
import { Url } from "url";
import { type } from "os";
import { User } from "./User";
import { Post } from "./Post";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        length: 500
    })
    body: string;


    @Column()
    upvotes: number;

    @Column()
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