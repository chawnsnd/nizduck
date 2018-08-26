<template>
<div class="board">
  <div class="board_main">
    <div class="head">
      <span class="no">번호</span>
      <span class="title">제목</span>
      <span class="duck">덕네임</span>
      <span class="time">시간</span>
      <span class="count">조회</span>
      <span class="like">추천</span>
    </div>
    <div class="notice">
      <span class="no">공지</span>
       <span class="title" @click="goDetail('공지아이디')">
          공지입니다.
          <span class="picture"><i class="fas fa-image"></i></span>
          <span class="comment">[3]</span>
        </span>
      <span class="duck">공지자</span>
      <span class="time">3시간 전</span>
      <span class="count">28</span>
      <span class="like">4444</span>
    </div>
    <div class="article" v-for="item in list" v-bind:key="item._id" v-bind:class="{'active': item._id === bno}">
      <span class="no">{{item._id}}</span>
      <span class="title" @click="goDetail(item._id)">
        {{item.title}}
        <span class="picture"><i class="fas fa-image"></i></span>
        <span class="comment">[{{item.comment}}]</span>
      </span>
      <span class="duck">{{item.author}}</span>
      <span class="time">{{item.reg_date}}</span>
      <span class="count">{{item.count}}</span>
      <span class="like">{{item.like}}</span>
    </div>
  </div>
  <div class="pagination">
    <span class="first">처음</span>
    <span class="prev">이전</span>
    <span class="page" v-for="i in 10" v-bind:key="i">
      {{i}}
    </span>
    <span class="next">다음</span>
    <span class="last">끝</span>
    <btn @click="goPost"><i class="fas fa-pencil-alt"></i> 글쓰기</btn>
  </div>
  <div class="search">
    <div class="search_bar">
      <select>
        <option>전체</option>
        <option>제목</option>
        <option>내용</option>
        <option>덕네임</option>
        <option>제목+내용</option>
      </select>
      <input type="text">
      <btn class="pink">검색</btn>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import Artist from '../../../models/artist'
export default {
  data () {
    return {
      artist: {},
      list: [],
    }
  },
  props: ['bno'],
  mounted() {
    this.artist = Artist.current;
    this.fetchBoard();
  },
  methods: {
    goPost () {
      this.$router.push(`/lake/${this.artist.en_name}/board/post`)
    },
    goDetail (bno) {
      this.$router.push(`/lake/${this.artist.en_name}/board/${bno}`)
    },
    fetchBoard() {
      this.axios
        .get(`/board/${this.artist._id}`)
        .then(res => {
          if (!res.data.success) return console.log("게시판을 가져오는데 실패했습니다.", res.data.message);
          this.list = res.data.list;
        })
        .catch(err => {
          return console.log("게시판을 가져오는데 실패했습니다.", err);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search{
  text-align: center;
  position: relative;
  margin-bottom: 20px;
  .search_bar{
    display: inline-block;
    background-color: white;
    border: 3px solid pink;
    input, select{
      border: none;
      outline: none;
    }
    .btn{
      border-radius: 0;
    }
  }
}

.head, .notice, .article{
  padding: 8px 5px;
  border-bottom: 1px solid #eaeaea;
  cursor: pointer;
  display: flex;
  * {text-align: center;}
  .no{ flex: 2; }
  .title{
    text-align: left;
    flex: 20;
    .picture{
      margin-left: 3px;
      color: green;
    }
    .comment{
      margin-left: 3px;
      color: orange;
      font-weight: bold;
    }
  }
  .duck{ flex: 2; }
  .time{ flex: 2; }
  .count{ flex: 1; }
  .like{ flex: 1; }
}
.head {
  background-color: #eaeaea;
  border-bottom: 1px solid grey;
  font-weight: bold;
  .title{ text-align: center; }
}
.notice {
  font-weight: bold;
}
.notice:hover, .article:hover{
  background-color: rgba(255, 192, 203, 0.2);
  text-decoration: underline;
}
.active{
  background-color: #eaeaea
}

.board_main{
  border: 1px solid #eaeaea;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
}

.pagination{
  margin: 20px 0 20px 0;
  text-align: center;
  font-size: 15px;
  position: relative;
  span{
    cursor: pointer;
    padding: 0 5px 0 5px;
  }
  .btn{
    position: absolute;
    right: 0;
  }
}
</style>
