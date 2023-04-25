<!-- eslint-disable vue/multi-word-component-names -->

<script setup lang="ts">
  import { Ticket } from '@/classes/Ticket';
  import TeamPlayersVue from './TeamPlayers.vue';
  const props = defineProps({'ticket':Ticket});
</script>
<template>
    <div class="flex flex-row m-5 items-center">
        
        <TeamPlayersVue :lettre="ticket?.title.substring(0,1)" :joueurs="props.joueurs" />

        <div class="flex flex-col text-xs">
            <span class="overflow-hidden hover:text-clip">{{ticket?.title}}</span>
            <div class=" flex flex-row space-x-2 items-baseline">
                <i class="fa-thin fa-user"></i>
                <span>{{ticket?.author.name}}</span>
            </div>
        </div>
        
    </div>
</template>