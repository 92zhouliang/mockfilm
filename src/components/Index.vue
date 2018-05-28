<template>

  <div id='index'>
    <van-nav-bar :title="title" />
    <van-list v-model="loading" :finished="finished" @load="onLoad">
      <!-- <van-cell v-for="(index,item) in listObj.listData" :key="index" :title="item + ''" /> -->
      <van-card v-for="(item,index) in listObj.listData" :key="index" :title="item.nm" desc="描述" :thumb="item.img.replace('w.h','128.180')"
      />
    </van-list>
    <tabbar/>
  </div>

</template>
<style scoped lang='less'>
  .van-card__content {
    .van-card__row {
      .van-card__title {
        font-size: 17px;
        color: #333;
        font-weight: 700;
        padding-right: 5px;
        flex-shrink: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }

</style>
<script>
  import Tabbar from './Tabbar.vue'
  export default {
    name: 'index',
    data() {
      return {
        title: '1111',
        loading: false,
        finished: true,
        listObj: {
          listData: []
        }
      }
    },
    components: {
      Tabbar
    },
    mounted() {
      this.movieList(); //初始化获取
    },
    methods: {
      movieList() {
        this.$fetch('/maoyan/ajax/movieOnInfoList').then((res) => {
          console.log(res.movieList);
          this.listObj.listData = res.movieList;
        }).catch((err) => {
          console.log(err);
        })
      },
      onLoad() {
        // setTimeout(() => {
        //   for (let i = 0; i < 10; i++) {
        //     this.list.push(this.list.length + 1);
        //   }
        //   this.loading = false;

        //   if (this.list.length >= 40) {
        //     this.finished = true;
        //   }
        // }, 500);
      }
    }
  }

</script>

