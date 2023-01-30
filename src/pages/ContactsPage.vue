<template>
  <q-page class="row items-center justify-evenly"
    ><h1>{{ title }}</h1></q-page
  >
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactsPage',
  data() {
    return {
      title: 'Contacts',
    };
  },
});
</script>
