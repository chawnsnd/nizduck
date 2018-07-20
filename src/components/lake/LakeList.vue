<template>
  <div class="lake_list">
    <div class="prev nav"><i class="fas fa-chevron-left"></i></div>
    <div class="artists">
      <div class="artist" v-for="artist in 10" :key="artist" @click="goLake(artist)">
        <span class="rank_circle">{{artist}}</span>
        <span class="artist_circle">오마이걸</span>
        </div>
    </div>
    <div class="next nav"><i class="fas fa-chevron-right"></i></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Nizduck'
    }
  },
  methods: {
    goLake (artist) {
      this.$router.push('/lake/ohmygirl')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.lake_list{
  background: url('../../../obique_pattern.gif');
  height: 140px;
  text-align: center;
  overflow: hidden;
}
.artists{
  width: 90%;
  overflow: hidden;
  display: inline-block;
}
.artist{
  display: inline-block;
  color: white;
  font-weight: bold;
  margin: 10px;
  text-align: center;
  cursor: pointer;
  position: relative;
}
.artist_circle{
  display: inline-block;
  width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 100%;
  background-color: grey;
}
.nav{
  line-height: 140px;
  color: #eaeaea;
  display: inline-block;
  cursor: pointer;
  &.prev{
    float: left;
    font-size: 50px;
    margin-left: 20px;
  }
  &.next{
    float: right;
    font-size: 50px;
    margin-right: 20px;
  }
}
.nav:hover{
  color: grey;
}
.rank_circle{
  display: inline-block;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  background-color: gold;
  border-radius: 100%;
  color: darkred;
}
</style>
