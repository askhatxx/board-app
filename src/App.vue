<template>
  <div id="app" class="app-wrapper">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: mapActions(['initState']),
  mounted() {
    this.initState()
  }
}
</script>

<style>
*, ::after, ::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: #ffffff;
  font-family: 'Roboto', 'Segoe UI', 'Arial', sans-serif;
  font-size: 1rem;
  color: #000000;
}
.app-wrapper {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
</style>
