<template>

  <div id='index'>
    <van-nav-bar :title="title" />
    <tabbar/>
  </div>

</template>
<style scoped>


</style>
<script>
  import Tabbar from './Tabbar.vue'
  export default {
    name: 'index',
    data() {
      return {
        title: '猫眼电影'
      }
    },
    components: {
      Tabbar
    }
  }

</script>

