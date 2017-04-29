<template>
  <div class="Workout-create">
    <div class="Workout-form">
      <label for="name">Workout name</label>
      <input type="text" id="name" v-model="name">

      <label for="round-name">Round Name</label>
      <input type="text" id="round-name" v-model="roundName">

      <label for="round-type">Round Type</label>
      <input type="text" id="round-type" v-model="roundType">

      <label for="round-minutes">Round Duration</label>
      <input type="text" id="round-minutes" v-model="roundMinutes" placeholder="MM" maxlength="2">
      <input type="text" id="round-seconds" v-model="roundSeconds" placeholder="SS" maxlength="2">

      <button v-on:click="addRound">Add round</button>

      <button v-on:click="createWorkout">Create workout</button>
    </div>
    <div class="Workout-preview">
      <p>{{name}}</p>

      <template v-if="rounds.length">
        <div v-for="round in rounds">
          {{round.name}} | {{round.type}} <br>
          {{round.duration}} <br>
        </div>
      </template >
    </div>
  </div>
</template>

<script>
export default {
  name: 'workout-create',
  data() {
    return {
      name: null,
      rounds: [],
      nameSet: false,

      roundName: null,
      roundType: null,
      roundMinutes: null,
      roundSeconds: null
    }
  },

  computed: {
    roundsIsValid() {
      return this.rounds.length > 0;
    },
    roundNameIsValid() {
      return !!this.roundName;
    },
    roundTypeIsValid() {
      return !!this.roundType;
    },
    roundDurationIsValid() {
      return roundMinutes > 0 || roundSeconds > 0;
    }
  },

  methods: {
    addRound() {
      let name = this.roundName;
      let type = this.roundType;

      this.rounds.push({
        name,
        type,
        duration: `${this.roundMinutes}:${this.roundSeconds}`
      });
    },

    createWorkout() {
      console.log('In here we would save the model');
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
