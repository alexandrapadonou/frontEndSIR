<script setup lang="ts">
  
import { ref, defineProps, computed } from "vue";
const props = defineProps({'lettre':String});
const colors =["bg-blue-900", "bg-green-900", "bg-purple-900","bg-dark-brown"]

const btnDropdownRef = ref(null);



</script>
<template>
    <button class="text-2xl text-white rounded-full w-10 h-10 ease-linear transition-all duration-150 hover:shadow-lg outline-none focus:outline-none" :class="colors[Math.floor(Math.random() * 4)]" @click="toggleDropdown()" ref="btnDropdownRef">
        {{lettre}}
    </button>
 
</template>
  
