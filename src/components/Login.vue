<template>
    <div class="login">
        <div class="login_box">
            <div class="title" @click="goMain">NIZDUCK</div>
            <div class="form">
                <div class="typing"><input type="text" placeholder="아이디"/></div>
                <div class="typing"><input type="password" placeholder="패스워드"/></div>
                <div class="submit"><btn class="pink">로그인</btn></div>
            </div>
            <div class="bottom">
                <div class="maintain"><label class="maintain"><input type="checkbox"/>로그인 상태 유지</label></div>
                <div class="etc">
                    <div class="find_id" @click="goFindId">아이디 찾기</div>
                    <div class="find_id" @click="goFIndPw">비밀번호 찾기</div>
                    <div class="find_id" @click="goJoin">회원가입</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'login'
    }
  },
  methods: {
    goJoin () {
      this.$router.push('/join')
    },
    goMain () {
      this.$router.push('/')
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
input[type='text'], input[type='password']{
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
.typing:hover{
    border: 1px solid pink;
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
