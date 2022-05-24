// pages/homepage/home.js

const music = wx.getBackgroundAudioManager()
const pawsup = "http://m.qpic.cn/psc?/V11mssha4ZUW25/ruAMsa53pVQWN7FLK88i5r7XXcfmcJIEVbGnMdxhpu4e5NNDhFKNkVitRw2CTBLve4R9tIOm2DhhukRJngtgKvxC4KcygFIGcUmQwQVuKsc!/mnull&bo=.QL5AgAAAAABByA!&rf=photolist&t=5"
const defaultUser = {avatarUrl: pawsup, nickName: "未登录"}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    //paragraph
    article: [
      ["section 1", [
        ["paragraph 1:", "\t text here to introduce the shelter, use \\n for new line, \\t for indent\n\tlike this"],
        ["", "\t this is a paragraph with no title. text here to introduce the shelter, use \\n for new line, \\t for indent"],
        ["fake paragraph 1:", "\t text here to introduce the shelter, use \\n for new line, \\t for indent"]
      ],
      [pawsup, pawsup]
    ],
      ["another section 1", [
        ["paragraph 1:", "\t text here to introduce the shelter, use \\n for new line, \\t for indent",]
      ],
      []
    ],
      ["real section 1", [
        ["paragraph 1:", "\t text here to introduce the shelter, use \\n for new line, \\t for indent"],
        ["real paragraph 1:", "\t text here to introduce the shelter, use \\n for new line, \\t for indent"]
      ],
      [pawsup]
    ]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    /*if (wx.getUserProfile) {
      this.setData({
        canIUse: false
      })
    }*/
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        console.log(this.data.userInfo)
      }
    })
  },

  /*
  playMusic: function(){
    function player() {
      music.title = "背景音乐";   // 必须要有一个title
      music.src = ".mp3"; 
      music.onEnded(() => {
        player();  // 音乐循环播放
      })
    }
    player()
  },
  */

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})