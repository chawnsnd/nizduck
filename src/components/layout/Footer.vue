<template>
    <div class="footer">
      <router-link to="/">서비스소개</router-link>
      <router-link to="/">광고안내</router-link>
      <router-link to="/">제휴안내</router-link>
      <router-link to="/">후원안내</router-link>
      <router-link to="/">이용약관</router-link>
      <router-link to="/">개인정보처리방침</router-link>
      <router-link to="/">청소년보호정책</router-link>
      <router-link to="/">문의하기</router-link>
      <div class="copyright">
        Copyright ⓒ 2018 - 2018 nizduck. All rights reserved.
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  background-color: white;
  border-top: 2px solid salmon;
  width: 100%;
  text-align: center;
  line-height: 50px;
  vertical-align: center;
  bottom: 0;
  *{
    margin: 0 10px;
    text-decoration: none;
    color: black;
  }
}
</style>
