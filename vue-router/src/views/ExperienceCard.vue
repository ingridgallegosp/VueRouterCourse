<script setup lang="ts">

const props = defineProps({
    experience: {
        type: Object,
        required: true,
    }
});
</script>

<template>
        <div class="card">
            <img :src="`/images/${experience.image}`" alt="experience.name"/>
            <p class="card__text">{{ experience.name }}</p>
        </div>
</template>

<style scoped>

</style>