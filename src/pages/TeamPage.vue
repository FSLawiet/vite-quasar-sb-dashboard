<template>
  <q-page class="row items-center justify-evenly">
    <q-table :title="title" :rows="rows" :columns="columns" row-key="id" />
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mockDataTeam } from '../data/mockData.js';

export default defineComponent({
  name: 'TeamPage',
  data() {
    return {
      title: 'Team',
      rows: mockDataTeam,
      columns: [
        {
          name: 'id',
          label: 'ID',
          field: 'id',
          required: true,
          align: 'center',
          sortable: true,
        },
        {
          name: 'name',
          label: 'Name',
          field: 'name',
          required: true,
          align: 'center',
          sortable: true,
        },
        {
          name: 'email',
          label: 'Email',
          field: 'email',
          required: true,
          align: 'center',
          sortable: true,
        },
        {
          name: 'age',
          label: 'Age',
          field: 'age',
          required: true,
          align: 'center',
          sortable: true,
        },
        {
          name: 'phone',
          label: 'Phone',
          field: 'phone',
          required: true,
          align: 'center',
          sortable: true,
        },
        {
          name: 'access',
          label: 'Access Level',
          field: 'access',
          required: true,
          align: 'center',
          sortable: true,
        },
      ],
    };
  },
});
</script>
