<template>
  <el-breadcrumb class="app-breadcrumb" separator=">">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if="item.meta.title">
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{item.meta.title}}</span>
        <router-link v-else :to="getGoToPath(item)">{{item.meta.title}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name !== 'dashboard') {
        matched = [{ path: 'dashboard', meta: { title: 'Dashboard' }}].concat(matched)
      }
      this.levelList = matched
    },
    // 修复面包屑导航不支持
    getGoToPath(item) {
      if (item.path) {
        let path = item.path
        const startPos = path.indexOf(':')
        if (startPos !== -1) {
          const endPos = path.indexOf('/', startPos)
          const key = path.substring(startPos + 1, endPos)
          path = path.replace(':' + key, this.$route.params[key])
          return path
        }
      }
      return item.redirect || item.path
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      cursor: text;
    }
  }
</style>
