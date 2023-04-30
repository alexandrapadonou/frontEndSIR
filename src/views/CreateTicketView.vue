<script setup lang="ts">
import { ref, computed } from "vue";
import { TicketStore } from "@/stores/ticket"
import { TagStore } from "@/stores/tag"
import { UserStore } from "@/stores/user"

const ticketStore = TicketStore();
const tagStore = TagStore();
const userStore = UserStore();

tagStore.getAll()
const tags = computed(()=>tagStore.getTags );

userStore.getAll()
const users = computed(()=>userStore.getusers );

const title = ref("");
const content = ref("");
const author = ref("");
const tagIds = ref([]);

const errors = computed(() => { 
  return ticketStore.errors; 
})

function validateFields() {
  if(title.value === "" || author.value === "" || author.value === null){
    return false;
  }
}


async function store() {
    ticketStore.errors=""
    if(validateFields() === false){
        ticketStore.errors = "Les champs title et auteur sont requis";
    }    
    else{
        var data ={
        "title":title.value,
        "content":content.value,
        "authorId":author.value
        }
        if(tagIds.value.length !=0) data["tagIds"] = tagIds.value

        console.log(data)
        await ticketStore.store(data)  
    }
    if(errors.value == ""){
        ticketStore.errors=""
    }
}




</script>
<template>
    <div class="flex flex-col items-center justify-center h-full w-full py-20">
        <p class="text-md md:text-xl font-bold">Informations du ticket</p>
            
        <form @submit.prevent="store" class="flex flex-col space-y-10 items-center justify-center pt-8 w-2/3">

            <div class="flex flex-col text-red-700 text-center tracking-wider">
                <p 
                    class="text-sm md:text-md font-normal py-2"
                    v-if="errors"
                >
                    {{ errors }}
                </p>
            </div>
        

            <div class="my-2 w-full text-black flex flex-col">
                <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</span>
                <input
                    v-model="title"
                    role="input"
                    type="text"
                    placeholder="title du ticket*"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-500 peer"                />
            </div>

            <div class="mt-2 w-full text-black flex flex-col">
                <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</span>
                <textarea v-model="content" rows="10" class="block py-2.5 px-1 w-full text-sm text-gray-600 bg-gray-50 rounded-lg border-b-2 border-gray-200 focus:ring-0 focus:border-gray-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 peer" placeholder="Description du problème...">

                </textarea>
            </div>

            <div class="mt-2 w-full text-black flex flex-col">
                <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags</span>
                <select multiple v-model="tagIds" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-500 peer">
                    <option selected>Choisissez les tags</option>
                    <option v-for="tag in tags" :key="tag.id" :value="tag.id">{{tag.label}}</option>

                </select>
            </div>
            
            <div class="mt-2 w-full text-black flex flex-col">
                <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Auteur</span>
                <select v-model="author" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-500 peer">
                    <option selected>Choisissez l'auteur</option>

                    <option v-for="user in users" :key="user.id" :value="user.id">{{user.name}}</option>
                </select>
            </div>

        
            <div class="flex items-center justify-center w-1/4 mt-6 mb-2">
                <button
                    type="submit"
                    aria-label="add user"
                    role="button"
                    class="focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 focus:outline-none px-6 py-3 bg-blue-800 hover:bg-opacity-80 shadow rounded-2xl md:text-md text-sm text-white w-full font-bold"
                >
                    Créer
                </button>
            </div>
        </form>
    </div>
</template>