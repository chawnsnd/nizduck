<template>
  <div id="app">
    <header></header>
    <div class="header_tmp"><img src="../logo.png" width=50px>헤더가 여기 있어야 되는데...
      <router-link to="/">메인</router-link>
      <router-link to="/lake">레이크</router-link>
      <router-link to="/live">라이브</router-link>
      <input type="text" placeholder="검색박스">
      <router-link to="/nest">네스트</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
  },
  mounted () {

  }
}
</script>

<style>
body{
  background-color: #f5f5f5;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 13px;
}
.header_tmp{
  background-color: white;
  border-bottom: 2px solid pink;
  height: 70px;
  width: 100%
}
.card{
  margin-top: 20px;
}
</style>
