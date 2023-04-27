<script setup lang="ts">
    import UserVue from '../components/User.vue'
    import PaginationVue from "../components/Pagination.vue";
    import { ref, computed } from 'vue'
    import { User } from '@/classes/User';

    var users =[
        new User(1,"Kelly"), new User(1,"Baké"), new User(1,"Toni"), new User(1,"Momo"),new User(1,"Baba"),
        new User(1,"Kelly"), new User(1,"Baké"), new User(1,"Toni"), new User(1,"Momo"),new User(1,"Baba"),
        new User(1,"Kelly"), new User(1,"Baké"), new User(1,"Toni"), new User(1,"Momo"),new User(1,"Baba"),
        new User(1,"Kelly"), new User(1,"Baké"), new User(1,"Toni"), new User(1,"Momo"),new User(1,"Baba"),
        new User(1,"Kelly"), new User(1,"Baké"), new User(1,"Toni"), new User(1,"Momo"),new User(1,"Baba"),

    ]

    var is_order_down = ref(true)
    function change_order(){
        is_order_down.value = !is_order_down.value
    }
    
</script>
<template>
    <div class="px-20 py-10 ">

        <div class="flex flex-row justify-between" >
            <div class="text-md md:text-xl font-bold text-dark-brown">{{users.length}} Utilisateurs</div>
            <div class="flex flex-row space-x-5 text-sm md:text-xl">
                <div><i class="fa-sharp fa-solid fa-sliders"></i> Trier par</div>
                <div class="flex flex-row space-x-1 font-semibold text-center"> <span>Nom</span> <i class="fa-solid" :class="is_order_down?'fa-sort-down':'fa-sort-up'" @click="change_order()"></i> </div>
            </div>
        </div>

        <div class="flex flex-col px-2 pb-8 pt-10">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-5 md:gap-x-10">
                <UserVue v-for="user in users" :key="user.id" :user="user"/>
            </div>
        </div>

        <PaginationVue/>

        
    </div>
</template>