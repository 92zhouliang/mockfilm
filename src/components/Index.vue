<template>

  <div id='index'>
    <van-nav-bar :title="title" class="navbar-title"/>
    <van-nav-bar>
  <div slot="left">区域选择</div>
  <div slot="title">
    
  </div>
  <van-icon name="search" slot='right' @click="searchMov"/>
</van-nav-bar>
    <van-list v-model="loading" :finished="finished" @load="onLoad">
      <van-card v-for="(item,index) in listObj.listData" :key="index" :title="item.nm" :thumb="item.img.replace('w.h','128.180')">
        <div slot='desc' class="text-left desc-content">
          <div class="score line-ellipsis" v-if='item.globalReleased'>
            <span class="score-suffix">观众评 </span>
            <span class="grade">{{item.sc}}</span>
            <div class="actor line-ellipsis">主演: {{item.star}}</div>
            <div class="show-info line-ellipsis">{{item.showInfo}}</div>
          </div>
          <div class="score line-ellipsis" v-else>
            <span class="grade">{{item.wish}}</span>
            <span class="score-suffix">人想看 </span>
            <div class="actor line-ellipsis">主演: {{item.star}}</div>
            <div class="show-info line-ellipsis">{{item.showInfo}}</div>
          </div>
          <div class="button-block" v-if='item.globalReleased'>

            <div class="btn normal">
              <span class="fix" data-bid="dp_wx_home_movie_btn">预售</span>
            </div>

          </div>
          <div class="button-block" v-else>
            <div class="btn pre">
              <span class="fix" data-bid="dp_wx_home_movie_btn">预售</span>
            </div>
          </div>
        </div>

      </van-card>
    </van-list>
    <tabbar/>
  </div>

</template>
<style lang="less" scoped>
  @import './../assets/less/base.less';
  .line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .van-card__title {
    font-size: 17px;
    color: #333;
    font-weight: 700;
    padding-right: 5px;
    flex-shrink: 1;
  }

  .desc-content {
    padding-right: 5px;
    margin-right: 48px;
    overflow: hidden;
    .score {
      font-size: 13px;
      color: #666;
      .score-suffix {
        //
      }
      .grade {
        font-weight: 700;
        color: #faaf00;
        font-size: 15px;
      }
      .actor,
      .show-info {
        margin-top: 6px;
        line-height: 15px;
      }
    }
  }

  .button-block {
    font-size: 12px;
    position: absolute;
    right: 14px;
    top: 0;
    bottom: 0;
    height: 27px;
    margin: auto;
    .btn {
      width: 47px;
      height: 27px;
      line-height: 28px;
      text-align: center;
      box-sizing: border-box;
      background-color: #f03d37;
      color: #fff;
      border-radius: 4px;
      white-space: nowrap;
      font-size: 12px;
      cursor: pointer;
    }
    .btn.pre {
      background-color: #3c9fe6;
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

