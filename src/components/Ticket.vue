<!-- eslint-disable vue/multi-word-component-names -->

<script setup lang="ts">
  import { Ticket } from '@/classes/Ticket';
  import RoundedTicket from './RoundedTicket.vue';
  const props = defineProps({'ticket':Ticket});
</script>
<template>
    <div class="flex flex-row items-center w-full space-x-5 hover:bg-gray-100 py-5">
        
        <RoundedTicket :ticket="ticket" />
        <div class="flex flex-col text-sm space-y-5 w-full text-xs ">
            <div class="flex flex-row justify-between">
                <RouterLink :to="'/tickets/'+ticket?.id" class="overflow-hidden hover:text-clip hover:underline text-sm md:text-lg ">{{ticket?.title}}</RouterLink>
                <div class="flex flex-row space-x-2 py-2">
                    <span class="space-x-2"><i class="fa-light fa-comments"></i><span>{{ ticket?.nbDiscussion }} discussions</span></span>

                </div>
            </div>
            <div class="flex flex-row justify-between" >
                <div class="grid grid-cols-4 gap-y-2 gap-x-5 justify-self-start"><span v-for="tag in ticket?.tags.slice(0,4)" :key="tag.id" class="bg-blue-800 text-white text-center rounded-full px-2 py-1">{{ tag.label }}</span></div>
                <div v-if="ticket?.resolvers.length !=0" class="grid grid-cols-4 gap-y-2 gap-x-5 justify-self-end ">                    
                    <span>Assigné à : </span>
                    <span v-for="user in ticket?.resolvers.slice(0,3)" :key="user.id" class="bg-blue-800 text-white text-center rounded-full px-2 py-1">{{ user.name }}</span>
                </div>
            </div> 
            <div class="flex flex-row justify-between">
                <div class=" flex flex-row space-x-2 items-baseline text-gray-600">
                    <span>  {{"ouvert le "+ ticket?.createdAt + " par "+ticket?.author.name}}</span>
                </div>
                <div v-if="ticket?.closedAt" class=" flex flex-row space-x-2 items-baseline text-gray-600">
                    <span>  {{"fermé le "+ ticket?.closedAt}}</span>
                </div>
            </div>
        </div>
        
    </div>
</template>