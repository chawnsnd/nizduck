<template>
  <div class="lake_main">
    <div class="section">
      <div class="title">HOT 레이크</div>
      <lake-list></lake-list>
    </div>
    <div class="section">
      <div class="title">MY 레이크</div>
      <lake-list></lake-list>
    </div>
    <div class="section">
      <div class="title">전체 레이크</div>
      <div class="lakebox">
        <div class="typing"><input type="text" placeholder="레이크 검색"></div>
        <div class="sub_title">그룹</div>
        <div class="artist" v-for="artist in 30" :key="artist"><router-link to="/lake/ohmygirl/board">오마이걸</router-link></div>
        <div class="sub_title">개인</div>
        <div class="artist" v-for="artist in 30" :key="artist"><router-link to="/lake/ohmygirl/board">오마이걸</router-link></div>
        <div class="sub_title">기타</div>
        <div class="artist" v-for="artist in 30" :key="artist"><router-link to="/lake/ohmygirl/board">오마이걸</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import LakeList from './LakeList'

export default {
  components: {
    'lake-list': LakeList
  },
  data () {
    return {
      msg: 'Welcome to Nizduck'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.lake_main{
  width: 1300px;
  margin: auto;
}
.section{
  margin: 20px 0;
}
.title{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}
.lakebox{
  border: 1px solid #eaeaea;
  background-color: white;
}
.artist{
  display: inline-block;
  margin: 20px;
}
.typing{
  height: 50px;
  input{
    width: 90%;
    border: none;
    outline: none;
    height: 90%;
    padding-left: 20px;
  }
}
.sub_title{
  background-color: lightsalmon;
  padding: 15px 20px;
  font-size: 15px;
  font-weight: bold;
  border-bottom: 2px solid salmon;
  border-top: 2px solid salmon;
}
</style>
