import { createRouter, createWebHistory } from 'vue-router';

// 페이지 컴포넌트 임포트
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;