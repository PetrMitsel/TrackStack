import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, EntitySchemaRelationOptions, OneToMany } from "typeorm";
import { Url } from "url";
import { Post } from "./Post";
import { Comment } from "./Comment";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 15,
        unique: true
    })
    userName: string;

    @Column({
        unique: true
    })
    email: string;

    @Column({
        default: 0,
        nullable: true
    })
    reputation: number;

    @Column({
        nullable: true
    })
    avatarUrl: string;

    @CreateDateColumn()
    memberSince: Date;

    @OneToMany(type => Post, post => post.author)
    posts: Post[];

    @OneToMany(type => Comment, comment => comment.author)
    comments: Comment[];

    //comments
    //tags
}
