import { createApp } from 'vue';
import { createPinia } from 'pinia';

import AppSearchResults from '@/apps/AppSearchResults.vue';

import '@/assets/css/main.css';

const app = createApp(AppSearchResults);

app.use(createPinia());

app.mount('#app-search-results');
