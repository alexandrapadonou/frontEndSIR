<script setup lang="ts">
    import TicketVue from './Ticket.vue'
    import PaginationVue from './Pagination.vue';
    import { ref, computed } from 'vue'
    import type { Ticket } from '@/classes/Ticket';

    const props = defineProps({'tickets':Array<Ticket>});


    var is_order_down = ref(true)
    function change_order(){
        is_order_down.value = !is_order_down.value
    }
    
</script>
<template>
    <div class="px-20 py-10 ">

        <div class="flex flex-row justify-between" >
            <div class="text-xl font-bold text-dark-brown">{{tickets.length}} Equipes inscrites</div>
            <div class="flex flex-row space-x-5">
                <div><i class="fa-sharp fa-solid fa-sliders"></i> Trier par</div>
                <div class="flex flex-row space-x-1 font-semibold text-center"> <span>Nom Equipe</span> <i class="fa-solid" :class="is_order_down?'fa-sort-down':'fa-sort-up'" @click="change_order()"></i> </div>
            </div>
        </div>

        <div class="flex flex-col px-2 pb-8 pt-10">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-5 md:gap-x-10">
                <TicketVue v-for="ticket in tickets" :key="ticket.id" :ticket="ticket"/>
            </div>
        </div>

        <PaginationVue/>

        
    </div>
</template>