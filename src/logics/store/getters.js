const getters = {
  sidebar: state => state.common.sidebarFold,
  userName: state => state.user.name,
  status: state => state.user.status,
  roles: state => state.user.roles,
  permissionRouters: state => state.router.routers,
  addRouters: state => state.router.addRouters
}

export default getters
