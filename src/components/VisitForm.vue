<template>
  <div class="visit-form form">
    <div class="title">预约入园参观</div>
    <div class="item"><input v-model="name" placeholder="宝宝姓名" type="text" name="name" /></div>
    <div class="item"><input v-model="phone" placeholder="联系电话" type="text" name="phone" /></div>
    <div class="item"><input v-model="babyAge" placeholder="宝宝年龄" type="number" name="baby_age" /></div>
    <div class="item"><input v-model="time" placeholder="预约时间" type="datetime-local" name="appoint_time" /></div>
    <div class="item"><span class="submit-button" @click="checkout">确定预约</span></div>
  </div>
</template>

<script>
  import RouterConst from '../config/RouterConst'
  import axios from 'axios'
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
          appoint_time: this.time.replace('T', ' ') + ':00'
        })
        .then(function (response) {
          if (response.status === 204) {
            alert('报名成功，请等待我们通知')
          }
        })
        .catch(function (error, a,b) {
          alert("提交失败，请检查你的手机号码是否正确")
        });
      }
    }
  }
</script>

<style lang="scss">
</style>