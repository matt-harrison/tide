import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/apps/AppSingle.vue';
import router from '@/router';

import '@/assets/css/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app-single');
