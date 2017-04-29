<template>
  <div class="item">
    {{item.name}} <br>
    {{totalDuration}} <br>
    <button v-on:click="toggleDetails">{{detailsButtonLabel}}</button>
    <button>
      <router-link :to="{ name: 'workout-details', params: { id: item.id }}">Start workout!</router-link>
    </button>
    <template v-if="showDetails">
      <div v-for="round in item.rounds">
        {{round.name}} | {{round.type}} <br>
        {{round.duration}} <br>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: ['item'],
  data () {
    return {
      showDetails: false,
      detailsButtonLabel: 'View details'
    }
  },
  computed: {
    totalDuration() {
      let total = 0

      for (let i = 0; i < this.item.rounds.length; i++) {
        let round = this.item.rounds[i];
        total += round.duration;
      }

      return total
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
      if (this.showDetails) {
        this.detailsButtonLabel = 'Hide details';
      } else {
        this.detailsButtonLabel = 'Show details';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
