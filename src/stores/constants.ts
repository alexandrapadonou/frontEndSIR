import { defineStore } from "pinia";
import axios from 'axios'


export const Constants = defineStore("constants", {
  state: () => ({
    APIURI: "http://localhost:8080/api/",
  }),
  getters: {},
  actions: {
    
  },
});
