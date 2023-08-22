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
      component: () => import('@/pages/SearchResultsPage.vue'),
      name: 'aircraft-for-sale',
      path: '/aircraft-for-sale',
    },
    {
      component: () => import('@/pages/SearchResultsPage.vue'),
      name: 'atvs-for-sale',
      path: '/atvs-for-sale',
    },
    {
      component: () => import('@/pages/SearchResultsPage.vue'),
      name: 'boats-for-sale',
      path: '/boats-for-sale',
    },
    {
      component: () => import('@/pages/SearchResultsPage.vue'),
      name: 'motorcycles-for-sale',
      path: '/motorcycles-for-sale',
    },
    {
      component: () => import('@/pages/SearchResultsPage.vue'),
      name: 'equipment-for-sale',
      path: '/equipment-for-sale',
    },
    {
      component: () => import('@/pages/SearchResultsPage.vue'),
      name: 'jet-skis-for-sale',
      path: '/jet-skis-for-sale',
    },
    {
      component: () => import('@/pages/SearchResultsPage.vue'),
      name: 'rvs-for-sale',
      path: '/rvs-for-sale',
    },
    {
      component: () => import('@/pages/SearchResultsPage.vue'),
      name: 'snowmobiles-for-sale',
      path: '/snowmobiles-for-sale',
    },
    {
      component: () => import('@/pages/SearchResultsPage.vue'),
      name: 'trucks-for-sale',
      path: '/trucks-for-sale',
    },
    {
      component: () => import('@/pages/StyleGuidePage.vue'),
      name: 'style-guide-page',
      path: '/style-guide',
    },
    {
      component: () => import('@/pages/VehicleDetailPage.vue'),
      name: 'vehicle-detail-page',
      path: '/listing',
    },
  ],
});

export default router;
