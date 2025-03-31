import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import Brazil from '../views/Brazil.vue';
import Hawaii from '../views/Hawaii.vue';
import Jamaica from '../views/Jamaica.vue';
import Panama from '../views/Panama.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/brazil', component: Brazil },
    { path: '/hawaii', component: Hawaii },
    { path: '/jamaica', component: Jamaica },
    { path: '/panama', component: Panama },
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


