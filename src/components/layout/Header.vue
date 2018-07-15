<template>
    <div class="header">
      <div class="top">
        <div class="main" @click="goMain">
          <span class="logo"><img src="../../../logo.png" width=30px></span>
          <span class="title">NIZDUCK</span>
        </div>
        <div class="typing">
          <input type="text" placeholder="통합검색">
          <btn class="salmon">검색</btn>
        </div>
      </div>
      <div class="bottom">
        <router-link to='/lake' active-class="active"><span>레이크</span></router-link>
        <router-link to='/live' active-class="active"><span>라이브</span></router-link>
        <router-link to='/nest' active-class="active"><span>네스트</span></router-link>
        <div class="right">
          <router-link to='/login' active-class="active"><span><i class="fas fa-sign-in-alt"> LOGIN</i></span></router-link>
          <router-link to='/account' active-class="active"><span><i class="fas fa-cog"> ACCOUNT</i></span></router-link>
          <span><i class="fas fa-sign-out-alt"> LOGOUT</i></span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'afasdf'
    }
  },
  methods: {
    goMain () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  padding-top: 20px;
  background-color: white;
  border-bottom: 2px solid salmon;
  width: 100%;
}
.top{
  margin: auto;
  text-align: center;
  width: 1000px;
  display: flex;
  .main{
    flex: 0.5;
  }
}
.typing{
  display: inline-block;
  height: 30px;
  width: 600px;
  border: 5px solid salmon;
  vertical-align: top;
  input{
    padding-left: 10px;
    background-color: rgba(0, 0, 0, 0);
    width: 86.62%;
    height: 100%;
    border: none;
    outline: none;
  }
  .btn{
    flex: 1;
    height: 100%;
    vertical-align: top;
    border-radius: 0;
    padding: 0 20px;
  }
}
.main{
  display: inline-block;
  cursor: pointer;
  .title{
    color: salmon;
    font-weight: bold;
    text-decoration: none;
    font-size: 30px;
  }
}
.bottom{
  margin-top: 20px;
  span{
    text-align: center;
    cursor: pointer;
    display: inline-block;
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: center;
    color: black;
  }
  span:hover{
    background-color: salmon;
    color: white;
  }
  .active{
    span{
      background-color: salmon;
      color: white;
    }
  }
}
.right{
  span{
    width: 100px;
  }
  float: right;
}
</style>
