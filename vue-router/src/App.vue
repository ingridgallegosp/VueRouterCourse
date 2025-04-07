<script setup lang="ts">
import TheNavigation from './components/TheNavigation.vue';
</script>

<template>
    <TheNavigation />
    <div class="container">
        <RouterView v-slot="{Component}">
						<Transition name="fade" mode="out-in">
								<Component :is="Component" :key="$route.path" />
						</Transition>
				</RouterView>
    </div>
</template>
<!--Transition usado dentro del router view en vue 3 y anida al componente para que renderice correctamente.
En vue 2 Transition puede envolver al Router view-->
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-form,
.fade-leave-to {
    opacity: 0;
   /* transform: translateX(-30%);*/
}
</style>