<!-- eslint-disable vue/multi-word-component-names -->

<script setup lang="ts">
  import { User } from '@/classes/User';
  import RoundedUser from './RoundedUser.vue';
  const props = defineProps({'user':User});
</script>
<template>
    <div class="relative">
        <i class="fa-regular fa-ellipsis-stroke  absolute top-0 right-0"></i>

        <div class="flex flex-row m-5 items-center space-x-6  ">
            <RoundedUser />

            <div class="flex flex-col">
                <span class="overflow-hidden hover:text-clip text-center font-semibold md:text-lg">{{props.user?.name}}</span>
                <RouterLink :to="'/tickets?user='+props.user?.id+'&ticketType=created'" class=" flex flex-row space-x-3 items-baseline text-xs hover:underline hover:decoration-[#5A240C]">
                    <i class="fa-light fa-list-check"> </i>  <span>{{ props.user?.nbCreatedTicket}} tickets crées </span>
                </RouterLink>
                <RouterLink :to="'/tickets?user='+props.user?.id+'&ticketType=affected'" class=" flex flex-row space-x-3 items-baseline text-xs hover:underline hover:decoration-[#5A240C]">
                    <i class="fa-light fa-list-check"> </i>  <span>{{ props.user?.nbAffectedTicket}} tickets affectés </span>
                </RouterLink>
                <div  class=" flex flex-row space-x-2 items-baseline text-xs">
                    <i class="fa-light fa-comments"></i>  <span>{{ props.user?.nbDiscussion}} discussions </span>
                </div>
            </div>
            
        </div>

    </div>
    
</template>