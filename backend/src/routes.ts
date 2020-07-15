import { UserController } from "./controller/UserController";
import { PostController } from "./controller/PostController";
import { CommentController } from "./controller/CommentController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "get",
    route: "/posts",
    controller: PostController,
    action: "all"
}, {
    method: "get",
    route: "/posts/:id",
    controller: PostController,
    action: "one"
}, {
    method: "post",
    route: "/posts",
    controller: PostController,
    action: "save"
}, {
    method: "delete",
    route: "/posts/:id",
    controller: PostController,
    action: "remove"
}, {
    method: "get",
    route: "/comments",
    controller: CommentController,
    action: "all"
}, {
    method: "get",
    route: "/comments/:id",
    controller: CommentController,
    action: "one"
}, {
    method: "post",
    route: "/comments",
    controller: CommentController,
    action: "save"
}, {
    method: "delete",
    route: "/comments/:id",
    controller: CommentController,
    action: "remove"
}];