<template>
  <div class="main" id="main">
    <card class="card" v-for="card in length" :key="card"></card>
    <wing></wing>
  </div>
</template>

<script>
import Card from '../Card'
import Wing from './Wing'

export default {
  components: {
    'card': Card,
    'wing': Wing
  },
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Nizduck',
      length: 5
    }
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
.main{
  width: 1000px;
  margin: auto;
}
.wing{
  width: 300px;
  position: fixed;
  top: 130px;
  margin-left: 700px;
}
.card{
  margin-top: 20px;
}
</style>
