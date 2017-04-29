<template>
  <div class="Workout-create">
    <h1>Create workout</h1>
    <div class="Workout-form">
      <el-row type="flex" :gutter="20">
        <el-col :span="6">
          <div class="grid-content">Workout name</div>
        </el-col>
        <el-col :span="18">
          <el-input placeholder="Please input" v-model="name"></el-input>
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20">
        <el-col :span="6">
          <div class="grid-content">Round Name</div>
        </el-col>
        <el-col :span="18">
          <el-input placeholder="Please input" v-model="roundName"></el-input>
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20">
        <el-col :span="6">
          <div class="grid-content">Round Type</div>
        </el-col>
        <el-col :span="18">
          <el-input placeholder="Please input" v-model="roundType"></el-input>
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20">
        <el-col :span="6">
          <div class="grid-content">Round Duration</div>
        </el-col>
        <el-col :span="18">
          <el-input :span="3" :gutter="5" placeholder="Please input" v-model="roundMinutes"></el-input>
          <el-input :span="3" :gutter="5" placeholder="Please input" v-model="roundSeconds"></el-input>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-button>Add round</el-button>
        </el-col>
        <el-col :span="12">
          <el-button type="primary" v-on:click="createWorkout">Create workout</el-button>
        </el-col>
      </el-row>
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
</style>
