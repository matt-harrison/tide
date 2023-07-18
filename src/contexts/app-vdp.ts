import { createApp } from 'vue';
import { createPinia } from 'pinia';

import AppVdp from '@/apps/AppVdp.vue';
import router from '@/router';

import '@/assets/css/main.css';

const app = createApp(AppVdp);

app.use(createPinia());
app.use(router);

app.mount('#app-vdp');
