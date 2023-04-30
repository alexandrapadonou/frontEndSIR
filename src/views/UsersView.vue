<script setup lang="ts">
    import UserVue from '../components/User.vue'
    import PaginationVue from "../components/Pagination.vue";
    import { ref, computed } from 'vue'
    import NewUserTagModal from '../components/NewUserTagModal.vue'

    import { UserStore } from "@/stores/user"
    import { User } from '@/classes/User';
    import { plainToClass } from "class-transformer";

    const userStore = UserStore();

    userStore.getAll()
    const users = computed(()=>userStore.getusers );

    // order 1 = asc; 0 = desc
    var filterBy = ref({"name":"", "order":1})

    var is_order_down = ref(true)
    function change_order(){
        is_order_down.value = !is_order_down.value
        filterBy.value.order=Math.abs(filterBy.value.order-1)
    }
    
</script>
<template>
    <div class="px-20 py-10 ">

        <div class="flex flex-row justify-between" >
            <div class="text-md md:text-xl font-bold text-dark-brown">{{users.length}} Utilisateurs</div>
            <div class="flex flex-row space-x-5 text-sm md:text-md items-baseline">
                <div><i class="fa-sharp fa-solid fa-sliders"></i> Filtrer par</div>
                <div class="flex flex-row space-x-1 font-semibold text-center"> <span>Nom</span> <i class="fa-solid" :class="is_order_down?'fa-sort-down':'fa-sort-up'" @click="change_order()"></i> </div>
                <div>
                    <input type="text" v-model="filterBy.name" class="bg-gray-200 rounded-xl px-2 py-1">
                </div>
            </div>
            
        </div>

        <div class="flex justify-end pt-10">
            <NewUserTagModal  :type="'user'" />
        </div>

        

        <div class="flex flex-col px-2 pb-8 ">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-5 md:gap-x-10">
                <UserVue v-for="user in users" :key="user.id" :user="plainToClass(User, user)"/>
            </div>
        </div>

        <PaginationVue/>

        
    </div>
</template>