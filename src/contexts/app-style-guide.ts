import { createApp } from 'vue';
import { createPinia } from 'pinia';

import AppStyleGuide from '@/apps/AppStyleGuide.vue';
import router from '@/router';

import '@/assets/css/main.css';

const app = createApp(AppStyleGuide);

app.use(createPinia());
app.use(router);

app.mount('#app-style-guide');
