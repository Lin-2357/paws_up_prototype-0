// app.js
App({
  async onLaunch() {
     // 使用 callContainer 前一定要 init 一下，全局执行一次即可
     //source code: https://developers.weixin.qq.com/miniprogram/dev/wxcloudrun/src/development/call/mini.html
     wx.cloud.init()

    // 下面的请求可以在页面任意一处使用
    // wx.cloud.callContainer({
    //   config: {
    //     env: 'prod-6g8t0sqhb6eb8438', // 微信云托管的环境ID
    //   },
    //   path: 'http://127.0.0.1:5000/', // 填入业务自定义路径和参数，根目录，就是 / 
    //   method: 'GET', // 按照自己的业务开发，选择对应的方法
    //   header: {
    //     'X-WX-SERVICE': 'flask-j0xx', // xxx中填入服务名称（微信云托管 - 服务管理 - 服务列表 - 服务名称）
    //   },
    //   // dataType:'text', // 默认不填是以 JSON 形式解析返回结果，若不想让 SDK 自己解析，可以填text
    //   success(res) {
    //     //TODO
    //     console.log(); // 在控制台里查看打印
    //   }
    // });
    const db = wx.cloud.database();
    db.collection("topic").where({
      _id: "a573b43362c28f1f0015c3a149627c58"// 填入当前用户 openid
    }).get({
      success: function(res) {
        //var math = JSON.stringify(res.data)
        //console.log(math)
        //console.log(math[10])
        // const myData = buttons_data[1]
        // console.log(myData)
        // console.log("res data is " +res.data)
        // console.log("buttons_data is " + buttons_data)
        console.log(res)
        wx.request({
          url: 'http://127.0.0.1:5000/posts',
          method: "GET",
          data: res.data,
          success(res) {
            console.log(res.data)
          },
        })
      }
    })
  
    // const db = wx.cloud.database()
    // db.collection('buttons').get({
    //   success: function(res) {
    //     // res.data 包含该记录的数据
    //     console.log(res.data)
    //   }
    // })
    
   

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
    userInfo: null
  }
})
