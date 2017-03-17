<template>
  <div class="sidebar">
    <ul>
      <li class="sidebar-title" v-if="title">
        {{ title }}
      </li>
      <li class="sidebar-item" v-for="(item, index) in sidebarItems" :key="index">
        <router-link :to="item.href">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      sidebarItems: {type: Array, required: true}
    },
    methods: {
      changeRoute (event) {
        console.log("ccccccccccccccccccc", event);
        this.$emit('routeChange', event)
      }
    }
  }
</script>

<style lang="scss">
  @import '../sass/variables.scss';
  $color-line: #ccc;
  .sidebar {
    float: left;
    display: inline-block;
    color: #000;
    .sidebar-title {
      background: url("../assets/menu.png");
      background-repeat: no-repeat;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom: 0;
      height: 37px;
      line-height: 37px;
      padding-left: 45px;
      color: #fff;
    }
    ul {
      width: 170px;
    }
    li {
      display: block;
      a {
        font-size: 12px;
        background: url("../assets/menu_bg.png");
        background-repeat: no-repeat;
        height: 35px;
        line-height: 35px;
        padding-left: 45px;
        display: block;
        color: #000;
      }
      a:hover, a.router-link-active{
        background: url("../assets/menu_bg.png") 0 -35px;
        background-repeat: no-repeat;
        color: #fff;
      }
    }
  }
  .sidebar-title {
    color: #000;
  }
</style>