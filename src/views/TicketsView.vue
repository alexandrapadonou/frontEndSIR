<script setup lang="ts">
  import { Ticket } from '@/classes/Ticket';
  import { User } from '@/classes/User';
  import PaginationVue from "../components/Pagination.vue";
  import TicketVue from '../components/Ticket.vue';
  import { ref, computed } from 'vue'
  import { Tag } from '@/classes/Tag';


  var tickets =[
    
      new Ticket(1, "efdfrg","dzsdddddddddddd dssssfd", "25-04-2023 12:52",'', new User(12,"Baba"),[new User(1,"Toni"),new User(2,"Kelly")],[],[new Tag(1, "Mécanique"), new Tag(2, "Informatique"), new Tag(3, "Réseaux"),new Tag(4, "Données"),]),
      new Ticket(1, "efdfrg","dzsdddddddddddd dssssfd", "25-04-2023 12:52",'', new User(12,"Baba"),[new User(1,"Toni"),new User(2,"Kelly")],[],[new Tag(1, "Mécanique"), new Tag(2, "Informatique"), new Tag(3, "Réseaux"),new Tag(4, "Données"),]),
      new Ticket(1, "efdfrg","dzsdddddddddddd dssssfd", "25-04-2023 12:52",'26-04-2023', new User(12,"Baba"),[new User(1,"Toni"),new User(2,"Kelly")],[],[new Tag(1, "Mécanique"), new Tag(2, "Informatique"), new Tag(3, "Réseaux"),new Tag(4, "Données"),]),
      new Ticket(1, "efdfrg","dzsdddddddddddd dssssfd", "25-04-2023 12:52",'', new User(12,"Baba"),[new User(1,"Toni"),new User(2,"Kelly")],[],[new Tag(1, "Mécanique"), new Tag(2, "Informatique"), new Tag(3, "Réseaux"),new Tag(4, "Données"),]),
      new Ticket(1, "efdfrg","dzsdddddddddddd dssssfd", "25-04-2023 12:52",'', new User(12,"Baba"),[new User(1,"Toni"),new User(2,"Kelly")],[],[new Tag(1, "Mécanique"), new Tag(2, "Informatique"), new Tag(3, "Réseaux"),new Tag(4, "Données"),]),


  ]


    var is_order_down = ref(true)
    function change_order(){
        is_order_down.value = !is_order_down.value
    }
</script>

<template>
  <div class="px-20 py-10 ">

    <div class="flex flex-row justify-between" >
        <div class="text-lg md:text-xl font-bold text-dark-brown space-x-3">
          <span>{{tickets.length}} Tickets</span> 
          <span class="text-sm"><i class="fa-duotone fa-octagon"></i> 4 open </span>
          <span class="text-sm"><i class="fa-duotone fa-octagon-check"></i> 1 closed</span>
        </div>
        <div class="flex flex-row space-x-5">
            <div><i class="fa-sharp fa-solid fa-sliders"></i> Trier par</div>
            <div class="flex flex-row space-x-1 font-semibold text-center"> <span>Auteur</span> <i class="fa-solid" :class="is_order_down?'fa-sort-down':'fa-sort-up'" @click="change_order()"></i> </div>
            <div class="flex flex-row space-x-1 font-semibold text-center"> <span>Tag</span> <i class="fa-solid" :class="is_order_down?'fa-sort-down':'fa-sort-up'" @click="change_order()"></i> </div>
            <div class="flex flex-row space-x-1 font-semibold text-center"> <span>Affecté à</span> <i class="fa-solid" :class="is_order_down?'fa-sort-down':'fa-sort-up'" @click="change_order()"></i> </div>
            <div class="flex flex-row space-x-1 font-semibold text-center"> <span>Sort</span> <i class="fa-solid" :class="is_order_down?'fa-sort-down':'fa-sort-up'" @click="change_order()"></i> </div>

        </div>
    </div>

    <div class="flex flex-col px-2 pb-8 pt-10">
        <div class="grid grid-cols-1 gap-y-2 gap-x-5 md:gap-x-10">
            <TicketVue v-for="ticket in tickets" :key="ticket.id" :ticket="ticket"/>
        </div>
    </div>

    <PaginationVue/>


  </div>
</template>
