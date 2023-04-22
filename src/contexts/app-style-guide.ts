import { createApp } from 'vue';
import { createPinia } from 'pinia';

import AppStyleGuide from '@/apps/AppStyleGuide.vue';

import '@/assets/css/main.css';

const app = createApp(AppStyleGuide);

app.use(createPinia());
app.mount('#app-style-guide');
