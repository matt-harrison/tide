import { createApp } from 'vue';
import { createPinia } from 'pinia';

import AppCarousel from '@/apps/AppCarousel.vue';
import router from '@/router';

import '@/assets/css/main.css';

const app = createApp(AppCarousel);

app.use(createPinia());
app.use(router);

app.mount('#app-carousel');
