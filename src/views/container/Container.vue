<template>
    <div class="app-wrapper" :class="{hideSidebar:sidebar}" 
          v-loading.fullscreen.lock="loading" 
          element-loading-text="拼命加载中"
          element-loading-spinner=null >
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <navbar ></navbar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from '@/views/container/components'

export default {
  name: 'container',
  data() {
    return {
      loading: false
    }
  },
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    sidebar() {
      return this.$store.getters.sidebar
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0.1px;
  .top-nav-bar {
    width: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1001;
    overflow: hidden;
    &.navbar.el-menu {
      background-color: #28282e;
      &.el-menu--horizontal {
        border-bottom: solid 1px #00000033;
      }
    }
  }
}



</style>
