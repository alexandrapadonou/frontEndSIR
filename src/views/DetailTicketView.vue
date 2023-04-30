<script setup lang="ts">
  import { useRoute } from "vue-router";
  import { ref, computed} from 'vue'
  import { plainToClass } from "class-transformer";

  import RoundedTicket from "@/components/RoundedTicket.vue";
    import { Tag } from "@/classes/Tag";
    import { Ticket } from "@/classes/Ticket";
    import { User } from "@/classes/User";
    import { Discussion } from "@/classes/Discussion";
    import { TicketStore } from "@/stores/ticket"
    import { DiscussionStore } from "@/stores/discussion"

  const ticketStore = TicketStore();
  const discussionStore = DiscussionStore();

  const route = useRoute();
  const id = computed(()=>{
    return route.params.id
  } )

  const content = ref("");

  ticketStore.getById(parseInt(id.value))

  const ticket:Ticket = computed(()=>ticketStore.getTicket );


const errors = computed(() => {
  return discussionStore.errors;
});

const success = computed(() => {
  return discussionStore.success;
});


  function createComment(){

  }
  
</script>
<template>
    <div class="px-20 py-10 ">
        <div class="flex flex-col space-y-5 border-b border-opacity-5 pb-5" >
            <div class="flex flex-row space-x-5 items-center">
                <RoundedTicket :ticket="plainToClass(Ticket, ticket)" />
                <h1 class="text-6xl text-gray-700 fjalla">{{ ticket.title }}</h1>

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

        <section class="flex space-x-8 w-full">
            <div class="flex flex-col space-y-5 py-4">
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
                <form action="" class="flex items-center space-x-5 w-full" @submit.prevent="createComment">
                
                    <input
                    type="text"
                    name="description"
                    v-model="content"
                    class="rounded-lg text-gray-700 border-gray-300"
                    /><button type="submit">
                    <i class="fa-thin fa-paper-plane text-gray-700 text-3xl"></i>
                    </button>
                </form>
                <div class="flex flex-col space-y-3">
                    <div 
                    v-for="comment in ticket.discussions" :key="comment.id"
                    class="flex flex-col space-y-1 bg-gray-200 w-[50rem] rounded-lg p-2">
                        <div class="inline-flex justify-between">
                            <span class="text-sm text-gray-800" v-if="comment.author !== undefined">{{comment.author.name}}</span>
                            <span class="text-sm text-gray-800" v-if="comment.createdAt !== undefined">{{comment.createdAt }} </span>
                        </div>

                        <p class="text-sm text-gray-500">
                            {{comment.content}}.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>