<template>
  <header>
    <div class="wrap">
      <div class="user-info" style="display: none">
        游客，欢迎您
        <a href="#">[登录]</a>
        <a href="#">[免费注册]</a>
        <a href="#">[忘记密码]</a>
      </div>
      <div class="title">
        <h1 class="chinese-title">菲切尔国际幼儿园</h1>
        <h2 class="english-title">FTLE Kindergarden</h2>
      </div>
      <div class="phone-number">
        <!--<img src="../assets/phone.png" />-->
        <span>成长热线：</span>
        <span>020-12345678</span>
      </div>
      <div class="clear-both"></div>
    </div>
  </header>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  @import '../sass/variables';
  header {
    background: $color-head-footer;
    height: 140px;
    a {
      color: #fff;
      font-family: 宋体;
    }
    .wrap {
      padding: 10px 100px;
    }
    .phone-number {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
      span {
        margin-left: 5px;
        line-height: 28px;
      }
    }
    h1 {
      font-size: 35px;
      line-height: 1.2;
      margin: 5px 0;
    }
    h2 {
      font-size: 20px;
      line-height: 1.2;
    }
  }
</style>