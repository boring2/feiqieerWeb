<template>
  <div class="banner" :data-id="activeId">
    <div v-for="(list, index) in lists" :class="'banner-img ' + [index === activeId ? 'show': '']" :data-id="index" :style="{backgroundImage: 'url(' + list.image + ')'}"></div>
    <div class="tips">
      <span @click="changeBanner" v-for="(list,index) in lists" :class="'tip ' + [index === activeId ? 'red': '']" :data-id="index"></span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {baseApi} from '../config/RouterConst'
  export default {
    data () {
      return {
        lists: [],
        activeId: 0,
        timer: false
      }
    },
    created () {
      const url = `${baseApi}/carousels`
      axios.get(url).then((resp) => {
        this.lists = resp.data.list
        setInterval(() => {
          if (this.activeId === this.lists.length - 1) {
            this.activeId = 0
            return
          }
          this.activeId += 1
        }, 4000)
      })
    },
    methods: {
      changeBanner (e) {
        const id = e.target.getAttribute('data-id')
        this.activeId = parseInt(id)
      }
    }
  }
</script>

<style lang="scss" scope>
  .banner {
    height: 380px;
    position: relative;
    .banner-img {
      height: 380px;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      opacity: 0;
      transition: opacity .8s;
      &.show {
        opacity: 1;
      }
    }
    .tips {
      width: 100%;
      position: absolute;
      bottom: 20px;
      display: flex;
      justify-content: center;
      .tip {
        cursor: pointer;
        width: 30px;
        height: 8px;
        background: #fff;
        margin: 0 8px;
        border: 1px solid #efefef;
      }
      .red {
        background: #ed008c;
      }
    }
  }
</style>