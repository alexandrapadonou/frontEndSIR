<script setup lang="ts">
    import TagVue from '../components/Tag.vue'
    import PaginationVue from "../components/Pagination.vue";
    import { ref, computed } from 'vue'
    import { Tag } from '@/classes/Tag';

    var tags =[
        new Tag(1, "Mécanique"), new Tag(2, "Informatique"), new Tag(3, "Réseaux"),new Tag(4, "Données"),
        new Tag(1, "Mécanique"), new Tag(2, "Informatique"), new Tag(3, "Réseaux"),new Tag(4, "Données"),
        new Tag(1, "Mécanique"), new Tag(2, "Informatique"), new Tag(3, "Réseaux"),new Tag(4, "Données"),
        new Tag(1, "Mécanique"), new Tag(2, "Informatique"), new Tag(3, "Réseaux"),new Tag(4, "Données"),
        new Tag(1, "Mécanique"), new Tag(2, "Informatique"), new Tag(3, "Réseaux"),new Tag(4, "Données")
    ]

    var is_order_down = ref(true)
    function change_order(){
        is_order_down.value = !is_order_down.value
    }
    
</script>
<template>
    <div class="px-20 py-10 ">

        <div class="flex flex-row justify-between" >
            <div class="text-lg md:text-xl font-bold text-dark-brown">{{tags.length}} Tags</div>
            <div class="flex flex-row space-x-5">
                <div><i class="fa-sharp fa-solid fa-sliders"></i> Trier par</div>
                <div class="flex flex-row space-x-1 font-semibold text-center"> <span>Nom</span> <i class="fa-solid" :class="is_order_down?'fa-sort-down':'fa-sort-up'" @click="change_order()"></i> </div>
            </div>
        </div>

        <div class="flex flex-col px-2 pb-8 pt-10">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-5 md:gap-x-10">
                <TagVue v-for="tag in tags" :key="tag.id" :tag="tag"/>
            </div>
        </div>

        <PaginationVue/>

        
    </div>
</template>