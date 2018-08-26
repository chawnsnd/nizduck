<template>
<div class="board_post">
  <div class="container">
    <h1>글 수정하기</h1>
    <div class="section">
      <span class="name">덕네임</span>
      <input type="text" placeholder="덕네임"/>
      <span v-if="didLogin">{{artist.duckname}}</span>
    </div>
    <div class="section">
      <span class="name">비밀번호</span>
      <input type="password" v-model="form.password"  placeholder="비밀번호"/>
    </div>
    <div class="section">
      <span class="name">제목</span>
      <input type="text" v-model="form.title" class="title" placeholder="제목을 입력하세요."/>
    </div>
    <vue-editor class="editor" v-model="form.content" placeholder="글 작성 시 발생할 수 있는 모든 책임은 작성자에게 있습니다."></vue-editor>
    <div class="btns">
      <btn @click="goBack">취소</btn>
      <btn class="orange right" @click="clickModify">수정</btn>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import { VueEditor } from 'vue2-editor'
import User from '../../../models/user'
import Artist from '../../../models/artist'
export default {
  components: {
    VueEditor
  },
  data () {
    return {
      artist: {},
      form: {
        password: null,
        title: null,
        content: null
      },
      didLogin: false,
      me: {}
    }
  },
  mounted() {
    this.didLogin = User.didLogin
    this.me = User.me
    this.artist = Artist.current
    this.init(this.$route.params.bno)
  },
  methods: {
    init(bno) {
      this.fetchDetail(bno)
        .then((res) => {
          this.form.password = res.password;
          this.form.title = res.title;
          this.form.content = res.content;
          this.bno = bno;
        })
        .catch((err) => {
          console.log(err);
        })
    },
    goBack () {
      this.$router.go(-1)
    },
    clickModify () {
      if (confirm('글을 수정하시겠습니까?')) {
        if(this.me){
          this.form.author = this.me._id  
        }else{
          this.form.anonymous = true
        }
        this.form.artist = this.artist._id
        this.form._id = this.bno
        this.modifyBoard(this.form)
      }
    },
    fetchDetail(bno) {
      return new Promise((resolve, reject) => {
        this.axios
          .get(`/board/${this.artist._id}/${bno}`)
          .then(res => {
            if (!res.data.success) return reject(res.data.message)
            resolve(res.data.item)
          })
          .catch(err => {
            reject(res.data.message)
          });
      });
    },
    modifyBoard (data) {
        this.axios
        .put(`/board/${this.artist._id}/${this.bno}`, data)
        .then(res => {
            if(!res.data.success) return console.log('수정에 실패했습니다.', res.data.message)
            alert('글이 수정되었습니다.')
            console.log(res)
            this.$router.push(`/lake/${this.artist}/board/${res.data.Item._id}`)
        })
        .catch(err => {
            console.log('수정에 실패했습니다.', err)
        })
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
