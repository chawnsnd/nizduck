<template>
<div class="calendar">
  <mini-header></mini-header>
  <h1>{{$route.params.date}}일의 기록</h1>
  <h1>일정추가</h1>
  <h1>갤러리</h1>
  <h1>댓글</h1>
  <h1>메모</h1>
</div>
</template>

<script>
import MiniHeader from '../../layout/MiniHeader'
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
  },
  components: {
    'mini-header': MiniHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.calendar{
  background-color: white;
}
</style>
