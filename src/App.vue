<template>
  <div id="app">
    <app-header></app-header>
    <navbar></navbar>
    <banner></banner>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AppFooter from './components/AppFooter'

export default {
  name: 'app',
  components: {
    AppHeader,
    Navbar,
    Banner,
    AppFooter
  }
}
</script>

<style lang="scss">
  @import './sass/reset';
  @import './sass/base';
</style>
