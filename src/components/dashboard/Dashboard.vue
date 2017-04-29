<template>
  <div class="hello Dashboard">
    <list
      :items=timers
    >
  </list>
  </div>
</template>

<script>
import timers from '@/mocks/timers'

export default {
  name: 'dashboard',
  data () {
    return {
      timers: timers
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
