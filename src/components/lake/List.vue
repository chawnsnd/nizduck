<template>
  <div class="lake_main">
    <div class="section">
      <div class="title">HOT LAKE</div>
      <list-box></list-box>
    </div>
    <div class="section">
      <div class="title">MY LAKE</div>
      <list-box></list-box>
    </div>
    <div class="section">
      <div class="title">ALL LAKE</div>
      <div class="lakebox">
        <div class="typing"><input type="text" v-model="search" @keyup="searchLakeByName(search)" placeholder="레이크 검색"></div>
        <div class="sub_title">그룹</div>
        <div class="artist" v-for="artist in groupList" :key="artist"><router-link :to="`/lake/${artist.en_name}`">{{artist.ko_name}}</router-link></div>
        <div class="sub_title">개인</div>
        <div class="artist" v-for="artist in privateList" :key="artist"><router-link :to="`/lake/${artist.en_name}`">{{artist.ko_name}}</router-link></div>
        <div class="sub_title">기타</div>
        <div class="artist" v-for="artist in etcList" :key="artist"><router-link :to="`/lake/${artist.en_name}`">{{artist.ko_name}}</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import ListBox from './ListBox'

export default {
  components: {
    'list-box': ListBox
  },
  data () {
    return {
      msg: 'Welcome to Nizduck',
      groupList: [],
      privateList: [],
      etcList: [],
      search: ''
    }
  },
  methods: {
    fetchArtist (query={}) {
      var queryy = query
      return new Promise((resolve, reject, query) => {
        this.axios
          .get("/artist/list", {params: queryy})
          .then(res => {
            if (!res.data.success) return reject();
            resolve(res.data.list)
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    searchLakeByName(name){
      this.fetchArtist({kind: 'group', search: name})
        .then(list => {
          this.groupList = list;
        })
        .catch(err => {
          console.log("리스트를 불러오는데 실패했습니다.")
        });
      this.fetchArtist({kind: 'private', search: name})
        .then(list => {
          this.privateList = list;
        })
        .catch(err => {
          console.log("리스트를 불러오는데 실패했습니다.")
        });
      this.fetchArtist({kind: 'etc', search: name})
        .then(list => {
          this.etcList = list;
        })
        .catch(err => {
          console.log("리스트를 불러오는데 실패했습니다.")
        });
    }
  },
  mounted () {
    this.searchLakeByName('')
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
