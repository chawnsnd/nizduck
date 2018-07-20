<template>
  <div class="nest">
    <nest-header></nest-header>
    <div class="content">
      <div class="nav">
        <span class="item" :class="{active: nav=='post'}" @click="nav='post'">게시물</span>
        <span class="item" :class="{active: nav=='guestbook'}" @click="nav='guestbook'">방명록</span>
      </div>
      <div class="cards" v-if="nav=='post'">
        <card class="card" v-for="card in length" :key="card" ></card>
      </div>
      <guestbook v-if="nav=='guestbook'"></guestbook>
      <wing :class="{absolute: nav=='guestbook'}"></wing>
    </div>
  </div>
</template>

<script>
import Card from '../Card'
import Wing from './Wing'
import Header from './Header'
import Guestbook from './Guestbook'
export default {
  data () {
    return {
      length: 5,
      nav: 'post'
    }
  },
  components: {
    'card': Card,
    'wing': Wing,
    'nest-header': Header,
    'guestbook': Guestbook
  },
  methods: {
    infiniteScroll (e) {
      var cards = document.getElementsByClassName('card')
      var cardArr = [...cards]
      var mainHeight = 0
      var topHeader = document.getElementById('top')
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
.nav{
  border-radius: 10px;
  background: white;
  width: 640px;
  height: 50px;
  line-height: 50px;
  margin-top: 20px;
  display: flex;
  border: 1px solid #eaeaea;
  .item{
    cursor: pointer;
    display: inline-block;
    flex: 1;
    text-align: center;
    height: 100%;
  }
  .active{
    border-radius: 10px;
    border: 1px solid orange;
  }
}
.card{
  margin-top: 20px;
}
.wing{
  width: 300px;
  position: fixed;
  top: 525px;
  margin-left: 700px;
}
.absolute{
  position: absolute;
}
.guestbook{
  margin: 20px 0;
}
</style>
