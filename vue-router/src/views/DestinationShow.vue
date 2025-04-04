<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const $route = useRoute();

import sourceData from '../sourceData.json';

//const destination = ref<any[]>([]);

const destinationId = computed(() => {
    return parseInt($route.params.id);
});

const destination = computed(() => {
    return sourceData.destinations.find((destination) => destination.id === destinationId.value);
});

/*const fetchData =async()=>{
    try {
        const response = await fetch(`https://travel-dummy-api.netlify.app/${$route.params.slug}`);
        destination.value = await response.json();
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}
// en lugar del watch odemos colocar un :key="$router.path" para re renderizar cada vez que el path cambie
watch(() => $route.params.slug, async (newSlug) => {
    if (newSlug) {
        await fetchData();
    }
}, { immediate: true });*/
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