import { defineStore } from "pinia";
import { Constants } from "@/stores/constants";
import router from "@/router";
import axios from "axios";
import { TicketStore } from "./ticket";

export const DiscussionStore = defineStore({
  id: "discussions",
  state: () => ({
    discussions: [],
    totalPages:0,
    comment: {},
    errors:"",
    success:""
  }),
  getters: {
    all: (state) => state.discussions,

  },
  actions: {
    async store(data:Object) {
      const constants = Constants();
      await axios.post(constants.APIURI + "discussions", 
          data
      ).then(() => {

        this.success ="Commentaire crée"
        this.errors = ""
        
      })
      .catch(function (error) {
        //this.errors =  result.data.errors
        console.log(error.message);
      });  
      if(this.errors==""){
        const ticketStore = TicketStore();
        ticketStore.getById(data.ticketId);
      }
      
    },

    async getAll(){
      const constants = Constants();
      await axios.get(constants.APIURI + "discussions")
                 .then((data) => {
                    console.log(data.data)
                  this.discussions =  data.data
                 })
                .catch(function (error) {
                  console.log(error.message);
                });
    },
/*
    async update(id, commentInfos) {
      const constante = Constants();
      await fetch(constante.APIURI + "discussions/" + id, {
        method: "PATCH",
        headers: {
          "content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + this.userToken,
        },
        body: JSON.stringify(commentInfos),
      })
        .then((response) => response.json())
        .then((result) => {
            if (result.errors){
            this.success = [];
            this.errors = result.errors;
            console.log(result.errors)
          } 
          else if ("error" in result){
            console.log(result)
            this.success = [];
            this.errors = result.message;
          }
          else {
            console.log(result)
            this.success =["Comment updated"]
            this.errors = []
            this.getAll({post:commentInfos.post})
          }
        });
    },

    async delete(id) {
      const constante = Constants();
      await fetch(constante.APIURI + "discussions/" + id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + this.userToken,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.errors) {
            this.success = [];
            this.errors = result.errors;
            console.log(result.errors)
          } else if ("error" in result) {
            console.log(result)
            this.success = [];
            this.errors = result.message;
          } else {
            console.log(result)
            this.success = ["Comment deleted"]
            this.errors = []
            this.getAll({
              post: commentInfos.post
            })
          }
        });
    },

    async getAll(data) {
      const constante = Constants();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      await fetch(constante.APIURI + "discussions/post/" + data.post, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.errors) {
            this.success = [];
            this.errors = result.errors;
            console.log(result.errors)
          } else if ("error" in result) {
            console.log(result)
            this.success = [];
            this.errors = result.message;
          } else {
            console.log(result)
            this.success = []
            this.errors = []
            this.discussions = result.data;
          }
        })
        .catch((error) => console.log("error", error));
    },


    async getById(id) {
      console.log('id '+id)

      const constante = Constants();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      await fetch(constante.APIURI + "discussions/" + id, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.errors) {
            this.success = [];
            this.errors = result.errors;
            console.log(result.errors)
          } else if ("error" in result) {
            console.log(result)
            this.success = [];
            this.errors = result.message;
          } else {
            console.log(result)
            this.success = []
            this.errors = []
            this.comment = result.data;
          }
        })
        .catch((error) => console.log("error", error));
    },*/
  },
  
});