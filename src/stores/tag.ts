import { defineStore } from "pinia";
import axios from 'axios'
import {Constants} from "./constants";


export const TagStore = defineStore("tag", {
  state: () => ({
    tags:[],
    searchData:[],
    errors:"",
    success:""
  }),
  getters: {
    getTags: (state) => state.tags,
  },
  actions: {
    
    async getAll(){
      const constants = Constants();
      await axios.get(constants.APIURI + "tags")
                 .then((data) => {
                    console.log(data.data)
                  this.tags =  data.data
                 })
                .catch(function (error) {
                  console.log(error.message);
                });
    },

    async store(data:object){
      const constants = Constants();
      await axios.post(constants.APIURI + "tags", 
          data
      ).then(() => {

          this.success="Tag ajouté!"
          this.getAll()

      })
      .catch(function (error) {
        //this.errors =  result.data.errors
        console.log(error.message);
      });
               
    },


  },
});
