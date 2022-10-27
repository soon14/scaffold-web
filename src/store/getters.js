const getters = {
  // 系统表头信息
  tableHeader: state => state.tableHeader,
  // 用户信息
  user: state => state.user.user,
  // 用户的权限列表
  roles: state => state.user.roles,
  // 用户的Token
  token: state => state.user.token,
  // 用户的最大角色等级
  level: state => state.user.level,
  // 登录后是否已拉取菜单
  loadMenus: state => state.user.loadMenus,
  // 页面是移动端还是桌面端
  device: state => state.app.device,
  // 菜单栏状态 (是否展开，是否有动画效果)
  sidebar: state => state.app.sidebar,
  // Element-ui的组件布局大小
  size: state => state.app.size,
  // tagsView的已打开页面
  visitedViews: state => state.tagsView.visitedViews,
  // 进行缓存的组件列表(keep-alive)
  cachedViews: state => state.tagsView.cachedViews,
  // 后端服务的基础API
  baseApi: state => state.api.baseApi,
  // SQL监控页面请求API
  sqlMonitorApi: state => state.api.sqlMonitorApi,
  // 后端API接口文档API
  swaggerApi: state => state.api.swaggerApi,
  // 前端的路由表
  permission_routers: state => state.permission.routers,
  // 后端根据用户权限返回的菜单路由表
  addRouters: state => state.permission.addRouters,
  // 实时日志是否开启自动滚动
  loggingAutoBottom: state => state.realTimeLog.loggingAutoBottom,
  // 系统主题
  theme: state => state.global.theme,
  // 修改头像API
  updateAvatarApi: state => state.api.updateAvatarApi,
  // 用户修改邮箱的select下拉框
  options: state => state.userUpdate.options,
  // ICON列表API
  iconListApi: state => state.api.iconListApi,
  // 图片上传
  imagesUploadApi: state => state.api.imagesUploadApi
}

export default getters
