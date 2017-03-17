<template>
  <div class="content-bg">
    <div class="teachers content">
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
        title: RouterConst.teachers.index.title,
        sidebarItems: [
          {title: RouterConst.teachers.master.title, href:RouterConst.teachers.master.href},
          {title: RouterConst.teachers.team.title, href:RouterConst.teachers.team.href},
          {title: RouterConst.teachers.teacher.title, href:RouterConst.teachers.teacher.href}
        ],
        indexApi: RouterConst.teachers.index.api,
        cache: {}
      }
    },
    created() {
      this.fetchData()
    },
    watch: {
      $route() {
        this.fetchData()
      }
    },
    methods:{
      fetchData() {
        window.scroll(0, 0)
        const path = this.$route.path
        const pathArr = path.split('/')
        const path1 = pathArr[1]
        const path2 = pathArr[2]
        let api
        if (path2 && isNaN(path2)) {
          api = RouterConst[path1][path2].api
          this.indexApi = api
        } else {
          api = RouterConst.teachers.index.api
        }
        axios.get(api)
          .then((resp) => {
            this.path = path
          })
        }
    }
  }
</script>

<style lang="scss">
  @import '../sass/variables';
  .content-bg {
    overflow: hidden;
  }
  .teachers {
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