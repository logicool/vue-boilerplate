<template>
    <div class="app-wrapper" :class="{hideSidebar:sidebar}" 
          v-loading.fullscreen.lock="loading" 
          element-loading-text="拼命加载中"
          element-loading-spinner=null >
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <navbar></navbar>
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
}



</style>
