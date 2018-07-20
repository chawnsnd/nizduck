<template>
  <div class="guestbook">
    <div class="input">
      <div class="duck">웅치킨</div>
        <div class="right">
          <textarea rows="5" style=" resize: none; border:0; outline: none;"></textarea>
          <btn>작성</btn>
        </div>
    </div>
    <div class="posts">
      <div class="post">
        <div class="duck">웅치킨</div>
        <div class="right">
          <div class="content">왔다감</div>
          <div class="meta">
            <span class="time">10분 전</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../Button'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    'btn': Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.guestbook{
  min-height: 500px;
  background-color: white;
  width: 600px;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
}
.input{
  background-color: #eaeaea;
  display: flex;
  padding-right: 5px;
  .duck{
    flex: 1;
    vertical-align: center;
    text-align: center;
    margin: auto;
  }
  .right{
    padding: 5px 0;
    display: flex;
    flex: 5;
    textarea{
      flex: 5;
    }
    .btn{
      border-radius: 0;
    }
  }
}
.post{
  display: flex;
  border-bottom: 1px solid grey;
  .duck{
    font-weight: bold;
    cursor: pointer;
    color: #365899;
    flex: 1;
    margin: auto;
    text-align: center;
  }
  .right{
    padding: 10px;
    flex: 5;
  }
  .meta{
    margin-top: 5px;
    color: grey;
  }
}
</style>
