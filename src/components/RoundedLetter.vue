<script setup lang="ts">
  
import { defineProps } from "vue";
const props = defineProps({'lettre':String});
const colors =["bg-blue-900", "bg-green-900", "bg-purple-900","bg-gray-900"]


</script>
<template>
    <button class="text-4xl text-white rounded-full w-10 h-10 ease-linear transition-all duration-150 hover:shadow-lg outline-none focus:outline-none" :class="colors[Math.floor(Math.random() * 4)]">
        {{props.lettre}}
    </button>
</template>
  
