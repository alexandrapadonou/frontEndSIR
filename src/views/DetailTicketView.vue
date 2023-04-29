<script setup lang="ts">
  import { useRoute } from "vue-router";
  import { computed} from 'vue'
  import RoundedTicket from "@/components/RoundedTicket.vue";
    import { Tag } from "@/classes/Tag";
    import { Ticket } from "@/classes/Ticket";
    import { User } from "@/classes/User";
    import { Discussion } from "@/classes/Discussion";
  const route = useRoute();

  const id = computed(()=>{
    return route.params.id
  } )

  var ticket = new Ticket(1, "efdfrg","dzsdddddddddddd dssssfd", "25-04-2023 12:52",'27-04-2023 23:52', new User(12,"Baba"),[new User(1,"Toni"),new User(2,"Kelly")],[new Discussion(1,"hello mais il y a quoi", new User(3, "Baba"),ticket,"26-04-2023 13:52")],[new Tag(1, "Mécanique"), new Tag(2, "Informatique"), new Tag(3, "Réseaux"),new Tag(4, "Données"),]);

  
</script>
<template>
    <div class="px-20 py-10 ">
        <div class="flex flex-col space-y-3 border-b border-opacity-5 pb-5" >
            <div class="flex flex-row space-x-5 items-center">
                <RoundedTicket :ticket="ticket" />
                <p class="text-xl font-bold">{{ ticket.title }}</p>

            </div>

            <div class="flex flex-row justify-between">
                <div class=" flex flex-row space-x-2 items-baseline text-gray-600">
                    <span>  {{"ouvert le "+ ticket?.createdAt + " par "+ticket?.author.name}}</span>
                    <span>-</span>
                    <span>{{ ticket.discussions.length + " commentaire(s)" }}</span>
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
    </div>
</template>