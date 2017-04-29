<template>
  <div class="Workout">
    <div class="Workout Workout-name">{{currentTimer.name}}</div>
    <div class="Workout Workout-duration">{{currentTimer.duration}}</div>
    <div v-if="isPlaying" class="Workout Workout-total-left">{{totalLeft}}</div>
    <button v-on:click="togglePlay">Start workout</button>
    <div class="round" v-for="round in currentTimer.rounds">
      {{round.name}} | {{round.type}} | {{round.duration}}
      <p v-if="isPlaying && currentRound && currentRound.id === round.id">{{currentRoundLeft}}</p>
    </div>
  </list>
  </div>
</template>

<script>
import timers from '@/mocks/timers';

export default {
  name: 'workout-details',
  props: ['id'],
  data () {
    return {
      timers: timers,
      isPlaying: false,
      currentRoundIndex: 0,
      currentRound: null,
      currentRoundLeft: null,
      totalLeft: null,

      roundTimeout: null,
      cronTimeout: null
    }
  },
  computed: {
    currentTimer() {
      return this.timers.find(t => t.id === parseInt(this.id));
    },
    /**
     * Don't repeat yourself, mister.
     * @TODO: Have this as part of the timer model when migrating to
     * vue-model
     */
    totalDuration() {
      let total = 0

      for (let i = 0; i < this.currentTimer.rounds.length; i++) {
        let round = this.currentTimer.rounds[i];
        total += round.duration;
      }

      return total;
    },
  },

  methods: {
    togglePlay () {
      if (!this.isPlaying) {
        this.totalLeft = this.totalDuration + 1;
        this.updateRound();
        this.updateTimers();
        this.isPlaying = true;
      } else {
        this.finish();
      }
    },

    updateRound() {
      if (this.currentRoundIndex < this.currentTimer.rounds.length) {
        this.currentRound = this.currentTimer.rounds[this.currentRoundIndex];
        this.currentRoundLeft = this.currentRound.duration + 1;
        this.currentRoundIndex++;

        this.roundTimeout = setTimeout(
          this.updateRound,
          this.currentRound.duration * 1000);
      } else {
        this.isPlaying = false;
      }
    },

    updateTimers() {
      this.currentRoundLeft--;
      this.totalLeft--;

      if (this.totalLeft > 0) {
        setTimeout(this.updateTimers, 1000);
      } else {
        this.finish();
      }
    },

    finish() {
      this.isPlaying = false;
      this.currentRoundIndex = 0;
      this.currentRound = null;
      this.currentRoundLeft = null;
      this.totalLeft = null;
    }
  }
};
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
