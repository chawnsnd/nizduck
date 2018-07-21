<template>
<div class="board_detail">
  <div class="detail">
    <div class="header">
      <div class="profile"></div>
      <div class="meta">
        <div class="title">김도아 분량이 적은 이유.fact {{this.bno}}</div>
        <span class="duck">닉네임임당</span>
        <span class="lake">프로듀스48</span>
        <span class="time">3시간 전</span>
      </div>
      <div class="btns">
        <span><i class="fas fa-thumbs-up"></i>24</span>
        <i class="fas fa-share-alt"></i>
      </div>
    </div>
    <div class="content">
      <p>너무 눈부셔서 카메라가 고장남</p><p></p><p><br></p><img src="data:image/jpeg;base64,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" class="txc-image" style="clear:none;float:none;">
      <p>너무 눈부셔서 카메라가 고장남</p><p></p><p><br></p><img src="data:image/jpeg;base64,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" class="txc-image" style="clear:none;float:none;">
    </div>
    <div class="comments">
      <div class="count">댓글 231개</div>
      <div class="comment" v-for="comment in 3" :key="comment">
        <span class="duck">닉네임2닉네</span>
        <span class="ccontent">지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀</span>
        <span class="time">3시간 전</span>
      </div>
      <div class="comment_form comment">
        <span class="duck">웅치킨</span>
        <span class="input_box ccontent"><textarea placeholder="댓글을 입력하세요" rows="3" style="width: 100%; resize: none; border:0; outline: none; background-color: none;"></textarea></span>
        <btn class="salmon submit">등록</btn>
      </div>
    </div>
  </div>
  <div class="bottom">
    <router-link :to="`/lake/${artist}/board`"><btn>전체목록</btn></router-link>
    <btn class="red right" @click="clickDelete">삭제</btn>
    <router-link :to="`/lake/${artist}/board/${bno}/modify`"><btn class="orange right">수정</btn></router-link>
  </div>
  <board-list></board-list>
</div>
</template>

<script>
import Board from './Board'

export default {
  components: {
    'board-list': Board
  },
  data () {
    return {
      artist: this.$route.params.artist,
      bno: this.$route.params.bno
    }
  },
  methods: {
    clickDelete () {
      if (confirm('글을 삭제하시겠습니까?')) {
        // 처리
        alert('글이 삭제되었습니다.')
        this.$router.push(`/lake/${this.artist}/board`)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.detail{
  border: 1px solid #eaeaea;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}
.header{
  border-bottom: 1px solid grey;
  padding-bottom: 5px;
  .profile{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: inline-block;
    background-image: url(https://lh3.googleusercontent.com/-NTJJG92Ek_s/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7pjeQd8704Lo9OwhH3Zt-x8ro1KHA/s192-c-mo/photo.jpg)
  }
  .meta{
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
    .title{
      font-weight: bold;
      font-size: 20px;
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
  .btns{
    display: inline-block;
    float: right;
    font-size: 20px;
    color: grey;
    *{
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
.content{
  padding: 10px 10px 10px 10px;
  overflow: hidden;
}
.comments{
  border-top: 1px solid grey;
  padding: 10px 0 10px 0;
  .count{
    color: grey;
    margin-bottom: 5px;
    cursor: pointer;
  }
  .comment{
    margin: 10px 0;
    display: flex;
    .duck{
      flex: 1;
      color: #365899;
      cursor: pointer;
      font-weight: bold;
    }
    .ccontent{ flex: 10; }
    .time{ flex: 1; text-align: right;}
    .submit{ flex: 0.5; }
  }
  .comment_form{
    background-color: rgba(255, 192, 203, 0.3);
    padding: 5px;
    .duck{
      color: black;
      text-align: center;
      margin: auto;
    }
    .input_box{ background-color: white; }
  }
}
.bottom{
  margin-top: 15px;
}
.right{
  margin-left: 10px;
  float: right;
}
</style>
