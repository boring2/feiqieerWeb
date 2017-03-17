<template>
  <div class="content-bg">
    <div class="admissions content">
      <sidebar :title="title" :sidebarItems="sidebarItems"></sidebar>
      <div class="page-content-wrap">
        <bread-crumbs :path="path"></bread-crumbs>
        <router-view :pageContent="pageContent"></router-view>
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
        path: '/admissions',
        title: RouterConst.admissions.index.title,
        sidebarItems: [
          {title: RouterConst.admissions.guide.title, href:RouterConst.admissions.guide.href},
          {title: RouterConst.admissions.charges.title, href:RouterConst.admissions.charges.href},
          {title: RouterConst.admissions.admission.title, href:RouterConst.admissions.admission.href},
          {title: RouterConst.admissions.visit.title, href:RouterConst.admissions.visit.href},
        ],
        pageContent: '',
        cache: {},
        indexApi: RouterConst.admissions.index.api
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        window.scroll(0, 0)
        const path = this.$route.path
        const pathArr = path.split('/')
        const path1 = pathArr[1]
        const path2 = pathArr[2]
        let api
        if (path2) {
          api = RouterConst[path1][path2].api
          if (!api) {
            this.path = path
            return
          }
        } else {
          api = RouterConst.admissions.index.api
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
    },
    watch: {
      $route() {
        this.fetchData()
      }
    }
  }
</script>

<style lang="scss">
  @import '../sass/variables';
  .content-bg {
    overflow: hidden;
  }
  .admissions {
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