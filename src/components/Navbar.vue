<template>
<nav>
  <div class="wrap">
    <ul>
      <li v-for="(list, index) in lists" @mouseenter.stop="showSecondMenu" @mouseleave.stop="hideSecondMenu" :to="list.href" :data-id="index">
        <router-link :to="list.href"> {{list.title}} </router-link>
        <ul v-if="list.children" class="second-menu" v-show="list.active">
          <div>
            <li v-for="child in list.children">
              <router-link :to="child.href"> {{child.title}}</router-link>
            </li>
          </div>
        </ul>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
  import RouterConst from '../config/RouterConst'
  export default {
    data () {
      return {
        lists: [
          {title: '首页', href: '/', active: false},
          {title: RouterConst.about.index.title, href: RouterConst.about.index.href, active: false, children:[
            {title: RouterConst.about.intro.title, href:RouterConst.about.intro.href},
            {title: RouterConst.about.concept.title, href:RouterConst.about.concept.href},
            {title: RouterConst.about.facility.title, href:RouterConst.about.facility.href},
            {title: RouterConst.about.features.title, href:RouterConst.about.features.href},
            {title: RouterConst.about.team.title, href:RouterConst.about.team.href},
            {title: RouterConst.about.histroy.title, href:RouterConst.about.histroy.href},
            {title: RouterConst.about.background.title, href:RouterConst.about.background.href},
            {title: RouterConst.about.word.title, href:RouterConst.about.word.href},
            {title: RouterConst.about.rules.title, href:RouterConst.about.rules.href},
            {title: RouterConst.about.contact.title, href:RouterConst.about.contact.href}
          ]},
          {title: RouterConst.features.index.title, href: RouterConst.features.index.href, active: false, children:[
            {title: RouterConst.features.course.title, href: RouterConst.features.course.href},
            {title: RouterConst.features.creative.title, href: RouterConst.features.creative.href},
            {title: RouterConst.features.activity.title, href: RouterConst.features.activity.href},
            {title: RouterConst.features.parenting.title, href: RouterConst.features.parenting.href},
            {title: RouterConst.features.interest.title, href: RouterConst.features.interest.href}
          ]},
          {title: RouterConst.activity.index.title, href: RouterConst.activity.index.href, active: false},
          {title: RouterConst.health.index.title, href: RouterConst.health.index.href, active: false, children: [
            {title: RouterConst.health.life.title, href:RouterConst.health.life.href},
            {title: RouterConst.health.conduct.title, href:RouterConst.health.conduct.href},
            {title: RouterConst.health.food.title, href:RouterConst.health.food.href},
            {title: RouterConst.health.menu.title, href:RouterConst.health.menu.href}
          ]},
          {title: RouterConst.teachers.index.title, href: RouterConst.teachers.index.href, active: false, children: [
            {title: RouterConst.teachers.master.title, href:RouterConst.teachers.master.href},
            {title: RouterConst.teachers.team.title, href:RouterConst.teachers.team.href},
            {title: RouterConst.teachers.teacher.title, href:RouterConst.teachers.teacher.href}
          ]},
          {title: RouterConst.admissions.index.title, href: RouterConst.admissions.index.href, active: false, children: [
            {title: RouterConst.admissions.guide.title, href:RouterConst.admissions.guide.href},
            {title: RouterConst.admissions.charges.title, href:RouterConst.admissions.charges.href},
            {title: RouterConst.admissions.admission.title, href:RouterConst.admissions.admission.href},
            {title: RouterConst.admissions.visit.title, href:RouterConst.admissions.visit.href}
          ]}
        ],
        activeId: null
      }
    },
    methods: {
      showSecondMenu (e) {
        const id = e.target.getAttribute('data-id')
        e.target.classList.add('hover')
        this.lists[id].active = true
        this.activeId = id
      },
      hideSecondMenu (e) {
        // console.log(e.target)
        // const id = e.target.getAttribute('data-id')
        e.target.classList.remove('hover')
        this.lists[this.activeId].active = false
      }
    }
  }
</script>

<style lang="scss">
  @import '../sass/variables';
  nav {
    background: $color-nav;
    position: relative;
    color: #fff;
    a {
      color: #fff;
    }
    .second-menu {
      display: block;
      clear: both;
      width: 900px;
      top: 45px;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      background: #0080ca;
      border: solid #0080ca;
      border-width: 0 1px 1px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      box-shadow: 0 3px 3px rgba(0,128,202,0.15);
      z-index: 100;
      div {
        display: flex;
      }
      li {
        float: left;
      }
      a:hover {
        background: #0290e2;
        color: #f1f1f1;
      }
    }
    .wrap {
      padding: 0 50px;
    }
    ul {
      height: 40px;
      padding: 5px 12px 0px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      li {
        display: inline-block;
        width: 122px;
        text-align: center;
        &.hover {
          background: $color-nav-hover;
        }
        a {
          display: block;
          height: 40px;
          line-height: 40px;
        }
        a:hover {
          background: $color-nav-hover;
        }
      }
      [data-id="4"] {
        ul {
          div {
            padding-left: 300px;
          }
        }
      }
      [data-id="5"] {
        ul {
          div {
            padding-left: 500px;
          }
        }
      }
      [data-id="6"] {
        ul {
          div {
            padding-left: 500px;
          }
        }
      }
    }
  }
</style>