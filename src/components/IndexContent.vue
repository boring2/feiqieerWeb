<template>
  <div class="content-bg">
    <div class="content">
      <div class="part">
        <h1 class="title">园所动态</h1>
        <h5 class="title">为每一位孩子提供最优质的教育！</h5>
        <div class="part-1-content">

          <div class="left roll-imgs">
            <div class="imgset">
              <img v-for="(list, index) in lists" :key="index" :src="list.gallery" :class="'imgset-img ' + [index === activeId ? 'show': '']">
            </div>
             <div class="tips">
              <span @click="changeBanner" :class="'tip ' + [index === activeId ? 'red': '']" v-for="(list, index) in lists" :key="index" :data-id="index">{{ index + 1}}</span>
            </div>
          </div>

          <div class="left article-set">
            <div v-for="(list, index) in lists" :key="index">
              <p class="left"><router-link :to="'/activity/' + list.id">{{list.title}}</router-link></p>
              <p class="right time">{{list['created_at'].substr(0, 10)}}</p>
            </div>
          </div>
          <div class="clear-both"></div>
        </div>
      </div>

      <div class="part part-2">
        <h1 class="bg-orange" id="part_2_title">寓教于乐，建立健全人格。</h1>
        <div class="columns">
          <div class="column">
            <div>
              <img src="../assets/features/feature-1.png" />
              <router-link to="/features/creative"><div class="bg-yellow item-1">创意课程</div></router-link>
            </div>
          </div>
          <div class="column">
            <router-link to="/features/course"><div class="bg-blue item-1">特色课程</div></router-link>
            <img src="../assets/features/feature-2.jpg" />
            <router-link to="/features/activity"><div class="bg-orange item-2">活动课程</div></router-link>
          </div>
          <div class="column">
            <img style="height: 150px;" src="../assets/features/feature-3.jpg" />
            <router-link to="/features/interest"><div class="bg-yellow item-2">兴趣课程</div></router-link>
            <img src="../assets/features/feature-4.jpg" />
          </div>
          <div class="column">
            <img style="height: 100px;" src="../assets/features/feature-5.jpg" />
            <img style="height: 120px;" src="../assets/features/feature-6.jpg" />
            <router-link to="/features/parenting"><div class="bg-blue item-1">亲子课程</div></router-link>
          </div>
        </div>
      </div>

      <div class="part">
        <h1 class="title">精彩回放</h1>
        <h5 class="title">收藏孩子的每一个成长瞬间！</h5>
        <div class="playback-wrap">
          <span class="arrow-icon left" @click="changeTransform($event, true)">
            <img src="../assets/left-arrow.png" />
          </span>
          <div class="playback">
            <div class="playback-inner">
              <div class="playback-list" :style="playbackListStyle">
                <router-link v-for="(list, index) in playbackLists" :key="index" :to="'/playbackPage'+'/' + list.id">
                  <img :src="list.gallery">
                </router-link>
              </div>
            </div>
          </div>
          <span class="arrow-icon right" @click="changeTransform">
            <img src="../assets/right-arrow.png"/>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RouterConst from '../config/RouterConst'
  import axios from 'axios'
  export default {
    data () {
      return {
        api: RouterConst.activity.index.api,
        lists: [],
        playbackLists: [],
        transformCount: 0,
        activeId: 0,
        initCount: 5,
        playListTimer: null,
        maxPlayListLength: 20
      }
    },
    created () {
      axios.get(this.api)
        .then((resp) => {
          this.lists = resp.data.list.slice(0, 5)
          setInterval(() => {
            if (this.activeId === this.lists.length - 1) {
              this.activeId = 0
              return
              }
              this.activeId += 1
            }, 4000)
        })

      // playback list
      axios.get(RouterConst.playback.index.api)
        .then((resp) => {
          this.playbackLists = resp.data.list.slice(0, this.maxPlayListLength)
          this.setPlayListTimer()
        })
    },
    methods: {
      changeBanner (e) {
        const id = e.target.getAttribute('data-id')
        this.activeId = parseInt(id)
      },
      changeTransform(e, isLeft) {
        clearInterval(this.playListTimer)
        this.playListTimer = null
        if (isLeft) {
          this.changeTransformLeft()
        } else {
          this.changeTransformRight()
        }
        setTimeout(()=>{
          this.setPlayListTimer()
        }, 0)
      },
      changeTransformLeft () {
        if(this.transformCount > 0) {
          this.transformCount -= 1
        }
      },
      changeTransformRight () {
        if (this.transformCount + this.initCount < this.playbackLists.length) {
          this.transformCount += 1
        }
      },
      setPlayListTimer () {
        this.playListTimer = setInterval(() => {
          if (this.transformCount >= this.playbackLists.length - this.initCount) {
            return
            }
            this.transformCount += 1
          }, 5000)
      }
    },
    computed: {
      playbackListStyle() {
        return {
          width: this.playbackLists.length * 180 + 'px',
          webkitTransform: `translateX(${-this.transformCount * 180}px)`,
          transform: `translateX(${-this.transformCount * 180}px)`
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../sass/variables';
  .content-bg {
    background: $color-content;
  }
  .roll-imgs {
    position: relative;
    width: 287px;
    height: 182px;
    margin-right: 20px;
    img {
      position: absolute;
      top: 0;
      height: 0;
      width: 100%;
      height: 100%;
    }
    .imgset-img {
      opacity: 0;
      transition: opacity .8s;
      &.show {
        opacity: 1;
      }
    }
    .tips {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
    .tip {
      font-size: 10px;
      padding: 2px 5px;
      margin: 0 5px;
      border: 1px solid;
      cursor: default;
      &.red {
        background: #ed008c;
      }
    }

  }

  .article-set {
    width: 600px;
    div {
      padding: 10px;
      overflow: hidden;
      border-bottom: 1px dashed #eee;
    }
    a, p.time {
      color: $color-content-title;
    },
    a:hover {
      color: #ff0000;
    }
  }

  .part-2 {
    a {
      color: #fff;
    }
  }
  .content {
    margin: 0 auto;
    background: #fff;
    width: 960px;
    .title {
      color: $color-content-title;
    }
    p {
      color: #000;
    }
    h1 {
      font-size: 32px;
      line-height: 1.2;
      padding-left: 5px;
    }
    h5 {
      line-height: 1.2;
      padding-left: 5px;
    }
    .columns {
      display: flex;
      justify-content: space-between;
    }
    .column {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      text-align: center;
      width: 24.5%;
      margin: 0;
      padding: 0;
      img {
        max-width: 100%;
        margin-bottom: 5px;
      }
    }
    .item-1 {
      font-size: 50px;
      padding: 30px 10px;
      text-align: center;
    }
    .item-2 {
      font-size: 35px;
      padding: 15px 10px;
      text-align: center;
    }
    .bg-orange {
      background: $color-orange;
    }
    .bg-blue {
      background: $color-blue;
    }
    .bg-yellow {
      background: $color-yellow;
    }
    .part {
      padding-top: 30px;
      padding-bottom: 50px;
    }
    .part-1-content {
      margin-top: 50px;
      img {
        margin-right: 20px;
      }
    }

    .playback-wrap {
      position: relative;
      overflow:hidden;
    }

    .playback {
      width: 900px;
      height: 140px;
      align-items: center;
      margin: 20px auto 0 auto;
      .playback-inner {
        overflow: hidden;
        margin: 0 auto;
      }
      .playback-list {
        max-width: 3600px;
        overflow: hidden;
        transition: transform 1s;
      }
      img {
        float: left;
        width: 140px;
        height: 140px;
        margin: 0 20px;
        border-radius: 140px;
      }
    }
    .arrow-icon {
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      cursor: pointer;
      &.left {
        left: 10px;
      }
      &.right {
        right: 10px;
      }
    }
  }

  #part_2_title {
    display: inline-block;
    padding: 5px;
    margin-bottom: 30px;
  }
</style>