<script setup lang="ts">
import sourceData from '@/sourceData.json';
import { RouterLink } from 'vue-router';

const destinations =sourceData.destinations ;
console.log(destinations);

</script>

<template>
    <div class="home">
        <h1>All Destinations</h1>
        <div class="destinations">
        <RouterLink v-for="destination in destinations"
        :key="destination.id"
                    :to="`/${destination.slug}`"
        >
            <h2>{{destination.name}}</h2>
            <img :src="`/images/${destination.image}`" alt="destination.name" />
        </RouterLink>
        </div>
    </div>
</template>

<style scoped>

</style>