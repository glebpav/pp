import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import AuthPage from "@/pages/AuthPage";


const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/auth',
        component: AuthPage,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;