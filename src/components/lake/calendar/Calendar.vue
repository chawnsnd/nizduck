<template>
<div class="calendar">
  <div class="query_bar">
    쿼리바
  </div>
  <div class="calendar_box">
    <div class="title">
      <span>2018</span>년 <span>07</span>월
    </div>
    <div class="calendar">
      <div class="head">
        <span class="day_of_the_week">일</span>
        <span class="day_of_the_week">월</span>
        <span class="day_of_the_week">화</span>
        <span class="day_of_the_week">수</span>
        <span class="day_of_the_week">목</span>
        <span class="day_of_the_week">금</span>
        <span class="day_of_the_week">토</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      msg: 'Welcome to Nizduck'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.message{
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  height: 500px;
}
</style>
