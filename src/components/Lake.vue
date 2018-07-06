<template>
  <div class="lake">
    <router-link to="/lake/detail">아티스트 레이크 클릭</router-link>
  </div>
</template>

<script>
export default {
  name: 'Lake',
  data () {
    return {
      msg: 'Welcome to Nizduck'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.lake{
  width: 1300px;
  margin: auto;
  border: 1px solid pink;
}
</style>
