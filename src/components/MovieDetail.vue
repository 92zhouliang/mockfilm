<template>
  <div id='MovieDetail'>
    <van-nav-bar :title="title" class="navbar-title" fixed v-cloak/>
    <div class='marTB50'>
      <div class="movie-detail">
        <div class="movie-filter"></div>
        <div class="poster-bg" :style="albumImg"></div>
        <div class="detail box-flex">
          <div class="poster" v-cloak>
            <img :src="detailMovie.img.replace('w.h','128.180')"/>
          </div>
          <div class="content flex">
            <div class="title middle line-ellipsis">{{detailMovie.nm}}</div>
            <div class="title-en-name line-ellipsis">{{detailMovie.enm}}</div>
            <div class="score line-ellipsis">
              {{detailMovie.sc}}
              <span class="snum">({{sunmTofixed}}万人评)</span>
            </div>
            <div class="type line-ellipsis">
              <span>{{detailMovie.cat}}</span>
              <div class="type-group">
              </div>
            </div>
            <div class="src line-ellipsis">{{detailMovie.src}}/{{detailMovie.dur}}分钟</div>
            <div class="pubDesc line-ellipsis">{{detailMovie.pubDesc}}</div>
          </div>
        </div>
        <div class="arrow-g">
          <van-icon name="arrow" color="white" />
        </div>
      </div>
      <div>
        <!-- <van-tabs>
  <van-tab v-for="index in 8" :title="'选项 ' + index" :key="index" line-width="115">
    内容 {{ index }}
  </van-tab>
</van-tabs> -->
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import './../assets/less/base.less';
  .movie-detail {
    height: 188px;
    position: relative;
    cursor: pointer;
    .movie-filter {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: #333;
    }
    .arrow-g {
      position: absolute;
      width: 10px;
      right: 15px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    .poster-bg {
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
      position: absolute;
      -webkit-filter: blur(1.2rem);
      filter: blur(1.2rem);
      background-size: cover;
      background-repeat: no-repeat;
      opacity: .55;
    }
    .box-flex {
      display: -webkit-box;
      display: flex;
    }
    .detail {
      height: 150px;
      padding: 19px 30px 19px 15px;
      .poster {
        img {
          width: 110px;
          height: 150px;
          box-sizing: border-box;
        }
      }
      .content {
        overflow-x: hidden;
        margin-left: 12.5px;
        line-height: 1;
        color: #fff;
        .title {
          font-size: 20px;
          margin-top: 2px;
          font-weight: 700;
          overflow: hidden;
        }
        .title-en-name,
        .type,
        .src,
        .pubDesc,
        .snum {
          margin-top: 10px;
          font-size: 12px;
          color: #fff;
          opacity: .8;
        }
        .score {
          font-size: 18px;
          font-weight: 700;
          color: #fc0;
          margin-top: 11px;
        }
      }
    }
  }

</style>
<script>
  export default {
    name: 'MovieDetail',
    data() {
      return {
        title: '',
        albumImg:'',
        detailMovie: null,
      }
    },
    mounted() {
      this.getMovieDetail()
    },
    computed:{
        sunmTofixed(){
            if(this.detailMovie.snum)return (this.detailMovie.snum/10000).toFixed(1);
        }
    },
    methods: {
      getMovieDetail() {
        this.$fetch('/maoyan/ajax/detailmovie', {
          movieId: this.$route.params.movieDetailId
        }).then((res) => {
            console.log(res);
          this.detailMovie = res.detailMovie;
          this.title = res.detailMovie.nm;
          console.log(res.detailMovie.albumImg);
          this.albumImg=res.detailMovie.albumImg;
        }).catch((er) => {
          console.log(er);
        })
      }
    }
  }

</script>

