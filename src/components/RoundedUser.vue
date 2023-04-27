<script setup lang="ts">
    const colors =["text-blue-900", "text-green-900", "text-purple-900","text-gray-900"]
</script>
<template>
    <button class="text-5xl md:text-6x w-10 h-10 ease-linear transition-all duration-150 hover:shadow-lg outline-none focus:outline-none" :class="colors[Math.floor(Math.random() * 4)]">
        <i class="fa-solid fa-user"></i> 
    </button>
</template>
  
