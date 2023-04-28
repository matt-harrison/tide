import { createApp } from 'vue';
import { createPinia } from 'pinia';

import AppSearchResults from '@/apps/AppSearchResults.vue';
import router from '@/router';

import '@/assets/css/main.css';

const app = createApp(AppSearchResults);

app.use(createPinia());
app.use(router);

app.mount('#app-search-results');
