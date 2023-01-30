import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'team', component: () => import('pages/TeamPage.vue') },
      { path: 'contacts', component: () => import('pages/ContactsPage.vue') },
      { path: 'invoices', component: () => import('pages/InvoicesPage.vue') },
      { path: 'form', component: () => import('pages/FormPage.vue') },
      { path: 'bar', component: () => import('pages/BarPage.vue') },
      { path: 'line', component: () => import('pages/LinePage.vue') },
      { path: 'pie', component: () => import('pages/PiePage.vue') },
      { path: 'faq', component: () => import('pages/FaqPage.vue') },
      { path: 'geo', component: () => import('pages/GeoPage.vue') },
      { path: 'calendar', component: () => import('pages/CalendarPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
