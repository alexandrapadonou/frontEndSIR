<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/template/TheHeader.vue'
import Footer from './components/template/TheFooter.vue'
</script>

<template>
  
  <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black space-y-3 overflow-x-hidden">
        <Header class="my-5 px-6 md:px-8 w-full"/>
        <RouterView  class="mb-5 px-6 md:px-8 w-full"/>
        <Footer class="my-5 px-6 md:px-8 w-full"/>

  </div>

</template>

