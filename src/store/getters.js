const getters = {
  user: state => state.user.user,
  roles: state => state.user.roles,
  token: state => state.user.token,
  loadMenus: state => state.user.loadMenus,
  device: state => state.app.device,
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  baseApi: state => state.api.baseApi,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters
}

export default getters
