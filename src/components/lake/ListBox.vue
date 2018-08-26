<template>
  <div class="lake_list">
    <div class="prev nav"><i class="fas fa-chevron-left"></i></div>
    <div class="artists">
      <div class="artist" v-for="artist in artists" :key="artist" @click="goLake(artist.en_name)">
        <span class="rank_circle">{{artist._id}}</span>
        <span class="artist_circle">{{artist.ko_name}}</span>
      </div>
      <!-- 임시 -->
      <div class="artist" @click="goLake('ohmygirl')">
        <span class="rank_circle">1</span>
        <span class="artist_circle">오마이걸</span>
      </div>
    </div>
    <div class="next nav"><i class="fas fa-chevron-right"></i></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      msg: "Welcome to Nizduck",
      query: {},
      artists: null
    };
  },
  methods: {
    goLake(artist) {
      this.$router.push(`/lake/${artist}`);
    },
    fetchArtist () {
      this.axios
        .get("/artist/list", this.query)
        .then(res => {
          if (!res.data.success) return console.log('검색에 실패했습니다.dd')
          this.artists = res.data.list
        })
        .catch(err => {
          console.log('검색에 실패했습니다.', err)
        });
    }
  },
  mounted () {
    this.fetchArtist();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.lake_list {
  background: url("../../../obique_pattern.gif");
  height: 140px;
  text-align: center;
  overflow: hidden;
}
.artists {
  width: 90%;
  overflow: hidden;
  display: inline-block;
}
.artist {
  display: inline-block;
  color: white;
  font-weight: bold;
  margin: 10px;
  text-align: center;
  cursor: pointer;
  position: relative;
}
.artist_circle {
  display: inline-block;
  width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 100%;
  background-color: grey;
}
.nav {
  line-height: 140px;
  color: #eaeaea;
  display: inline-block;
  cursor: pointer;
  &.prev {
    float: left;
    font-size: 50px;
    margin-left: 20px;
  }
  &.next {
    float: right;
    font-size: 50px;
    margin-right: 20px;
  }
}
.nav:hover {
  color: grey;
}
.rank_circle {
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
