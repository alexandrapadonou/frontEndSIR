import type { Ticket } from "./Ticket";
import type { User } from "./User";

export class Discussion {
    id: number;
    content: string;
    author: User;
    ticket: Ticket;
    createdAt: string;

    constructor(id: number,content: string,author: User,ticket: Ticket,createdAt: string){
        this.id = id;
        this.content=content;
        this.author=author;
        this.ticket = ticket;
        this.createdAt = createdAt;
    
    } 
}
