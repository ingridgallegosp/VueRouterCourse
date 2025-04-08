import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import sourceData from '../sourceData.json';

const routes = [
    { path: '/', component: HomePage },
    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: ()=> import('../views/DestinationShow.vue'),
        props: (route) => ({...route.params, id: parseInt(route.params.id)}),
        //nav guard recibes a to parameter and from parameter - navigated to and navigate away from
        //comparing with sourceData
        beforeEnter: (to, from) => {
            const exists = sourceData.destinations.find(destination => destination.id === parseInt(to.params.id));
            if(!exists) return { name: 'NotFound' }
        },
        children: [
            {
                path: ':experienceSlug',
                name: 'experience.show',
                component: ()=> import('../views/ExperienceShow.vue'),
                props: (route) => ({...route.params, id: parseInt(route.params.id)}),
            },
        ]
    },
    { path: '/:pathMatch(.*)*', name:'NotFound', component: ()=> import( '../views/NotFound.vue') },
    //navigation guard
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    //scroll behavior
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0};
    }
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

//2.14  Named routes
//name property

//2.15 Params Changes



