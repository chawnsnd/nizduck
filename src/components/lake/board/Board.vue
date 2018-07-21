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
    <div class="article" v-for="a in 30" v-bind:key="a" v-bind:class="{'active': a == bno}">
      <span class="no">{{30-a+1}}</span>
      <span class="title" @click="goDetail(30-a+1)">
        김도아 분량이 적은 이유.fact
        <span class="picture"><i class="fas fa-image"></i></span>
        <span class="comment">[3]</span>
      </span>
      <span class="duck">닉네임임당</span>
      <span class="time">3시간 전</span>
      <span class="count">28</span>
      <span class="like">37</span>
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
export default {
  data () {
    return {
      artist: this.$route.params.artist,
      bno: this.$route.params.bno
    }
  },
  methods: {
    goPost () {
      this.$router.push(`/lake/${this.artist}/board/post`)
    },
    goDetail (article) {
      this.$router.push(`/lake/${this.artist}/board/${article}`)
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
  padding: 5px 5px;
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
  font-size: 18px;
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
