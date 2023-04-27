<!-- eslint-disable vue/multi-word-component-names -->

<script setup lang="ts">
  import { Ticket } from '@/classes/Ticket';
  import RoundedTicket from './RoundedTicket.vue';
  const props = defineProps({'ticket':Ticket});
</script>
<template>
    <div class="flex flex-row m-5 items-center w-full space-x-3 hover:bg-gray-100">
        
        <RoundedTicket :ticket="ticket" />
        <div class="flex flex-col text-sm space-y-2">
            <div class="flex flex-row justify-between">
                <RouterLink :to="'/tickets/'+ticket?.id" class="overflow-hidden hover:text-clip hover:underline">{{ticket?.title}}</RouterLink>
                <div class="flex flex-row space-x-2 py-2">
                    <span>Assigned To : </span>
                    <span class="space-x-2"><i class="fa-light fa-comments"></i><span>{{ ticket?.discussions.length }}</span></span>

                </div>
            </div>
            <div class="grid grid-cols-10 gap-y-2 gap-x-5 text-xs"><span v-for="tag in ticket?.tags" :key="tag.id" class="bg-blue-800 text-white text-center rounded-full px-2 py-1">{{ tag.label }}</span></div>
            <div class=" flex flex-row space-x-2 items-baseline text-gray-600">
                <span>  {{"ouvert le "+ ticket?.createdAt + " par "+ticket?.author.name}}</span>
            </div>
        </div>
        
    </div>
</template>