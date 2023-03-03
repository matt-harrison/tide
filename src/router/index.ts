import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      alias: '/',
      component: HomePage,
      name: 'home',
      path: '/app-single.html',
    },
    {
      component: () => import('../pages/SearchResultsPage.vue'),
      name: 'search-results-page',
      path: '/rvs-for-sale',
    },
    {
      component: () => import('../pages/StyleGuidePage.vue'),
      name: 'style-guide-page',
      path: '/style-guide',
    },
    {
      component: () => import('../pages/VehicleDetailPage.vue'),
      name: 'vehicle-detail-page',
      path: '/listing',
    },
  ],
});

export default router;
