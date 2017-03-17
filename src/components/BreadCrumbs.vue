<template>
  <div class="bread-crumbs" v-if="path">
    <div class="location">
      <span>你的位置</span>
      <router-link :key="index" v-for="(location, index) in locations" :to="location.path" >{{location.title}}</router-link>
    </div>
  </div>
</template>

<script>
  import RouterConst from '../config/RouterConst'
  export default {
    data () {
      return {
        locations: []
      }
    },
    created () {
      this.changeLocation()
    },
    methods: {
      changeLocation () {
        const pathArr = this.path.split('/')
        const path1 = pathArr[1]
        const path2 = pathArr[2]
        const location1 = {}
        location1.title = RouterConst[path1].index.title
        location1.path = RouterConst[path1].index.href
        this.locations = [location1]
        let location2 = {}
        if (path2 && isNaN(path2)) {
          location2.title = RouterConst[path1][path2].title
          location2.path = RouterConst[path1][path2].href
          this.locations = [location1, location2]
        }
      }
    },
    watch: {
      path() {
        this.changeLocation()
      }
    },
    props: ['path']
  }
</script>

<style lang="scss">
  @import '../sass/variables';
  .bread-crumbs {
    display: inline-block;
    font-size: 12px;
    color: $color-content-title;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    height: 30px;
    line-height: 32px;
    width: 770px;
    background: url('../assets/location_ico.png') no-repeat 13px 10px;
    .location {
      span {
        float: left;
        width: 55px;
        padding: 0 25px 0 30px;
        background: url('../assets/location_arr.png') no-repeat right;
      }
      a {
        float: left;
        color: #666;
        padding: 0 25px 0 13px;
        background: url('../assets/location_arr.png') no-repeat right;
      }
    }
  }
</style>