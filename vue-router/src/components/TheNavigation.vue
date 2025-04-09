<script setup lang="ts">
import { RouterLink } from 'vue-router';
import sourceData from '../sourceData.json';

const destinations =sourceData.destinations ;
console.log('destinations', destinations)
</script>

<template>
    <nav class="nav">
        <RouterLink id="logo" to="/">Vue Travel School</RouterLink>
        
        <RouterLink v-for="destination in destinations"
                    :key="destination.id"
                    :to="{name: 'destination.show', params: { id: destination.id, slug: destination.slug }}"
        >
            {{destination.name}}
        </RouterLink>
        
        <RouterLink :to="{name: 'protected'}">Dashboard</RouterLink>
        
    </nav>
</template>

<style scoped>

</style>