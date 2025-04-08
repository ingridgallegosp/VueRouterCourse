<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const $route = useRoute();
const $router = useRouter();

import sourceData from '../sourceData.json';
import ExperienceCard from './ExperienceCard.vue';
import GoBack from "@/components/GoBack.vue";

//const destination = ref<any[]>([]);

const destinationId = computed(() => {
    return parseInt( $route.params.id as string);
});

const destination = computed(() => {
    return sourceData.destinations.find((destination) => destination.id === destinationId.value);
});
console.log('destination', destination.value);

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
		<section>
				<section class="destination">
					<GoBack />
					<h1>{{ destination?.name }}</h1>
						<div class="destination-details">
								<img :src="`/images/${destination?.image}`" :alt="destination?.name" />
								<p>{{ destination?.description }}</p>
						</div>
				</section>
				
				<section class="experiences">
						<h2>Top Experiences in {{destination?.name}}</h2>
						<div class="cards">
								<RouterLink :key="experience.slug" v-for="experience in destination?.experiences"
														:to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }"
														class="card-link">
										<ExperienceCard :experience="experience" />
								</RouterLink>
						</div>
                    <RouterView />
				</section>
		</section>
</template>

<style scoped>

</style>