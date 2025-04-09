<script setup lang="ts">
import { useRouter } from 'vue-router';

const username = window.user;
const $router = useRouter();
const logout = () => {
    window.user = null;
    $router.push({ name: 'Home' });
};

</script>

<template>
    <div class="destination-show">
        <h1>Greetings {{username}}</h1>
        <button @click="logout">logout</button>
        <RouterLink :to="{name: 'invoices'}" >
            <button>Invoices</button>
        </RouterLink>
    
    </div>
</template>

<style scoped>

</style>