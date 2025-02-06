import './assets/main.css'

import { createApp } from 'vue'
// 전역 상태 관리 라이브러리
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css';
// And Design Vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// createApp(App).use(router).mount('#app')
const pinia = createPinia()
const app = createApp(App);

// pinia 사용
app.use(pinia)
// Ant Design Vue 사용
app.use(Antd);
app.use(router);
app.mount('#app');

// kakao login init
window.Kakao.init(import.meta.env.VITE_KAKAO_LOGIN_API_KEY);