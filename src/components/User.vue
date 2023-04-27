<!-- eslint-disable vue/multi-word-component-names -->

<script setup lang="ts">
  import { User } from '@/classes/User';
  import RoundedUser from './RoundedUser.vue';
  const props = defineProps({'user':User});
</script>
<template>
    <div class="flex flex-row m-5 items-center space-x-6">
        
        <RoundedUser />

        <div class="flex flex-col">
            <span class="overflow-hidden hover:text-clip text-center font-semibold md:text-lg">{{props.user?.name}}</span>
            <RouterLink :to="'/tickets?user='+props.user?.id+'&ticketType=created'" class=" flex flex-row space-x-3 items-baseline text-xs hover:underline hover:decoration-[#5A240C]">
                <i class="fa-light fa-list-check"> </i>  <span>{{ props.user?.createdTickets.length}} tickets crées </span>
            </RouterLink>
            <RouterLink :to="'/tickets?user='+props.user?.id+'&ticketType=affected'" class=" flex flex-row space-x-3 items-baseline text-xs hover:underline hover:decoration-[#5A240C]">
                <i class="fa-light fa-list-check"> </i>  <span>{{ props.user?.affectedTickets.length}} tickets affectés </span>
            </RouterLink>
            <RouterLink :to="'/discussions?user='+props.user?.id" class=" flex flex-row space-x-2 items-baseline text-xs hover:underline hover:decoration-[#5A240C]">
                <i class="fa-light fa-comments"></i>  <span>{{ props.user?.discussions.length}} discussions </span>
            </RouterLink>
        </div>
        
    </div>
</template>