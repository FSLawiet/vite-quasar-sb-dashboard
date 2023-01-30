<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Dashboard </q-toolbar-title>

        <q-btn
          @click="$q.dark.toggle()"
          :icon="$q.dark.mode === true ? 'light_mode' : 'dark_mode'"
        />
        <q-btn icon="notifications" />
        <q-btn icon="settings" />
        <q-btn icon="person" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Dashboard </q-item-label>
        <RoutingLink
          v-for="link in routeLinks"
          :key="link.title"
          v-bind="link"
        />
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';
import EssentialLink from 'components/EssentialLink.vue';
import RoutingLink from 'components/RoutingLink.vue';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
];
const routesList = [
  {
    title: 'Home',
    caption: '',
    icon: 'dashboard',
    link: '/',
  },
  {
    title: 'Team',
    caption: '',
    icon: 'people',
    link: '/team',
  },
  {
    title: 'Contacts',
    caption: '',
    icon: 'contacts',
    link: '/contacts',
  },
  {
    title: 'Invoices',
    caption: '',
    icon: 'receipt',
    link: '/invoices',
  },
  {
    title: 'Form',
    caption: '',
    icon: 'person',
    link: '/form',
  },
  {
    title: 'Bar',
    caption: '',
    icon: 'bar_chart',
    link: '/bar',
  },
  {
    title: 'Line',
    caption: '',
    icon: 'timeline',
    link: '/line',
  },
  {
    title: 'Pie',
    caption: '',
    icon: 'pie_chart',
    link: '/pie',
  },
  {
    title: 'FAQ',
    caption: '',
    icon: 'help',
    link: '/faq',
  },
  {
    title: 'Geography',
    caption: '',
    icon: 'map',
    link: '/geo',
  },
  {
    title: 'Calendar',
    caption: '',
    icon: 'calendar_month',
    link: '/calendar',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    RoutingLink,
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksList,
      routeLinks: routesList,
    };
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
  created() {
    const $q = useQuasar();

    if (localStorage.getItem('darkmode') === true) {
      $q.dark.set(true);
    } else if (
      localStorage.getItem('darkmode') !== true &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      $q.dark.set(true);
      localStorage.setItem('darkmode', true);
    } else {
      $q.dark.set(false);
      localStorage.setItem('darkmode', false);
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        if (event.matches) {
          $q.dark.set(true);
          localStorage.setItem('darkmode', true);
        } else {
          $q.dark.set(false);
          localStorage.setItem('darkmode', false);
        }
      });
  },
});
</script>
<style>
.header {
  background-color: var(--q-primary-400);
}
</style>
