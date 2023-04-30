import { defineStore } from "pinia";
import axios from 'axios'
import {Constants} from "./constants";
import router from "@/router"

export const TicketStore = defineStore("ticket", {
  state: () => ({
    tickets:[],
    ticket:{},
    searchData:[],
    errors:"",
    success:""
  }),
  getters: {
    getTickets: (state) => state.tickets,
    getTicket: (state) => state.ticket,

  },
  actions: {
    
    async getAll(){
      const constants = Constants();
      await axios.get(constants.APIURI + "tickets")
                 .then((data) => {
                      this.tickets =  data.data
                 })
                .catch(function (error) {
                  console.log(error.message);
                });
    },

    async getById(id:number){
      const constants = Constants();
      await axios.get(constants.APIURI + "tickets/"+id)
                 .then((data) => {
                  console.log(data.data)
                      this.ticket =  data.data
                 })
                .catch(function (error) {
                  console.log(error.message);
                });
    },

    async store(data:object){
      const constants = Constants();
      await axios.post(constants.APIURI + "tickets", 
          data
      ).then(() => {

          this.success="Ticket ajouté!"
          router.push("/tickets");

      })
      .catch(function (error) {
        //this.errors =  result.data.errors
        console.log(error.message);
      });
               
    },


  },
});
