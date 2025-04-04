import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: ()=> import('@/views/AboutPage.vue') },
    { path: '/brazil', component: ()=> import('@/views/Brazil.vue') },
    { path: '/hawaii', component: ()=> import('@/views/Hawaii.vue') },
    { path: '/jamaica', component: ()=> import('@/views/Jamaica.vue') },
    { path: '/panama', component: ()=> import('@/views/Panama.vue') },
    { path: '/:pathMatch(.*)*', component: ()=> import('@/views/NotFound.vue') },
    {path: '/destination/:id', component: ()=> import('@/views/DestinationShow.vue')},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
//2.9 create web history:
/*urls que luce normal como '/brazil'
* */

//create web hash history
/*crea hash mode '/#/brazil'
practica comun en SPA para imitar el path sin hacer configuraciones especiales del servidor
el trafico tiene un solo punto de entrada
 */

export default router;


//2.10 lazy loading: imports when it's needed, not all at the beginning
// { path: '/about', component: ()=> import('@/views/AboutPage.vue') },

//2.13 Dynamic Routes
//Route parameters o Params
