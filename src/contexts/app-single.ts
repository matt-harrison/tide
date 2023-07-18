import { createApp } from 'vue';
import { createPinia } from 'pinia';

import AppSingle from '@/apps/AppSingle.vue';
import router from '@/router';

import '@/assets/css/main.css';

const app = createApp(AppSingle);

app.use(createPinia());
app.use(router);

app.mount('#app-single');
