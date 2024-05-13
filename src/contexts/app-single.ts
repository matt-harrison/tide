import { createApp } from 'vue';
import { createPinia } from 'pinia';

import AppSingle from '@/apps/AppSingle.vue';
import router from '@/router';

import '@/assets/css/main.css';
import 'tide-design-system/css';
import 'tide-design-system/css/realm/rv';

const app = createApp(AppSingle);

app.use(createPinia());
app.use(router);

app.mount('#app-single');
