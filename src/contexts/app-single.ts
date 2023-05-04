import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import AppSingle from '@/apps/AppSingle.vue';
import router from '@/router';
import { icons } from '@/config/icons.config';

import '@/assets/css/main.css';

library.add(...icons);

const app = createApp(AppSingle);

app.component('FontAwesomeIcon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount('#app-single');
