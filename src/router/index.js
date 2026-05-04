import { createRouter, createWebHashHistory } from "vue-router"; 

import HomeView from "@/views/HomeView.vue";
import AlimentosView from "@/views/AlimentosView.vue";
import HigieneView from "@/views/HigieneView.vue";
import BrinquedosView from "@/views/BrinquedosView.vue";
import AcessoriosView from "@/views/AcessoriosView.vue";


const routes = [
    { path: '/', component: HomeView },
    { path: '/alimentos', component: AlimentosView },
    { path: '/Higiene', component: HigieneView},
    { path: '/Brinquedos', component: BrinquedosView},
    { path: '/Acessorios', component: AcessoriosView}
]


const router = createRouter ({
history: createWebHashHistory(),
routes,
})

export default router