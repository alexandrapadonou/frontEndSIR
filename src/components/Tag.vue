<!-- eslint-disable vue/multi-word-component-names -->

<script setup lang="ts">
  import { Tag } from '@/classes/Tag';
  import RoundedLetter from './RoundedLetter.vue';
  const props = defineProps({'tag':Tag});
</script>
<template>
    <div class="flex flex-row m-5 items-center space-x-2">
        
        <RoundedLetter :lettre="tag?.label.substring(0,1)" />

        <div class="flex flex-col">
            <span class="text-xs md:text-lg overflow-hidden hover:text-clip">{{tag?.label.substring(1,tag?.label.length)}}</span>
            <RouterLink :to="'/tickets?tag='+props.tag?.id" class=" flex flex-row space-x-2 items-baseline text-xs hover:underline hover:decoration-[#5A240C]">
                <i class="fa-sharp fa-light fa-list-check"></i> <span>{{"utilisé par " + tag?.nbTicket + " tickets"}} </span> 
            </RouterLink>
        </div>
        
    </div>
</template>