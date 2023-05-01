<script setup lang="ts">
  import { useRoute } from "vue-router";
  import { ref, computed} from 'vue'
  import { plainToClass } from "class-transformer";

  import RoundedTicket from "@/components/RoundedTicket.vue";
    import { Ticket } from "@/classes/Ticket";
    import { TicketStore } from "@/stores/ticket"
    import { DiscussionStore } from "@/stores/discussion"
    import { UserStore } from "@/stores/user"

    const userStore = UserStore();

  const ticketStore = TicketStore();
  const discussionStore = DiscussionStore();

  const route = useRoute();
  const id = computed(()=>{
    return route.params.id
  } )

  userStore.getAll()
    const users = computed(()=>userStore.getusers );

  const content = ref("");
  const author = ref("");

  ticketStore.getById(parseInt(id.value))

  const ticket:Ticket = computed(()=>ticketStore.getTicket );


const errors = computed(() => {
  return discussionStore.errors;
});

const success = computed(() => {
  return discussionStore.success;
});


function validateFields() {
  if(content.value === "" || author.value === "" || author.value === null){
    return false;
  }
}


async function store() {
    ticketStore.errors=""
    if(validateFields() === false){
        discussionStore.errors = "Les champs message et auteur sont requis";
    }    
    else{
        var data ={
        "content":content.value,
        "authorId":author.value,
        "ticketId":id.value
        }
        console.log(data)
        await discussionStore.store(data)  
    }
    if(errors.value == ""){
        discussionStore.errors=""
        content.value=""
        author.value=""

    }
}
</script>
<template>
    <div class="px-20 py-10 ">
        <div class="flex flex-col space-y-5 border-b border-opacity-5 pb-5" >
            <div class="flex flex-row space-x-5 items-center">
                <RoundedTicket :ticket="plainToClass(Ticket, ticket)" />
                <h1 class="text-2xl font-bold text-gray-700 fjalla">{{ ticket.title }}</h1>

            </div>

            <div class="flex flex-row justify-between">
                <div class=" flex flex-row space-x-2 items-baseline text-gray-600">
                    <span>  {{"ouvert le "+ ticket?.createdAt + " par "}}</span>
                    <div
                        class="flex items-center space-x-3 px-3 bg-gray-100 py-1 rounded-full text-orange-500"
                    >
                        <i class="fa-light fa-user"></i><span v-if="ticket.author !=undefined"> {{ ticket.author.name}} </span>
                    </div>
                    <span>-</span>
                    <span>{{ ticket?.discussions?.length + " commentaire(s)" }}</span>
                </div>
                <div v-if="ticket?.closedAt" class=" flex flex-row space-x-2 items-baseline text-gray-600">
                    <span>  {{"fermé le "+ ticket?.closedAt}}</span>
                </div>
            </div>
        </div> 
        <div class="flex flex-row space-x-3 border-b border-opacity-5 py-5 items-baseline">
            <span class="font-semibold text-md"> Tags: </span>
            <div class="grid grid-cols-10 gap-y-4 gap-x-5 justify-self-start"><span v-for="tag in ticket?.tags" :key="tag.id" class="bg-gray-500 text-white text-center rounded-xl px-2 py-1">{{ tag.label }}</span></div>
        </div>

        <div class="flex flex-row space-x-3 border-b border-opacity-5 py-5 items-baseline">
            <span class="font-semibold text-md"> Assigné à: </span>
            <div class="grid grid-cols-10 gap-y-4 gap-x-5 justify-self-start"><span v-for="user in ticket?.resolvers" :key="user.id" class="bg-gray-500 text-white text-center rounded-xl px-2 py-1">{{ user.name }}</span></div>
        </div>
        <div class="border-b border-opacity-5 py-5">
        </div>


        <p class="text-gray-500 border-l-4 border-orange-600 rounded-r-lg px-4 text-justify py-2 bg-gray-200 w-full"
        >
        {{ ticket.content }}
        </p>

        <section class="flex space-x-8 w-full pt-10">
            <div class="flex flex-col space-y-5 py-4 w-full">
                <h2 class="text-4xl fjalla text-gray-700">
                    <i class="fa-light fa-comment mr-4"></i>Discussions
                </h2>
                <div v-if="errors" class="bg-red-200">
                    <span> {{ errors }}</span>
                </div>
                <div v-if="success" class="bg-green-200">
                    <span >
                    {{ success }}</span
                    >
                </div>
                <form class="flex items-end space-x-5 w-full" @submit.prevent="store">
                    <div class=" w-3/5 mt-2 text-black flex flex-col">
                        <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nouveau Message</span>
                        <textarea v-model="content" rows="4" class="block py-2.5 px-1 w-full text-sm text-gray-600 bg-gray-50 rounded-lg border-b-2 border-gray-200 focus:ring-0 focus:border-gray-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 peer" placeholder="message...">

                        </textarea>
                    </div>

                    <div class="w-1/5 mt-2 text-black flex flex-col">
                        <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Auteur</span>
                        <select v-model="author" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-500 peer">
                            <option selected>Choisissez l'auteur</option>

                            <option v-for="user in users" :key="user.id" :value="user.id">{{user.name}}</option>
                        </select>
                    </div>
                   
                    <button type="submit" class="w-1/5" title="Envoyer">
                    <i class="fa-thin fa-paper-plane text-gray-700 text-3xl"></i>
                    </button>
                </form>
                <div class="flex flex-col space-y-3 w-full pt-5">
                    <div 
                    v-for="comment in ticket.discussions" :key="comment.id"
                    class="flex flex-col space-y-1 bg-gray-200 w-[50rem] rounded-lg p-2 w-full">
                        <div class="inline-flex justify-between text-orange-500">
                            <div
                                class="flex items-center space-x-3 rounded-full "
                            >
                                <i class="fa-light fa-user"></i><span v-if="comment.author !=undefined"> {{ comment.author.name}} </span>
                            </div>
                            <span class="text-sm " v-if="comment.createdAt !== undefined">{{"le "+comment.createdAt }} </span>
                        </div>

                        <p class="text-sm text-gray-500 px-1">
                            {{comment.content}}
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>