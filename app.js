// app.js
wx.cloud.init({
  env: 'cloud1-6gsoqrrgdf9781ce'
})

const db = wx.cloud.database({
  env: 'cloud1-6gsoqrrgdf9781ce'
})

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    db: db
  }
})
