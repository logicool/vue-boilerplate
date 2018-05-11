<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar"></hamburger>
        <breadcrumb class="breadcrumb-container"></breadcrumb>
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <img class="user-avatar" src="http://ohlmilmdr.bkt.clouddn.com/avator/f2deb48f8c5494ee6a44c3222cf5e0fe99257ea3.jpg">
                <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
                <router-link class="inlineBlock" to="/">
                    <el-dropdown-item>
                        Home
                    </el-dropdown-item>
                </router-link>
                <el-dropdown-item divided>
                    <span @click="logout" style="display:block;">LogOut</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar', !this.sidebar)
    },
    logout() {
      this.$confirm(`确定进行[退出]操作?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      }).catch(() => {})
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

