import type { Ticket } from "./Ticket";

export class Tag {

    id: number;
    label: string;
    tickets: Array<Ticket>;

    constructor(id: number, label: string, tickets: Ticket[]){
        this.id= id;
        this.label = label;
        this.tickets = tickets;
    }
}
