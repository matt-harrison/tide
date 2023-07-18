import { createApp } from 'vue';
import { createPinia } from 'pinia';

import AppSrp from '@/apps/AppSrp.vue';
import router from '@/router';

import '@/assets/css/main.css';

const app = createApp(AppSrp);

app.use(createPinia());
app.use(router);

app.mount('#app-srp');
