<script setup lang="ts">
  import { Ticket } from '@/classes/Ticket';
  import { User } from '@/classes/User';
  import TicketListVue from '../components/TicketList.vue';


  var tickets =[
    
      new Ticket(1, "efdfrg","dzsdddddddddddd dssssfd", "25-04-2023 12:52",'', new User(12,"Baba"))

  ]
</script>

<template>
  <main>
    <TicketListVue :tickets="tickets"/>
  </main>
</template>
