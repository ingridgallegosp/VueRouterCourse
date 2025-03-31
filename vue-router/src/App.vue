<script setup lang="ts">
</script>

<template>
    <nav class="nav">
        <router-link to="/">Inicio</router-link>
        <router-link to="/brazil">Brazil</router-link>
        <router-link to="/jamaica">Jamaica</router-link>
        <router-link to="/hawaii">Hawaii</router-link>
    
    </nav>
    <div class="container">
        <router-view />
    </div>
</template>


