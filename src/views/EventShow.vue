<template>
  <v-container class="event-show-container">
      Show Event #{{ id }}
  </v-container>
</template>

<script>
export default {
  name: 'event-show',
  props: ['id'],
};
</script>

<style lang="scss" scoped>

</style>
