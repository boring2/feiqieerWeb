<template>
  <div class="visit-form form">
    <div class="title">预约入园参观</div>
    <div class="item"><input v-model="name" placeholder="家长姓名" type="text" name="name" /></div>
    <div class="item"><input v-model="phone" placeholder="联系电话" type="text" name="phone" /></div>
    <div class="item"><input v-model="babyAge" placeholder="宝宝年龄" type="number" name="baby_age" /></div>
    <div class="item">
      <el-date-picker
        v-model="time"
        type="datetime"
        placeholder="选择日期时间"
      >
      </el-date-picker>
    </div>
    <div class="item"><span class="submit-button" @click="checkout">确定预约</span></div>
  </div>
</template>

<script>
  import RouterConst from '../config/RouterConst'
  import axios from 'axios'
  import dateFormat from 'dateformat'
  export default {
    data () {
      return {
        api: RouterConst.post.visit.api,
        name: '',
        phone: '',
        babyAge: '',
        time: ''
      }
    },
    methods: {
      checkout () {
        axios.post(this.api, {
          name: this.name,
          phone: this.phone,
          baby_age: this.babyAge,
          appoint_time: dateFormat(this.time, 'yyyy-mm-dd HH:MM:ss')
        })
        .then(function (response) {
          if (response.status === 204) {
            alert('报名成功，请等待我们通知')
          }
        })
        .catch(function (error) {
          alert(error.response.data)
        });
      }
    }
  }
</script>

<style lang="scss">
</style>