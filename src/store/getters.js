const getters = {
    user: state => state.user.user,
    permissions: state => state.user.permissions,
    token: state => state.user.token,
    loadMenus: state => state.user.loadMenus,
    device: state => state.app.device,
    sidebar: state => state.app.sidebar,
    size: state => state.app.size,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews
}

export default getters
