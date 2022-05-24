// pages/index/pawsUp.ts
const pawimg = "http://m.qpic.cn/psc?/V11mssha4ZUW25/45NBuzDIW489QBoVep5mcfmILugZipFkBFJepjS3DydrBI6Ey7X6VU4xg5Oz8HB1USC0iX81YbO.jPqi75gY*YO76OQzkKbA9uhhD86j16A!/b&bo=AAIAAgAAAAADFzI!&rf=viewer_4"

Page({

  /**
   * Page initial data
   */
  data: {
    section_names:["推荐", "猫猫", "狗狗", "周边"],
    posts: [
      { style: ['body-grid cur', 'body-grid cur Tabs'],
        content:[
          {pic: pawimg, title: "推荐1", link:"../post/post"},
          {pic: pawimg, title: "推荐2", link:"../post/post"},
          {pic: pawimg, title: "推荐3", link:"../post/post"},
          {pic: pawimg, title: "推荐4", link:"../post/post"},
          {pic: pawimg, title: "推荐5", link:"../post/post"},
          {pic: pawimg, title: "推荐6", link:"../post/post"},
        ]
      },
      { style: ['body-grid cur', 'body-grid cur Tabs'],
        content:[
        {pic: pawimg, title: "猫猫1", link:"../post/post"},
        {pic: pawimg, title: "猫猫2", link:"../post/post"},
        {pic: pawimg, title: "猫猫3", link:"../post/post"},
        {pic: pawimg, title: "猫猫4", link:"../post/post"},
        {pic: pawimg, title: "猫猫5", link:"../post/post"},
        {pic: pawimg, title: "猫猫6", link:"../post/post"},
        ]
      },
      { style: ['body-grid cur', 'body-grid cur Tabs'],
        content: [
        {pic: pawimg, title: "狗狗1", link:"../post/post"},
        {pic: pawimg, title: "狗狗2", link:"../post/post"},
        {pic: pawimg, title: "狗狗3", link:"../post/post"},
        {pic: pawimg, title: "狗狗4", link:"../post/post"},
        {pic: pawimg, title: "狗狗5", link:"../post/post"},
        {pic: pawimg, title: "狗狗6", link:"../post/post"},
        ]
      },
      { style: ['body-grid cur', 'body-grid cur Tabs'],
        content: [
        {pic: pawimg, title: "周边1", link:"../post/post"},
        {pic: pawimg, title: "周边2", link:"../post/post"},
        {pic: pawimg, title: "周边3", link:"../post/post"},
        {pic: pawimg, title: "周边4", link:"../post/post"},
        {pic: pawimg, title: "周边5", link:"../post/post"},
        {pic: pawimg, title: "周边6", link:"../post/post"},
        ]
      }
    ],
    active:0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {

  },

  change:function(e){
    this.setData({
      active: e.currentTarget.dataset.index
    })

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})