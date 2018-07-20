<template>
  <div>
    <main-header></main-header>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  data () {
    return {
      msg: 'asf'
    }
  },
  components: {
    'main-header': Header,
    'main-footer': Footer
  }
}
</script>

<style>
</style>
