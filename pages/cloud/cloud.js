const title = "http://m.qpic.cn/psc?/V11mssha4ZUW25/ruAMsa53pVQWN7FLK88i5gaVA983yGja6jVG.w7SpavLykWRwyPapLz3kt.BFWRLQpODKrAdeg1f7uhsWlkNBbElqjKZSkqfEwKUM8sR5IM!/mnull=&bo=rQOtAwAAAAABByA!&rf=photolist&t=5";
function navi(target){
  wx.navigateTo({
    url: target,
    success: (result) => {},
    fail: (res) => {},
    complete: (res) => {},
  })
}
Page({
  /** paws 返回界面 */
  data: {
    sections: [
      {topic:"最新",
        content: [
          {link:"../post/post",
          image: title,
          content: "a brief discription about the news given here"}, 
          {link:"../post/post",
          image: title,
          content: "a brief discription about the news given here"},
          {link:"../post/post",
          image: title,
          content: "a brief discription about the news given here"},
        ],
      }, 
      {topic: "猫猫",
        content: [
          {link:"../post/post",
          image: title,
          content: "a brief discription about the news given here"}, 
          {link:"../post/post",
          image: title,
          content: "a brief discription about the news given here"},
          {link:"../post/post",
          image: title,
          content: "a brief discription about the news given here"},
        ],
      }, 
      {topic: "狗狗",
        content: [
          {link:"../post/post",
          image: title,
          content: "a brief discription about the news given here"}, 
          {link:"../post/post",
          image: title,
          content: "a brief discription about the news given here"},
          {link:"../post/post",
          image: title,
          content: "a brief discription about the news given here"},
        ],
      }
    ]
  }
})

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
  