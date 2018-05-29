<template>
  <div id='tabbar'>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">
        <span>电影</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? icon.active : icon.normal" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="chat">影院</van-tabbar-item>
      <van-tabbar-item icon="records">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style scoped>


</style>
<script>
  export default {
    name: 'tabbar',
    data() {
      return {
        active: 0,
        icon: {
          normal: '//img.yzcdn.cn/1.png',
          active: '//img.yzcdn.cn/2.png'
        }
      }
    }
  }

</script>

