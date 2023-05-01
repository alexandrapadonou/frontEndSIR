<script setup lang="ts">
  import { ref, defineProps, computed } from "vue";
  import { UserStore } from "@/stores/user"
  import { TagStore } from "@/stores/tag"

  const userStore = UserStore();
  const tagStore = TagStore();

  const show = ref(false);
  const props = defineProps({type:String});
  const value = ref("");
  const label = props.type=="tag"?"Label":"Nom";

  const errors = computed(() => { 
    return props.type == "user" ? userStore.errors:tagStore.errors; 
  }) 



  function validateFields() {
    if(value.value  == null || value.value == ""){
      return false;
    }
  }


async function store() {
  if(props.type == "user"){
      userStore.errors =""
      if(validateFields() === false){
        userStore.errors = "Le champ est requis !";
      }
      else{
          await userStore.store({
          "name":value.value
        })
      }

      if(userStore.errors == ""){
          value.value="";
          toggleModal();
      }
  }
  else{
    tagStore.errors =""
      if(validateFields() === false){

        tagStore.errors = "Le champ est requis !";
      }

      else{
        await tagStore.store({
            "label":value.value
          },
        )
      }

      if(tagStore.errors == ""){
          value.value="";
          toggleModal();
      }
  }
  
    
}

function toggleModal() {
  show.value = !show.value;
}




</script>

<template>
  <div class="text-xl">
    <i v-if="props.type=='user'" class="fa-duotone fa-user-plus fa-beat text-blue-900 cursor-pointer font-bold" @click="toggleModal" :title="'Ajouter un nouvel ' + label"></i>
    <div v-else class="text-blue-900 cursor-pointer font-bold space-x-1"  @click="toggleModal" :title="'Ajouter un nouvel ' + label">
      <i  class="fa-thin fa-plus fa-beat text-sm"></i>
      <i class="fa-light fa-tag fa-beat"></i>
    </div>

  </div>
  <div
    v-if="show"
    id="popup"
    class="z-50 fixed w-full flex justify-center inset-0 bg-transparent"
  >
    <div
      @click="toggleModal()"
      class="w-full h-full bg-black bg-opacity-40 absolute inset-0"
    ></div>
    <div class="flex items-center justify-center h-full w-full ">
      <div
        class=" bg-white text-white rounded-lg shadow fixed h-auto w-auto px-4 md:px-20 md:py-10"
      >
        <div class="flex flex-row">
          <i class="fa-regular fa-xmark fixed absolute right-5 top-5 text-black text-xl font-bold cursor-pointer" @click="toggleModal()"></i>
        </div>
        <div class="">
          
            <form @submit.prevent="store" class="flex flex-col items-center justify-center">

                <p class="text-black text-sm md:text-lg font-bold">Nouveau {{ props.type }}</p>
                <div class="flex flex-col text-red-300 text-center tracking-wider">
                    <p 
                        class="text-sm md:text-md font-normal py-2"
                        v-if="errors"
                    >
                        {{ errors }}
                    </p>
                </div>
            

                <div class="mt-6 w-full text-black flex flex-col">
                    <label class="text-md font-normal leading-none "> {{label}}</label>
                    <input
                        v-model="value"
                        :aria-label="'Entrer ' + label "
                        role="input"
                        type="text"
                        :placeholder="'Entrer ' + label "
                        class="tracking-wider poppins bg-white border border-black rounded-lg focus:outline-none text-sm font-medium leading-none py-3 w-full pl-3 mt-2"
                    />
                </div>

            
                <div class="flex items-center justify-center w-full mt-7 mb-2">
                    <button
                        type="submit"
                        aria-label="add user"
                        role="button"
                        class="focus:ring-2 focus:ring-offset-2 focus:ring-orange-900 focus:outline-none px-6 py-3 bg-orange-800 hover:bg-opacity-80 shadow rounded-xl md:text-md text-sm text-white w-full font-bold"
                    >
                        Ajouter
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>