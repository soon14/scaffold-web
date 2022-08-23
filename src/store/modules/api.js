const baseUrl = process.env.VUE_APP_BASE_API
const api = {
  state: {
    // 基础路径
    baseApi: baseUrl,
    sqlMonitorApi: baseUrl + '/druid',
    swaggerApi: baseUrl + '/doc.html'
  }
}

export default api
