<!-- eslint-disable vue/multi-word-component-names -->

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    

    <div class="relative">
        <img src="../assets/img/banner.jpg" class="max-w-full h-auto rounded-xl opacity-75" alt="banner image" />
        <div class="flex flex-col space-y-4 absolute top-2/3 left-1/2 md:left-1/2 -translate-x-3/4 -translate-y-2/3 w-full md:w-3/5"> 
            <p class="text-center text-md md:text-3xl lg:text-4xl text-white text-dark-brown font-bold">
              Bienvenu dans votre gestionnaire d'issues préféré
            </p>
            <div>
                <p class="mt-2 text-xs md:text-sm ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <RouterLink to="/tickets" class="text-xs md:text-sm text-[#5A240C] underline"> Voir les tickets </RouterLink>
            </div>
        </div>
    </div> 
</template>
