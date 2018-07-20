<template>
  <div class="nest">
    <div class="header">
      <div class="background">
      </div>
      <div class="profile">
        <div class="profile_img"></div>
        <div class="right">
          <div>
            <span class="duck">웅치킨</span>
            <btn class="white">팔로우</btn>
            <span>신고</span>
            <span>차단</span>
          </div>
          <div>
            <span class="meta_section">
              <span class="meta_title">게시물</span>
              <span class="meta_content">402</span>
            </span>
            <span class="meta_section">
              <span class="meta_title">팔로워</span>
              <span class="meta_content">28.9천</span>
            </span>
            <span class="meta_section">
              <span class="meta_title">팔로우</span>
              <span class="meta_content">272</span>
            </span>
          </div>
          <div class="aboutme">
            안녕하세요 자기소개입니당~
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <card class="card" v-for="card in length" :key="card"></card>
      <wing></wing>
    </div>
  </div>
</template>

<script>
import Button from '../Button'
import Card from '../Card'
import Wing from './Wing'
export default {
  name: 'Lake',
  data () {
    return {
      length: 5
    }
  },
  components: {
    'btn': Button,
    'card': Card,
    'wing': Wing
  },
  methods: {
    infiniteScroll (e) {
      var cards = document.getElementsByClassName('card')
      var cardArr = [...cards]
      var mainHeight = 0
      var topHeader = document.getElementById('top')
      console.log(topHeader)
      for (var i = 1; i < cardArr.length - 1; i++) {
        mainHeight += cardArr[i].offsetHeight
      }
      if (e.wheelDeltaY < 0) {
        topHeader.style.display = 'none'
      }
      if (e.wheelDeltaY >= 0) {
        topHeader.style.display = 'flex'
      }
      if (window.scrollY >= mainHeight) {
        this.length += 5
      }
    }
  },
  mounted () {
    window.addEventListener('mousewheel', this.infiniteScroll)
  },
  beforeDestroy () {
    var topHeader = document.getElementById('top')
    topHeader.style.display = 'flex'
    window.removeEventListener('mousewheel', this.infiniteScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nest{
  width: 1000px;
  margin: auto;
  margin-top: 130px;
}
.header{
  border-radius: 10px;
  margin-top: 20px;
  border: 1px solid #eaeaea;
  background-color: white;
  height: 350px;
}
.background{
  height: 200px;
  background-image: url(../../../tmp/omg.jpg);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.profile{
  > * { display: inline-block; }
}
.profile_img{
  width: 130px;
  height: 130px;
  border-radius: 100%;
  display: inline-block;
  background-image: url(https://lh3.googleusercontent.com/-NTJJG92Ek_s/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7pjeQd8704Lo9OwhH3Zt-x8ro1KHA/s192-c-mo/photo.jpg);
}
.right{
  vertical-align: top;
  height: 130px;
  width: 850px;
}
.card{
  margin-top: 20px;
}
.wing{
  width: 300px;
  position: fixed;
  top: 502px;
  margin-left: 700px;
}
</style>
