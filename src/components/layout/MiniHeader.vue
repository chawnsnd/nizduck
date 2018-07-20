<template>
<div class="mini_header">
  <div class="main">
    <div class="left">
      <span class="logo"><img src="../../../logo.png" width=30px></span>
      <span class="title">NIZDUCK</span>
    </div>
    <div class="right">
      <span @click="goLogin"><i class="fas fa-sign-in-alt"> LOGIN</i></span>
      <!-- <span><i class="fas fa-sign-out-alt"> LOGOUT</i></span> -->
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    goLogin () {
      window.open('/login', '로그인', 'width=700, height=500, resizable=no')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.mini_header{
  width: 100%;
  background-color: salmon;
  color: white;
  padding: 5px 0;
}
.title{
  font-weight: bold;
  font-size: 30px;
}
.left{
  cursor: default;
  display: inline-block;
  margin-left: 5px;
}
.right{
  display: inline-block;
  margin-right: 5px;
  span{
    width: 100px;
    font-size: 25px;
    vertical-align: bottom;
    color: white;
    cursor: pointer;
  }
  float: right;
}
</style>
