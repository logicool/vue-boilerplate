<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
      <el-menu mode="vertical" :collapse-transition="false" :show-timeout="200" :default-active="$route.path" :collapse="isCollapse"
        class="site-sidebar__menu">
        <sidebar-item :routes="permissionRouters"></sidebar-item>
      </el-menu>
  </el-scrollbar>
</template>


<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(['permissionRouters', 'sidebar']),
    isCollapse() {
      return this.sidebar
    }
  }
}
</script>