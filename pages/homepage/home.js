// pages/homepage/home.js

const music = wx.getBackgroundAudioManager()
const pawsup = "http://m.qpic.cn/psc?/V11mssha4ZUW25/ruAMsa53pVQWN7FLK88i5ldPQTjEB7q86xf3.WZMFiznUf6i9kvzPJMCSYLnFuDEgNinIcULPidy4R9GZ91OJrhQkl06OJ9GMtx2hF7p*JA!/mnull&bo=JAQkBAAAAAADByI!&rf=photolist&t=5"
const defaultUser = {avatarUrl: "http://m.qpic.cn/psc?/V11mssha4ZUW25/45NBuzDIW489QBoVep5mcUGlYSeiJpArwIHXh*N9SoGLYu3WDS5zkWgea4*E6hiurUHoIrdKP89bdjp5*22ALeJ3iOOszxYJioUVsntux*s!/b&bo=.gL6AgAAAAABFzA!&rf=viewer_4", nickName: "未登录"}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    //按钮样式
    buts: {
      diary: 
        {class:'nav diary', words:'wordsp', content:'宠物\n日记', touching:false},
      cloud: 
        {class:'nav shelt', words:'wordsn', content:'探店\n新闻', touching:false},
      story: 
        {class:'nav story', words:'wordss', content:'故事\n专栏', touching:false},
      login:
        {touching:false},
    },
    external: [
      ['小红书：', 'PAWS UP'], 
      ['Facebook：','PAWS UP'], 
      ['Instagram：','PAWSUP_2022']
    ],
    title: "http://m.qpic.cn/psc?/V11mssha4ZUW25/ruAMsa53pVQWN7FLK88i5ldPQTjEB7q86xf3.WZMFiznUf6i9kvzPJMCSYLnFuDEgNinIcULPidy4R9GZ91OJrhQkl06OJ9GMtx2hF7p*JA!/mnull&bo=JAQkBAAAAAADByI!&rf=photolist&t=5",
    //获取信息
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: defaultUser,
    hasUserInfo: false,
    touching: false,
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

  touch(event){
    var id = event.target.id
    var classes = this.data.buts[id].class
    if(this.data.buts[id].touching){
      this.setData({
        ['buts.'+id+'.class']: classes.substring(0, classes.length-4),
        ['buts.'+id+'.touching']: false
      })
    }else{
      this.setData({
        ['buts.'+id+'.class']: classes+' hov',
        ['buts.'+id+'.touching']: true
      })
    }
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

  direct(event) {
    var to = event.target.id
    wx.navigateTo({
      url: "../" + to +"/" + to
    })
  },

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