<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'asf'
    }
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
.disabled{
  display: none;
}
</style>
