import type { Discussion } from "./Discussion";
import type { Tag } from "./Tag";
import type { User } from "./User";

export class Ticket {
    id:number;
    title:string;
    content:string;
    createdAt:string;
    closedAt:string;
    author:User;

    resolvers:Array<User>=[];
    discussions:Array<Discussion>=[];
    tags:Array<Tag>=[];

    constructor(id: number, title: string, content: string, createdAt: string, closedAt: string, author: User, resolvers: User[], discussions: Discussion[], tags: Tag[]){
        this.id= id;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.closedAt = closedAt;
        this.author = author;
        this.resolvers = resolvers;
        this.discussions= discussions;
        this.tags=tags;
    }
    

}
