<template>
  <div class="content-bg">
    <div class="about content">
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
        indexApi: RouterConst.about.index.api,
        title: RouterConst.about.index.title,
        sidebarItems: [
          {title: RouterConst.about.intro.title, href:RouterConst.about.intro.href},
          {title: RouterConst.about.concept.title, href:RouterConst.about.concept.href},
          {title: RouterConst.about.facility.title, href:RouterConst.about.facility.href},
          {title: RouterConst.about.features.title, href:RouterConst.about.features.href},
          {title: RouterConst.about.team.title, href:RouterConst.about.team.href},
          {title: RouterConst.about.histroy.title, href:RouterConst.about.histroy.href},
          {title: RouterConst.about.background.title, href:RouterConst.about.background.href},
          {title: RouterConst.about.word.title, href:RouterConst.about.word.href},
          {title: RouterConst.about.rules.title, href:RouterConst.about.rules.href},
          {title: RouterConst.about.contact.title, href:RouterConst.about.contact.href}
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
        window.scroll(0,0)
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
  .about {
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