import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// createApp(App).use(router).mount('#app')
const app = createApp(App);

// Ant Design Vue 사용
app.use(router);
app.use(Antd);
app.mount('#app');
