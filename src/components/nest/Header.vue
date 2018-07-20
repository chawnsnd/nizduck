<template>
  <div class="header">
    <div class="background">
    </div>
    <div class="profile">
      <div class="profile_img"></div>
      <div class="right">
        <div class="row">
          <span class="duck">웅치킨</span>
          <span class="btn">팔로우</span>
          <span class="block"><i class="fas fa-ban">차단</i></span>
          <span class="report"><i class="fas fa-flag-checkered">신고</i></span>
        </div>
        <div class="row">
          <span class="meta_section">
            <span class="meta_title">게시물</span>
            <span class="meta_content">402</span>
          </span>
          <span class="meta_section">
            <span class="meta_title">팔로워</span>
            <span class="meta_content">28.9천</span>
          </span>
          <span class="meta_section">
            <span class="meta_title">팔로우</span>
            <span class="meta_content">272</span>
          </span>
        </div>
        <div class="aboutme row">
          안녕하세요 자기소개입니당~
          안녕하세요 자기소개입니당~
          안녕하세요 자기소개입니당~
          안녕하세요 자기소개입니당~
          안녕하세요 자기소개입니당~
          안녕하세요 자기소개입니당~
          안녕하세요 자기소개입니당~
          안녕하세요 자기소개입니당~
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header{
  border-radius: 10px;
  margin-top: 20px;
  border: 1px solid #eaeaea;
  background-color: white;
}
.background{
  height: 200px;
  background-image: url(../../../tmp/omg.jpg);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.profile{
  > * { display: inline-block; }
  padding: 20px;
}
.profile_img{
  width: 130px;
  height: 130px;
  border-radius: 100%;
  display: inline-block;
  background-image: url(https://lh3.googleusercontent.com/-NTJJG92Ek_s/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7pjeQd8704Lo9OwhH3Zt-x8ro1KHA/s192-c-mo/photo.jpg);
}
.right{
  vertical-align: top;
  width: 790px;
  margin-left: 30px;
  .duck{
    font-size: 30px;
    margin-right: 20px;
  }
  .btn{
    display: inline-block;
    vertical-align: top;
    border: 2px solid salmon;
    border-radius: 100px;
    padding: 10px;
    color: salmon;
    font-weight: bold;
    cursor: pointer;
  }
  .btn:hover{
    background-color: salmon;
    color: white;
  }
  .report, .block{
    margin-left: 20px;
    font-size: 15px;
    float: right;
    cursor: pointer;
  }
  .row{
    padding: 5px 0;
  }
  .meta_section{
    font-size: 15px;
    margin-right: 10px;
  }
  .meta_title{
    font-weight: bold;
  }
  .aboutme{
    display: inline-block;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 40px;
  }
}
</style>
