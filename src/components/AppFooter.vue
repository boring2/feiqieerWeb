<template>
  <footer class="footer">
    <div class="wrap">
      <div class="footer-left">
        <div class="footer-left-top">
          <div class="contact-us">Contact Us</div>
          <router-link :to="contact"><div>联系我们</div></router-link>
        </div>
        <div class="footer-left-bottom">
          <router-link :to="careers"><div>招贤纳士</div></router-link>
          <router-link :to="join"><div style="margin-top: 20px;">加盟我们</div></router-link>
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-right-top">
          <div class="left">菲切尔国际幼儿园</div>
          <div class="right">
            <img class="wechat" src="../assets/wechat.png"/>
            <span>官方微信</span>
          </div>
        </div>
        <div class="right">
          <div>
            <img src="../assets/erweima.jpg" width="70px;"/>
            <div class="subscribe-number">订阅号</div>
          </div>
        </div>
        <div class="footer-right-bottom">
          <div class="left">
            <div>电话：020-89282586/89282062</div>
            <div>邮编：510000</div>
            <div>地址：广州市天河区粤垦路侨源二街13号</div>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import RouterConst from '../config/RouterConst'
  export default {
    data () {
      return {
        contact: RouterConst.contacts.contact.href,//'/contacts/contact',
        join: RouterConst.contacts.join.href,
        careers: RouterConst.contacts.careers.href
      }
    }
  }
</script>

<style lang="scss" scope>
  @import '../sass/variables';
  .footer {
    height: 200px;
    background: $color-head-footer;
    color: #fff;
    padding-top: 35px;
    box-sizing: border-box;
    a {
      color: #fff;
    }
    .wrap {
      overflow: hidden;
    }
    .contact-us {
      margin-bottom: 5px;
    }
    .footer-left {
      vertical-align: top;
      display: inline-block;
      padding: 0 50px;
      text-align: center;
      border-right: 1px solid;
      border-style: dashed;
    }

    .footer-left-top {
      margin-bottom: 15px;
      font-size: 20px;
    }

    .wechat {
      width: 35px;
      margin-right: -10px;
    }
    .footer-left-bottom {
      div {
        margin: 5px 0;
      }
    }
    .footer-right-top {
      overflow: hidden;
    }
    .footer-right {
      display: inline-block;
      width: 730px;
      padding-left: 50px;
    }
    .footer-right-top {
      display: inline-block;
      margin-bottom: 10px;
      line-height: 36px;
      background: rgba(255,255,255, .4);
      padding: 0 10px;
      width: 550px;
      img {
        vertical-align: bottom;
      }
    }
    .subscribe-number {
      text-align: center;
      margin-top: 10px;
    }
    .footer-right-bottom {
      div {
        margin: 5px 0;
      }
    }
  }
</style>