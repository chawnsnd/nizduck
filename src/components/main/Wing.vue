<template>
    <div class="wing">
        <div class="wing_box" v-if="!didLogin">
            <div class="form">
                <btn class="pink" @click="goToLogin()" style="display: inline-block;">로그인 하러가기</btn>
            </div>
            <div class="bottom">
                <div class="btns">
                    <router-link to="/join"><span>회원가입</span></router-link>
                    <span>아이디/비밀번호 찾기</span>
                </div>
            </div>
        </div>
        <div class="wing_box" v-if="didLogin">
            <div class="user">
                <div class="profile">
                    <img v-if="me.profile" :src="me.profile" width="50px" height="50px" />
                    <img v-else src="../../assets/logo.png" width="50px" height="50px" />
                </div>
                <div class="meta">
                    <div class="duck">{{me.duckname}}</div>
                    <div class="email">{{me.email}}</div>
                </div>
            </div>
        </div>
        <div class="wing_box last" v-if="didLogin">
            <div class="section">
                <div class="title">MY LAKE</div>
                <div class="lakes">
                    <div class="lake">{{me.bias}}</div>
                </div>
            </div>
            <div class="section" style="margin-bottom: 0;">
                <div class="title">Hmm...teresting</div>
                <div class="lakes">
                    <div class="lake" v-for="interest in me.interest" :key="interest">{{interest}}</div>
                </div>
            </div>
        </div>
        <div class="footer">
            <span>서비스소개</span> |
            <span>광고안내</span> |
            <span>제휴안내</span> |
            <span>후원안내</span> |
            <span>이용약관</span> |
            <span>개인정보처리방침</span> |
            <span>청소년보호정책</span> |
            <span>문의하기</span>
        </div>
    </div>
</template>

<script>
import User from '../../models/user'

export default {
  data () {
    return {
      msg: 'sadf',
      didLogin: false,
      me: {},
      form: {
        email: null,
        password: null,
        keep: false
      }
    }
  },
  methods: {
    goToLogin () {
      this.$router.push('/login')
    }
  },
  mounted () {
    this.didLogin = User.didLogin
    this.me = User.me
  }
}
</script>

<style lang="scss" scoped>
.wing_box {
    border: 1px solid #eaeaea;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
}
.last { margin-bottom: 0; }
.form{
    display: flex;
    margin-bottom: 5px;
    .typing{
        flex: 4;
        input{
            padding-left: 5px;
            margin-right: 5px;
        }
        input[type='text']{
            margin-bottom: 5px;
        }
    }
    .btn{ flex: 1; font-size: 11px;}
}
.btns{
    margin-top: 5px;
    * { cursor: pointer; margin-right: 5px;}
    *:hover{ text-decoration: underline; }
}
.user{
    display: flex;
    cursor: pointer;
    .profile{
        width: 50px;
        height: 50px;
        border-radius: 100%;
        display: inline-block;
    }
    .meta{
        margin-left: 10px;
        .duck{
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 3px;
        }
        .email{
            font-weight: bold;
        }
    }
}

.section {
    margin-bottom: 30px;
}
.title {
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 10px;
}
.lake{
    cursor: pointer;
    margin: 10px 0;
}
.footer {
    margin-top: 10px;
    span {
        display: inline-block;
        cursor: pointer;
        margin: 0 10px;
    }
    color: lightsalmon;
}
</style>
