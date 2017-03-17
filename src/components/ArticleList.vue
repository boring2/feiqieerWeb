<template>
  <div class="article-list">
    <p class="list" :key="index" v-for="(list, index) in lists">
      <router-link :to="path + '/' + list.id">{{list.title}}</router-link>
      <span class="time">{{ list['created_at'].substr(0, 10) }}</span>
    </p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        lists: []
      }
    },
    props: ['api', 'path'],
    created () {
      this.fetchData()
    },
    watch: {
      path () {
        this.fetchData()
      }
    },
    methods: {
      fetchData() {
        axios.get(this.api)
          .then((resp) => {
            this.lists = resp.data.list
            // this.pageContent = resp.list
          })
      }
    }
  }
</script>

<style lang="scss">
  @import '../sass/variables.scss';
  .article-list {
    max-height: 500px;
    overflow: auto;
    margin-top: 10px;
    .list {
      border-bottom: 1px dashed #eee;
      margin-left: 10px;
      a {
        color: #666;
      }
      a:hover {
        color: #ff0000;
      }
    }
    .time {
      float: right;
      margin-right: 10px
    }
  }
</style>