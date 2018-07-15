<template>
<div class="board_post">
  <div class="container">
    <h1>새 글 작성하기</h1>
    <div class="section">
      <span class="name">덕네임</span>
      <input type="text" placeholder="덕네임"/>
    </div>
    <div class="section">
      <span class="name">비밀번호</span>
      <input type="password" placeholder="비밀번호"/>
    </div>
    <div class="section">
      <span class="name">제목</span>
      <input type="text" class="title" placeholder="제목을 입력하세요."/>
    </div>
    <vue-editor class="editor" placeholder="글 작성 시 발생할 수 있는 모든 책임은 작성자에게 있습니다."></vue-editor>
    <div class="btns">
      <btn @click="goBack">취소</btn>
      <btn class="navy right" @click="clickPost">등록</btn>
    </div>
  </div>
</div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  components: {
    VueEditor
  },
  data () {
    return {
      artist: this.$route.params.artist
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    clickPost () {
      if (confirm('글을 등록하시겠습니까?')) {
        // 처리
        alert('글이 등록되었습니다.')
        this.$router.push(`/lake/${this.artist}/board/${123}`)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  border: 1px solid #eaeaea;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  margin: 20px 0 20px 0;
}
.right{
  text-align: right;
}
.btns{
  margin-top: 20px;
  text-align: right;
}
.editor{
  display: inline-block;
  width: 100%;
  height: 500px;
}
.section{
  margin: 10px 0 10px 5px;
  .name{
    display: inline-block;
    width: 80px;
    font-weight: bold;
  }
  input{
    padding-left: 10px;
    height: 30px;
  }
  .title{
    width: 1150px;
  }
}
</style>
