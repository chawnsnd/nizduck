<template>
  <div class="lake">
    <div class="header">
      <div class="artist">오마이걸</div>
    </div>
    <div class="bar">
      <input type="text" placeholder="검색">
      <div class="post">글쓰기
      </div>
    </div>
    <div class="board">
      <div class="article" v-for="i in 30" v-bind:key="i">
          <span class="no">{{30-i+1}}</span>
          <span class="title">김도아 분량이 적은 이유.fact</span>
          <span class="meta">
            <span class="duck">닉네임임당</span>
            <span class="lake">프로듀스48</span>
            <span class="time">3시간 전</span>
          </span>
      </div>
    </div>
    <div class="pagination">
      페이지네이션
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lake',
  data () {
    return {
      msg: 'Welcome to Nizduck'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.lake{
  width: 1300px;
  margin: auto;
}
.header{
  border: 1px solid #eaeaea;
  height: 200px;
  background-image: url(../../tmp/omg.jpg);
  opacity: 0.8;
  border-radius: 10px;
  margin-top: 20px;
}
.bar{
  border: 1px solid #eaeaea;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;}
.board{
  border: 1px solid #eaeaea;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
    .article{
    padding: 5px 20px 5px 20px;
    border: 1px solid #eaeaea;
    cursor: pointer;
    .title{
      margin-left: 20px;
      font-weight: bold;
      font-size: 17px;
    }
    .meta{
      float: right;
    }
    .duck{
      font-weight: bold;
      color: #365899;
      cursor: pointer;
      margin-right: 10px;
    }
    .lake{
      font-weight: bold;
      color: pink;
      cursor: pointer;
      margin-right: 10px;
    }
  }
  .article:hover{
    background-color: rgba(255, 192, 203, 0.2)
  }
}
.pagination{
  border: 1px solid #eaeaea;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  margin: 20px 0 20px 0;
}
</style>
