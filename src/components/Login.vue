<template>
    <div class="login">
        <div class="login_box">
            <div class="title" @click="goMain">NIZDUCK</div>
            <div class="warning">{{message}}</div>
            <div class="form">
                <div class="typing"><input id="email" @keyup.enter="login()" v-model="form.email" type="text" placeholder="이메일"/></div>
                <div class="typing"><input @keyup.enter="login()" v-model="form.password" type="password" placeholder="패스워드"/></div>
                <div class="submit"><btn class="pink" @click="login()">로그인</btn></div>
            </div>
            <div class="bottom">
                <div class="maintain"><label class="maintain"><input type="checkbox" v-model="form.keep" />로그인 상태 유지</label></div>
                <div class="etc">
                    <!-- <div class="find_id" @click="goFindId">아이디 찾기</div>
                    <div class="find_id" @click="goFIndPw">비밀번호 찾기</div>
                    <div class="find_id" @click="goJoin">회원가입</div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import User from '../models/user'
export default {
  data () {
    return {
      message: null,
      form: {
        email: null,
        password: null,
        keep: false
      }
    }
  },
  mounted () {
      document.getElementById('email').focus()
  },
  methods: {
    goJoin () {
      this.$router.push('/join')
    },
    goMain () {
      this.$router.push('/')
    },
    login () {
        User.login(this.form)
        .then((res) => {
            this.$router.push('/')
        }).catch(err => {
          this.message = err.message;
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
    margin: auto;
}
.login_box{
    padding: 50px 100px 50px 100px;
    width: 500px;
    margin: auto;
    text-align: center;
}
.title{
    color: salmon;
    font-weight: bold;
    font-size: 80px;
    cursor: pointer;
}
.warning{ color: red; }
input[type="password"], input[type="text"]{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
}
.typing{
    height: 40px;
    padding: 10px;
    background-color: white;
    border: 1px solid grey;
    margin: 20px 0;
}
.btn{
    width: 100%;
    height: 50px;
    font-size: 20px;
}
.bottom{
    margin-top: 20px;
}
.maintain{
    margin-top: -1px;
    display: inline-block;
    float: left;
}
.etc {
    display: inline-block;
    float: right;
    *{
        display: inline-block;
        margin-left: 20px;
        cursor: pointer;
    }
    *:hover{
        text-decoration: underline;
    }
}
</style>
