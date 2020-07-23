import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, EntitySchemaRelationOptions, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { type } from "os";
import { User } from "./User";
import { Comment } from "./Comment";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column("text")
    body: string;

    @Column({
        nullable: true
    })
    soundFileUrl: string;

    @Column({
        default: 0
    })
    upvotes: number;

    @Column({
        default: 0
    })
    downvotes: number;

    @ManyToOne(type => User, user => user.posts, { eager: true })
    @JoinColumn({name: 'user_id' })
    author: User;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(type => Comment, comment => comment.post, {eager:true})
    comments: Comment[];

    //tags
}