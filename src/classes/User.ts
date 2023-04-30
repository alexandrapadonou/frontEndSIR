import type { Discussion } from "./Discussion";
import type { Ticket } from "./Ticket";

export class User {
    id:number;
    name:string;
    nbDiscussion?:number=0;
	nbAffectedTicket?:number=0;
	nbCreatedTicket?:number=0;
    /*
    createdTickets?: Array<Ticket> = [];
    affectedTickets?: Array<Ticket> = [];
    discussions?: Array<Discussion> = [];
    */
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;    
    }
}