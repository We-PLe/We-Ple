import { createRouter, createWebHistory } from 'vue-router';

// 페이지 컴포넌트 임포트
import Main from '@/views/Main.vue';
import Account from '@/views/Account.vue';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
    },
    {
        path: '/account',
        name: 'Account',
        component: Account,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;