import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../paginae/domus/Domus.vue";
import Batman from "../paginae/batman/Batman.vue";
import Simpsons from "../paginae/simpsons/Simpsons.vue";
import Responum from "../paginae/responsum/Responsum.vue";

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/',
            name: '',
            component: Domus,
        },
        {
            path: '/batman',
            name: 'batman',
            component: Batman
        },
        {
            path: '/simpsons',
            name: 'simpsons',
            component: Simpsons
        },
        {
            path: '/indecision',
            name: 'indecision',
            component: Responum
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }

    ]
})