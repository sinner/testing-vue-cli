<template>
  <div class="event-card-container">
    <v-card
    class="mx-auto event-card"
    hover
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div>
            <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
          </div>
          <v-list-item-title class="headline mb-1">
            {{ event.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <span>
              <v-icon>fa-groups</v-icon>
              {{ event.attendees.length }} attending
            </span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'event-card',
  data() {
    return {
      event: {
        id: 1,
        title: 'Beach Cleanup',
        date: 'Tue May 15 2018',
        time: '6:00',
        attendees: [
          { id: 'abc123', name: 'Adam Jahr' },
          { id: 'def456', name: 'Gregg Pollack' },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
  text-align: left;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
