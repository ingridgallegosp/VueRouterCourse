<script setup lang="ts">
import sourceData from '../sourceData.json';
import { computed } from 'vue';

const props = defineProps({
    id: {
        type: Number,
        required: true,
    }
    experienceSlug: {
        type: String,
        required: true,
    }
});
const destination = computed(() => {
    return sourceData.destinations.find((destination: any) => {
        return destination.id === props.id;
    });
});
const experiences = computed(() => {
    return destination.experiences.find((experience: any) => {
        return experience.slug === props.experienceSlug;
    });
});
</script>

<template>
    <section>
        <h1>{{experience.name}}</h1>
        <img :src="`/images/${experience.image}`" :alt="experience.name">
        <p>{{experience.description}}</p>
    </section>
</template>

<style scoped>

</style>