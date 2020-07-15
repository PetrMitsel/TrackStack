import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, EntitySchemaRelationOptions, ManyToOne, OneToMany } from "typeorm";
import { Url } from "url";
import { type } from "os";
import { User } from "./User";
import { Comment } from "./Comment";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        length: 500
    })
    body: string;

    @Column()
    soundFileUrl: string;

    @Column()
    upvotes: number;

    @Column()
    downvotes: number;

    @ManyToOne(type => User, user => user.posts)
    author: User;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(type => Comment, comment => comment.post)
    comments: Comment[];

    //tags
}