import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import Brazil from '../views/Brazil.vue';
import Hawaii from '../views/Hawaii.vue';
import Jamaica from '../views/Jamaica.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/brazil', component: Brazil },
    { path: '/hawaii', component: Hawaii },
    { path: '/jamaica', component: Jamaica },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;