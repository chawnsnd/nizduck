<template>
  <div class="main">
      <card></card>
      <card></card>
      <card></card>
      <card></card>
      <card></card>
      <wing></wing>
  </div>
</template>

<script>
import Card from './Card'
import Wing from './Wing'

export default {
  components: {
    'card': Card,
    'wing': Wing
  },
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
  top: 130px;
  margin-left: 700px;
}
.card{
  margin-top: 20px;
}
</style>
