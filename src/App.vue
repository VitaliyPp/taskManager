<template>
  <div id="app">
    <Navigation/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
  @import "../node_modules/materialize-css/dist/css/materialize.min.css";
</style>
