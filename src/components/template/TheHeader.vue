<script setup lang="ts"> 
import { RouterLink } from "vue-router";

</script>


<template>

    <header 
        class="flex justify-between z-50 w-screen space-x-6"
        >

        <RouterLink to="/" class="text-xs md:text-lg font-medium hover:border-b-2 text-gray-800 hover:border-gray-800 poppins"
            >  <i class="fa-brands fa-resolving">Issues</i>
        </RouterLink>

        <div class="flex items-center space-x-2 md:space-x-6 text-xs md:text-sm">
            <RouterLink to="/" class="hover:border-b-2 text-gray-800 hover:border-gray-800 poppins"
            ><i class="fa-light fa-house-blank fa-bounce"></i> Accueil</RouterLink>

            <RouterLink to="/tickets" class="hover:border-b-2 text-gray-800 hover:border-gray-800 poppins"
                > <i class="fa-sharp fa-light fa-list-check fa-beat"></i> Tickets</RouterLink>

            <RouterLink to="/tags" class="hover:border-b-2 text-gray-800 hover:border-gray-800 poppins"
                > <i class="fa-sharp fa-light fa-tags fa-flip"></i> Tags</RouterLink>
            
            <RouterLink to="/users" class="hover:border-b-2 text-gray-800 hover:border-gray-800 poppins"
                > <i class="fa-light fa-user fa-beat-fade"></i> Utilisateurs </RouterLink>
        </div>
      
    </header>
</template>