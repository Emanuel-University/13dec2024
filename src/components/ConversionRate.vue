<script setup>
const props = defineProps(['changeAmount'])
const emit = defineEmits(['doConversion'])

import { ref, watch } from 'vue';

const conversionRate = ref('4.9740')
const rateColor = ref('gray')
watch(() => props.changeAmount, (newAmount) => {
    if (newAmount > 100000) {
        conversionRate.value = '4.9780';
        rateColor.value = 'red'
    } else
        if (newAmount > 10000) {
            conversionRate.value = '4.9770';
            rateColor.value = 'blue'
        } else
            if (newAmount > 1000) {
                conversionRate.value = '4.9760';
                rateColor.value = 'yellow'
            } else
                if (newAmount > 100) {
                    conversionRate.value = '4.9750';
                    rateColor.value = 'green'
                } else {
                    conversionRate.value = '4.9740';
                    rateColor.value = 'gray'
                }

    emit("doConversion", conversionRate.value);
})

</script>

<template>
    <div class="conversion-value" :style="'background-color: ' + rateColor">
        {{ conversionRate }}
    </div>
</template>

<style>
.conversion-value {
    display: flex;
    justify-content: center;
    align-self: center;
    margin: 2rem 0;
    padding: 0.5rem;
    background-color: gray;
    border-color: black;
    border-radius: 2rem;
    border-width: 2px;
}
</style>