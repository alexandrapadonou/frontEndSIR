import { defineStore } from "pinia";
import axios from 'axios'
import {Constants} from "./constants";


export const UserStore = defineStore("user", {
  state: () => ({
    users:[],
    searchData:[],
    errors:"",
    success:""
  }),
  getters: {
    getusers: (state) => state.users,
  },
  actions: {
    
    async getAll(){
      const constants = Constants();
      await axios.get(constants.APIURI + "users",{ crossdomain: true })
                 .then((data) => {
                  this.users =  data.data
                 })
                .catch(function (error) {
                  console.log(error.message);
                });
    },

    async store(data:object){
      const constants = Constants();
      await axios.post(constants.APIURI + "users", 
          data
      ).then(() => {
          this.success="Utilisateur ajouté!"
          this.getAll()
      })
      .catch(function (error) {
        //this.errors =  result.data.errors
        console.log(error.message);
      });
               
    },


  },
});
