<script setup lang="ts">
    import TagVue from '../components/Tag.vue'
    import PaginationVue from "../components/Pagination.vue";
    import { ref, computed } from 'vue'
    import { Tag } from '@/classes/Tag';
    import NewUserTagModal from '../components/NewUserTagModal.vue'
    
    import { TagStore } from "@/stores/tag"
    import { plainToClass } from "class-transformer";

    const tagStore = TagStore();

    tagStore.getAll()
    const tags = computed(()=>tagStore.getTags );


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
            <div class="text-lg md:text-xl font-bold text-dark-brown">{{tags.length}} Tags</div>
            <div class="flex flex-row space-x-5 text-sm md:text-md items-baseline">
                <div><i class="fa-sharp fa-solid fa-sliders"></i> Filtrer par</div>
                <div class="flex flex-row space-x-1 font-semibold text-center"> <span>Label</span> <i class="fa-solid" :class="is_order_down?'fa-sort-down':'fa-sort-up'" @click="change_order()"></i> </div>
                <div>
                    <input type="text" v-model="filterBy.name" class="bg-gray-200 rounded-xl px-2 py-1">
                </div>
            </div>
        </div>

        <div class="flex justify-end pt-10">
            <NewUserTagModal  :type="'tag'" />
        </div>

        <div class="flex flex-col px-2 pb-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-5 md:gap-x-10">
                <TagVue v-for="tag in tags" :key="tag.id" :tag="plainToClass(Tag, tag)"/>
            </div>
        </div>

        <PaginationVue/>

        
    </div>
</template>