<template>
  <div class="content-bg">
    <div class="playback content">
      <sidebar :title="title" :sidebarItems="sidebarItems"></sidebar>
      <div class="page-content-wrap">
        <bread-crumbs :path="path"></bread-crumbs>
        <router-view :api="indexApi" :path="path"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Sidebar from '../components/Sidebar'
  import BreadCrumbs from '../components/BreadCrumbs'
  import RouterConst from '../config/RouterConst'

  export default {
    components: {
      Sidebar,
      BreadCrumbs
    },
    data () {
      return {
        path: this.$route.path,
        title: RouterConst.playbackPage.index.title,
        sidebarItems: [],
        indexApi: RouterConst.playbackPage.index.api
      }
    },
    created () {
      window.scroll(0, 0)
    },
    beforeRouteUpdate (to, from, next) {
      next()
    },
    beforeRouteLeave (to, from, next) {
      next()
    }
  }
</script>

<style lang="scss">
  @import '../sass/variables';
  .content-bg {
    overflow: hidden;
  }
  .playback {
   &.content {
      overflow: hidden;
      padding: 20px;
    }
    .page-content-wrap {
      width: 770px;
      float: right;
      display: inline-block;
      overflow: hidden;

      p {
        color: $color-content-title;
        font-size: 14px;
        line-height: 2.1;
      }
      img {
        display: block;
        margin: 0 auto;
      }
    }
  }

</style>