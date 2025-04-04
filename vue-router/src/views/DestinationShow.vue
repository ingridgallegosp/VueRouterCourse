<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const $route = useRoute();

import sourceData from '../sourceData.json';

const destinationId = computed(() => {
    return parseInt($route.params.id);
});

const destination = computed(() => {
    return sourceData.destinations.find((destination) => destination.id === destinationId.value);
});
console.log('destination',destination.value)
</script>

<template>
    <section class="destination">
        <h1>{{ destination.name }}</h1>
        
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name" />
            <p>{{ destination.description }}</p>
        </div>
    </section>
</template>

<style scoped>

</style>