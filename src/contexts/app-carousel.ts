import { createApp } from 'vue';
import { createPinia } from 'pinia';

import AppCarousel from '@/apps/AppCarousel.vue';

import '@/assets/css/main.css';

const app = createApp(AppCarousel);

app.use(createPinia());
app.mount('#app-carousel');
