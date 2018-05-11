const user = {
  state: {
    name: '',
    status: '',
    roles: []
  },
  mutations: {
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    }
  },
  actions: {

  }
}

export default user
