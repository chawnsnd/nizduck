<template>
  <div class="lake">
    <div class="header">
      <div class="main_image">
        <img v-if="artist.main_image" :src="artist.main_image" width="100px" height="100px" />
        <img v-else src="../../assets/logo.png" width="100px" height="100px" />
      </div>
      <div class="artist" @click="goArtist" style="cursor: pointer;">{{artist.ko_name}}</div>
      <div class="menu_bar">
        <router-link :to="`/lake/${artist.en_name}/board`" active-class="active"><div class="menu"><span class="name">게시판<div class="count">24</div></span></div></router-link>
        <router-link :to="`/lake/${artist.en_name}/sns`" active-class="active" class="disabled"><div class="menu live"><span class="name">LIVE</span></div></router-link>
        <router-link :to="`/lake/${artist.en_name}/sns`" active-class="active" class="disabled"><div class="menu"><span class="name">SNS<div class="count">3</div></span></div></router-link>
        <router-link :to="`/lake/${artist.en_name}/calendar`" active-class="active"><div class="menu"><span class="name">달력</span></div></router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      artist: null
    };
  },
  methods: {
    goArtist() {
      this.$router.push(`/lake/${this.artist.en_name}`);
    },
    fetchArtist() {
      var artist = this.$route.params.artist
      this.axios
        .get(`/artist/${artist}`)
        .then(res => {
          if (!res.data.success)
            return console.log("아티스트를 가져오는데 실패했습니다.");
          this.artist = res.data.artist;
        })
        .catch(err => {
          return console.log("아티스트를 가져오는데 실패했습니다.", err);
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
.lake {
  width: 1300px;
  margin: auto;
}
.header {
  border: 1px solid #eaeaea;
  height: 200px;
  border-radius: 10px;
  margin-top: 20px;
  position: relative;
  .main_image{
    position: absolute;
  }
  .artist {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 50px;
    font-weight: bold;
    color: white;
    text-shadow: 0 0 10px black;
    -moz-text-shadow: 0 0 10px black;
    -webkit-text-shadow: 0 0 10px black;
  }
  .menu_bar {
    float: right;
    margin-right: 10px;
    .menu {
      cursor: pointer;
      border-radius: 100%;
      border: 5px solid grey;
      display: inline-block;
      width: 80px;
      height: 80px;
      background-color: #eaeaea;
      margin-left: 20px;
      position: relative;
      color: black;
      .name {
        position: absolute;
        display: inline-block;
        font-weight: bold;
        left: 50%;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        .count {
          border-radius: 10px;
          color: white;
          text-align: center;
          background-color: red;
        }
      }
    }
    .live {
      border: 5px solid red;
      background-color: #ffcdd2;
      .name {
        color: red;
      }
    }
    .active > .menu {
      border: 5px solid black;
    }
  }
}
</style>
