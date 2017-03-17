<template>
  <div class="right-content">
    <p class="title">{{ title }}</p>
    <div v-html="content"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        title: '',
        content: ''
      }
    },
    created () {
      console.log('--id, ', this.$route.params.id)
      const url = `http://ftle.iqiuqiu.me/api/articles/${this.$route.params.id}`
      axios.get(url).then((resp) => {
        console.log(resp)
        this.content = resp.data.content
        this.title = resp.data.title
      })
    }
  }
</script>

<style lang="scss" scoped>
  .right-content {
    margin-top: 10px;
    .title {
      text-align: center;
      font-size: 20px;
    }
  }
</style>