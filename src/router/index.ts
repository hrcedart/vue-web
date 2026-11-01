import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../paginae/domus/Domus.vue";
import Batman from "../paginae/batman/Batman.vue";
import Primus from "../paginae/simpsons/Primus.vue";
import Responum from "../paginae/responsum/Responsum.vue";
import Layout from "@/paginae/simpsons/Layout.vue";
import Circa from "@/paginae/simpsons/Circa.vue";
import Collectione from "@/paginae/simpsons/Collectione.vue";
import Character from "@/paginae/simpsons/Character.vue";

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
            children: [
             {
                 path: '', // /simpsons
                 name: 'simpsons',
                 component: Primus
             },
             {
                 path: 'about', 
                 component: Layout, 
                 children: [
                        {
                            path: '', // /simpsons/about
                            name: 'simpsons-about',
                            component: Circa
                        }
                    ]
             },
             {
                 path: 'gallery', 
                 component: Layout, 
                 children: [
                        {
                            path: '', // /simpsons/gallery
                            name: 'simpsons-characters',
                            component: Collectione
                        },
                        {
                            path: ':id', // /simpsons/gallery/23
                            name: 'simpsons-character',
                            component: Character
                        }
                    ]
             },
            ]
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