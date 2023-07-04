import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue'),
    },
    {
        path: '/message',
        name: 'Message',
        component: () => import('../views/Message.vue'),
    },
    {
        path: '/shop',
        name: 'Shop',
        component: () => import('../views/Shop.vue'),
    },
    {
        path: '/helpdesk',
        name: 'Helpdesk',
        component: () => import('../views/Helpdesk.vue'),
    },
    {
        path: '/child/home',
        name: 'Child Home',
        component: () => import('../views/child/Home.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
