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