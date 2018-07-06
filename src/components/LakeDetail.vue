<template>
  <div class="lake">
    <div class="header">
      <div class="artist">오마이걸</div>
      <div class="menu_bar">
        <div class="menu select"><span class="name">게시판<div class="count">24</div></span></div>
        <div class="menu live"><span class="name">LIVE</span></div>
        <div class="menu"><span class="name">SNS<div class="count">3</div></span></div>
        <div class="menu"><span class="name">달력</span></div>
      </div>
    </div>
    <div class="board">
      <div class="head">
        <span class="no">글번호</span>
        <span class="title">글제목</span>
        <span class="duck">닉네임</span>
        <span class="time">시간</span>
        <span class="count">조회수</span>
        <span class="like">추천수</span>
      </div>
      <div class="notice" v-for="i in 3" v-bind:key="i">
        <span class="no">공지</span>
        <span class="title">
            공지 {{i}}입니다.
            <span class="picture"><i class="fas fa-image"></i></span>
            <span class="comment">[3]</span>
          </span>
        <span class="duck">공지자</span>
        <span class="time">3시간 전</span>
        <span class="count">28</span>
        <span class="like">4444</span>
      </div>
      <div class="article" v-for="i in 30" v-bind:key="i">
          <span class="no">{{30-i+1}}</span>
          <span class="title">
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
    </div>
    <div class="bar">
      <div class="post"><i class="fas fa-pencil-alt"></i> 글쓰기</div>
      <div class="search">
        <div class="search_bar">
          <select>
            <option>전체</option>
            <option>제목</option>
            <option>내용</option>
            <option>글쓴이</option>
            <option>제목+내용</option>
          </select>
          <input type="text">
        </div>
        <div class="search_btn">검색</div>
      </div>
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
  .artist{
    margin-top: 10px;
    margin-left: 10px;
    font-size: 50px;
    font-weight: bold;
    color: white;
    text-shadow: 0 0 10px black;
    -moz-text-shadow: 0 0 10px black;
    -webkit-text-shadow: 0 0 10px black;
  }
  .menu_bar{
    float: right;
    margin-right: 10px;
    .menu{
      cursor: pointer;
      border-radius: 100%;
      border: 5px solid grey;
      display: inline-block;
      width: 80px;
      height: 80px;
      background-color: #eaeaea;
      margin-left: 20px;
      position: relative;
      .name{
        position: absolute;
        display: inline-block;
        font-weight: bold;
        left: 50%;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        .count{
          border-radius: 10px;
          color: white;
          text-align: center;
          background-color: red;
        }
      }
    }
    .live{
      border: 5px solid red;
      background-color: #ffcdd2;
      .name{
        color: red;
      }
    }
    .select{
      border: 5px solid black;
    }
  }
}
.bar{
  height: 50px;
  width: 100%;
  display: inline-block;
  border-radius: 10px;
  position: relative;
  .search{
    display: inline-block;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  .search_bar{
    display: inline-block;
    border: 3px solid pink;
  }
  input{
    border: none;
    outline: none;
  }
  select{
    border: none;
    outline: none;
  }
  .search_btn{
    padding: 5px 8px 5px 8px;
    display: inline-block;
    background-color: pink;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  .post{
    display: inline-block;
    padding: 5px 8px 5px 8px;
    border: 2px solid grey;
    border-radius: 5px;
    font-weight: bold;
    color: grey;
    cursor: pointer;
    background-color: white;
    float: right;
    margin-right: 30px;
    margin-top: 10px;
  }
  .post:hover{
    color: black;
    border: 2px solid black;
  }
}
.board{
  border: 1px solid #eaeaea;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
  .article{
    padding: 5px 20px 5px 20px;
    border-bottom: 1px solid #eaeaea;
    cursor: pointer;
  }
  .head{
    padding: 5px 20px 5px 20px;
    background-color: #eaeaea;
    .title{
      text-align: center;
    }
    .duck{
      color: black;
    }
    *{
      font-weight: bold;
    }
  }
  .notice{
    padding: 5px 20px 5px 20px;
    border-bottom: 1px solid #eaeaea;
    cursor: pointer;
    *{
      font-weight: bold;
    }
  }
  .notice:hover{
    background-color: rgba(255, 192, 203, 0.2)
  }
  .article:hover{
    background-color: rgba(255, 192, 203, 0.2)
  }
  .no{
    width: 4%;
    text-align: center;
    display: inline-block;
  }
  .title{
    margin-left: 20px;
    width: 64.96%;
    display: inline-block;
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
  .duck{
    color: #365899;
    cursor: pointer;
    width: 10%;
    display: inline-block;
    text-align: center;
  }
  .time{
    width: 8%;
    display: inline-block;
    text-align: center;
  }
  .count{
    width: 5%;
    display: inline-block;
    text-align: center;
  }
  .like{
    width: 5%;
    display: inline-block;
    text-align: center;
  }
}
.pagination{
  margin: 20px 0 20px 0;
  text-align: center;
  font-size: 18px;
  *{
    cursor: pointer;
    padding: 0 5px 0 5px;
  }
}
</style>
