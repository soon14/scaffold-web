// WebSocket对象
let webSocket = null
// WS基础路径
const baseUrl = process.env.VUE_APP_WS_API
// 回调函数
let global_callback = null

function createWebSocket(url, callback) {
  if (webSocket == null || typeof webSocket !== WebSocket) {
    initWebSocket(url, callback)
  }
}

// 实际调用的方法
function sendSock(agentData) {
  if (webSocket.readyState === webSocket.OPEN) {
    // 若是ws开启状态
    webSocketSend(agentData)
  } else if (webSocket.readyState === webSocket.CONNECTING) {
    // 若是 正在开启状态，则等待1s后重新调用
    setTimeout(function () {
      sendSock(agentData)
    }, 1000)
  } else {
    // 若未开启 ，则等待1s后重新调用
    setTimeout(function () {
      sendSock(agentData)
    }, 1000)
  }
}

function closeWebSocket() {
  webSocket.close()
}

function initWebSocket(url, callback) {
  // 回调函数
  global_callback = callback
  // URL拼接
  let wsUrl
  if (url.charAt(0) === '/') {
    wsUrl = baseUrl + url
  } else {
    wsUrl = baseUrl + '/' + url
  }
  // 初始化WebSocket
  webSocket = new WebSocket(wsUrl)
  webSocket.onmessage = function (e) {
    webSocketOnMessage(e)
  }
  webSocket.onclose = function (e) {
    webSocketClose(e)
  }
  webSocket.onopen = function () {
    webSocketOpen()
  }
  webSocket.onerror = function () {
    console.log('WebSocket连接发生错误!')
  }
}

// 数据发送
function webSocketSend(agentData) {
  console.log('发送数据：' + agentData)
  webSocket.send(agentData)
}

function webSocketOnMessage(msg) {
  let result = null
  if (msg.data instanceof Blob) {
    const reader = new FileReader()
    reader.readAsText(msg.data, 'UTF-8')
    reader.onload = (e) => {
      result = JSON.parse(reader.result)
      global_callback(result)
    }
  } else {
    result = JSON.parse(msg.data)
    global_callback(result)
  }
}

// 关闭
function webSocketClose(e) {
  console.log('WebSocket连接关闭(' + e.code + ')')
}

function webSocketOpen() {
  console.log('WebSocket连接打开')
}

export {createWebSocket, sendSock, closeWebSocket}
