<template>
  <div class="content-bg">
    <div class="features content">
      <sidebar :title="title" :sidebarItems="sidebarItems"></sidebar>
      <div class="page-content-wrap">
        <bread-crumbs :path="path"></bread-crumbs>
        <p class="page-content" v-html="pageContent"></p>
      </div>
      <router-view></router-view>
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
        indexApi: RouterConst.features.index.api,
        title: RouterConst.features.index.title,
        sidebarItems: [
          {title: RouterConst.features.course.title, href:RouterConst.features.course.href},
          // {title: RouterConst.features.creative.title, href:RouterConst.features.creative.href},
          // {title: RouterConst.features.activity.title, href:RouterConst.features.activity.href},
          // {title: RouterConst.features.parenting.title, href:RouterConst.features.parenting.href}
          {title: RouterConst.features.learnActivity.title, href: RouterConst.features.learnActivity.href},
          {title: RouterConst.features.gameActivity.title, href: RouterConst.features.gameActivity.href},
          {title: RouterConst.features.sportsActivity.title, href: RouterConst.features.sportsActivity.href},
          {title: RouterConst.features.lifeGuide.title, href: RouterConst.features.lifeGuide.href},
          {title: RouterConst.features.dailyRest.title, href: RouterConst.features.dailyRest.href}
        ],
        pageContent: '',
        cache: {}
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      $route() {
        this.fetchData()
      }
    },
    methods: {
      fetchData() {
        window.scroll(0, 0)
        const path = this.$route.path
        const pathArr = path.split('/')
        const path1 = pathArr[1]
        const path2 = pathArr[2]
        let api
        if (path2) {
          api = RouterConst[path1][path2].api
        } else {
          api = this.indexApi
        }
        if (this.cache[path]) {
          this.pageContent = this.cache[path]
          this.path = path
        } else {
          axios.get(api)
            .then((resp) => {
              this.pageContent = resp.data.value
              this.path = path
              this.cache[path] = resp.data.value
            })
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../sass/variables';
  .content-bg {
    overflow: hidden;
  }
  .features {
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
    }
  }

</style>