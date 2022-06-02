const title1 = "http://m.qpic.cn/psc?/V50zprV12UjhIi2rSvWh0YXZ0Q48ois0/ruAMsa53pVQWN7FLK88i5gnOfhCMtJuhTBSak43Drh6E0cqY2TrOCP3isOm5gnSnjlnBSuG2q99n3KHrmf28kWt7y83dTohgHiHo9AdCoq4!/mnull&bo=vADcAAAAAAADB0I!&rf=photolist&t=5";

const title2 = "http://m.qpic.cn/psc?/V50zprV12UjhIi2rSvWh0YXZ0Q48ois0/ruAMsa53pVQWN7FLK88i5hmhXr4SR4.3mXBCMH.WMOpjUgBNOcyWvtxaOq6.nX9R.42KyBB.ObvoK0y.BeBiQN0Ht8lGOkI337EE2tsJ*.0!/b&bo=BALjAQAAAAADB8Y!&rf=viewer_4"

const title3 = "http://a1.qpic.cn/psc?/V10F577J08xjlZ/ruAMsa53pVQWN7FLK88i5vcZMmAQAbDusYBVKG2qbsLQtha52VeZ1uvTw.C6fu6ZEhC.f9JCVvq*wcI8Jj2rH2DG0hllH*oNEagxEY.1kBk!/b&ek=1&kp=1&pt=0&bo=AQLnAQEC5wEDEDU!&tl=1&vuin=3037618313&tm=1653969600&dis_t=1653971402&dis_k=a28b328e7274d8672ab240b0d2537136&sce=60-1-1&rf=0-0"

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
      {topic:"最新活动", image: title1,
        content: [
          {link:"../post/post",
          image: title1,
          content: "活动文案"}, 
          {link:"../post/post",
          image: title1,
          content: "活动文案"},
          {link:"../post/post",
          image: title1,
          content: "活动文案"},
        ],
      }, 
      {topic: "关于小猫", image: title2,
        content: [
          {link:"../post/post",
          image: title2,
          content: "活动文案"}, 
          {link:"../post/post",
          image: title2,
          content: "活动文案"},
          {link:"../post/post",
          image: title2,
          content: "活动文案"},
        ],
      }, 
      {topic: "关于小狗", image: title3,
        content: [
          {link:"../post/post",
          image: title3,
          content: "活动文案"}, 
          {link:"../post/post",
          image: title3,
          content: "活动文案"},
          {link:"../post/post",
          image: title3,
          content: "活动文案"},
        ],
      }
    ]
  }
})