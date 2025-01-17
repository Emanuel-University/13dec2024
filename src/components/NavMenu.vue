<script setup>
</script>

<template>
    <nav>
        <RouterLink :to="{ name: 'homepage' }">Homepage</RouterLink>
        <RouterLink :to="{ name: 'conversion' }">Conversion</RouterLink>
    </nav>
</template>

<style>
 .router-link-active {
    color: red;
 }
</style>