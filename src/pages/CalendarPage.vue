<template>
  <q-page class="row items-center justify-evenly">
    <Calendar is-expanded :is-dark="$q.dark.mode ? true : false" />
  </q-page>
</template>
<script lang="ts">
import { Calendar } from 'v-calendar';
import 'v-calendar/dist/style.css';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CalendarPage',
  components: {
    Calendar,
  },
  data() {
    return {
      date: new Date(),
    };
  },
});
</script>
