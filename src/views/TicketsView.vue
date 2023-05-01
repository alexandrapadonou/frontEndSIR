<script setup lang="ts">
  import { Ticket } from '@/classes/Ticket';
  import PaginationVue from "../components/Pagination.vue";
  import TicketVue from '../components/Ticket.vue';
  import { ref, computed } from 'vue'
  import { TicketStore } from "@/stores/ticket"
  import { plainToClass } from "class-transformer";

  const ticketStore = TicketStore();

  ticketStore.getAll()
  const tickets = computed(()=>ticketStore.getTickets );


  var filterByTitle = ref({"value":"", "order":1})
  var filterByAuthor = ref({"value":"", "order":1})
  var filterByTag = ref({"value":"", "order":1})
  var filterByAssignedTo = ref({"value":"", "order":1})
  var sortBy = ref({"value":"", "order":1})

    var is_order_down = ref(true)
    function change_order(){
        is_order_down.value = !is_order_down.value
    }
</script>

<template>
  <div class="px-20 py-10 ">

    <div class="flex flex-row justify-between pb-2" >
        <div class="text-lg md:text-xl font-bold text-dark-brown space-x-3">
          <span>{{tickets.length}} Tickets</span> 
          <span class="text-sm"><i class="fa-duotone fa-octagon"></i> 4 open </span>
          <span class="text-sm"><i class="fa-duotone fa-octagon-check"></i> 1 closed</span>
        </div>
        <RouterLink to="/nouveau-tickets" class="flex justify-end text-xl text-blue-900 cursor-pointer font-bold space-x-1">
          <i  class="fa-thin fa-plus fa-beat text-sm"></i>

          <i class="fa-light fa-list-check fa-beat" title="Ajouter un nouveau ticket"></i>

        </RouterLink>
    </div>

    <div class="flex flex-row justify-between items-end py-10" >
      <div class="flex flex-row w-8/12 items-end space-x-2">
            <div class="w-1/3"><i class="fa-sharp fa-solid fa-sliders"></i> Filtrer par</div>

            <div class="flex flex-col justify-end justify-items-end w-2/3">
              <div class="flex flex-row space-x-1 font-semibold text-center"> <span>Title</span>  </div>
              <input type="text" v-model="filterByTitle.value" class="bg-gray-200 rounded-lg px-2 py-1 w-2/3">
            </div>

            <div class="w-2/3">
              <div class="flex flex-row space-x-1 font-semibold text-center"> <span>Auteur</span>  </div>
              <input type="text" v-model="filterByAuthor.value" class="bg-gray-200 rounded-lg px-2 py-1 w-2/3">
            </div>

            <div class="w-2/3">
              <div class="flex flex-row space-x-1 font-semibold text-center"> <span>Tag</span>  </div>
                <input type="text" v-model="filterByTag.value" class="bg-gray-200 rounded-lg px-2 py-1 w-2/3">
            </div>

            <div class="w-2/3">
              <div class="flex flex-row space-x-1 font-semibold text-center"> <span>Affecté à</span>  </div>
                <input type="text" v-model="filterByAssignedTo.value" class="bg-gray-200 rounded-lg px-2 py-1 w-2/3">
            </div>
        </div>

        <div class="flex flex-row space-x-5 items-end">
          <div><i class="fa-sharp fa-solid fa-sliders"></i> Trier par</div>
            <select v-model="sortBy.value" class="px-2 py-1 rounded-lg bg-gray-200 mx-2">
              <option class="px-2" value="title">title</option>
              <option class="px-2" value="auteur">auteur</option>
              <option class="px-2" value="tag">tag</option>
              <option class="px-2" value="openedDate" selected>Date création</option>
              <option class="px-2" value="closedDate">Date clôture</option>
              <optgroup label="Statut">
                <option class="px-2" value="open">ouvert</option>
                <option class="px-2" value="close">fermé</option>
              </optgroup>
            </select>
            <select v-model="sortBy.order" class="px-2 py-1 rounded-lg bg-gray-200 mx-2">
              <option class="px-2" value="1">a-z</option>
              <option class="px-2" value="0">z-a</option>
            </select>
        </div>
    </div>
    

    <div class="flex flex-col px-2 pb-8 pt-10">
        <div class="grid grid-cols-1 gap-y-5 gap-x-5 md:gap-x-10 w-full">
            <TicketVue v-for="ticket in tickets" :key="ticket.id" :ticket="plainToClass(Ticket, ticket)" class="w-full"/>
        </div>
    </div>

    <PaginationVue/>


  </div>
</template>
