const common = {
  state: {
    // 侧边栏, 折叠状态
    sidebarFold: false

  },
  mutations: {
    TOGGLE_SIDEBAR: (state, fold) => {
      state.sidebarFold = fold
    }
  },
  actions: {
    toggleSideBar({ commit }, fold) {
      commit('TOGGLE_SIDEBAR', fold)
    }
  }
}

export default common
