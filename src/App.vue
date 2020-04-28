<template>
  <div id="app">
    <div id="nav" v-show="false">
      <router-link to="/">Main</router-link> |
      
    </div>
    <router-view/>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  mounted() {
    axios.get("http://localhost:8082/multas.json").then(multas => this.$store.state.multas = multas.data)
  }
}
</script>

<style></style>
