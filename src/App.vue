<script setup>
  // import ButtonClick from "./components/ButtonClick.vue"
  import InputConversie from "./components/InputConversie.vue"
  
  import { ref } from 'vue'

  const total = ref(null);
  function conversion(value) {
     total.value = value * 4.9750;
  }
</script>

<template>
  <!-- <ButtonClick v-for="buttons in Array(5)" /> -->
   <!-- <ButtonClick :startCount="7" />
   <ButtonClick :startCount="5" />
   <ButtonClick :startCount="3" /> -->
   <InputConversie 
     :labelInput="'Suma pe care dorești sa o schimbi'"
     :currency="'EUR'"
     :disabled="false" 
     @inputValue="conversion" />
   <br />
   <InputConversie 
     :labelInput="'Valoare'" 
     :currency="'RON'" 
     :disabled="true"
     :total="total" />

</template>