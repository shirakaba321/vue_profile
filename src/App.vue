<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'app',
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  position: relative;
  padding-bottom: 120px;
  box-sizing: border-box;
  font-family: "ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
