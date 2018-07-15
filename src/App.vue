<template>
  <div id="app">
    <main-header></main-header>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
  }
}
</script>

<style>
body{
  margin: 0;
  background-color: #f5f5f5;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 13px;
}
</style>
