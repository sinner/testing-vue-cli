<template>
  <v-container class="event-list-container">
    <event-card></event-card>
  </v-container>
</template>

<script>
import EventCard from '@/components/EventCard.vue';

export default {
  components: {
    EventCard,
  },
};
</script>

<style lang="scss" scoped>

</style>
