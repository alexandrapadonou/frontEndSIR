import type { Ticket } from "./Ticket";

export class Tag {

    id: number;
    label: string;
    tickets?: Array<Ticket> = [];
    nbTicket?:number;

    constructor(id: number, label: string){
        this.id= id;
        this.label = label;
    }
}
