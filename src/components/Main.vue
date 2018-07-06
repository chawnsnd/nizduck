<template>
  <div class="main">
      <card></card>
      <card></card>
      <div class="wing">
        <div class="wing_box">
          <div class="title">
            내 레이크
          </div>
          <div class="lakes">
            <div class="lake">트와이스</div>
            <div class="lake">레드벨벳</div>
            <div class="lake">마마무</div>
            <div class="lake">여자친구</div>
            <div class="lake">블랙핑크</div>
            <div class="lake">오마이걸</div>
            <div class="lake">러블리즈</div>
          </div>
        </div>
        <div class="footer">약관 등등</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Nizduck'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main{
  width: 1000px;
  margin: auto;
}
.wing{
  width: 300px;
  position: fixed;
  top: 100px;
  margin-left: 700px;
  .wing_box{
    border: 1px solid #eaeaea;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
  }
  .title{
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 5px;
  }
  .footer{
    text-align: center;
    color: pink;
  }
}
</style>
