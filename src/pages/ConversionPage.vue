<script setup>
import NavMenu from '../components/NavMenu.vue';

import InputConversie from "../components/InputConversie.vue"
import ConversionRate from "../components/ConversionRate.vue"

import { ref } from 'vue'

const total = ref(0);
const changeAmount = ref(0);

function inputAmount(value) {
  changeAmount.value = value;
}

function conversion(rate) {
  total.value = changeAmount.value * rate;
}
</script>

<template>
    <NavMenu />

    <div class="conversion-line">
        <InputConversie :labelInput="'Suma pe care dorești sa o schimbi'" :currency="'EUR'" :disabled="false"
            @inputValue="inputAmount" />
        <ConversionRate :changeAmount="changeAmount" @doConversion="conversion" />
        <InputConversie :labelInput="'Valoare'" :currency="'RON'" :disabled="true" :total="total" />
    </div>
</template>

<style scoped>
.conversion-line {
  display: flex;
}
</style>