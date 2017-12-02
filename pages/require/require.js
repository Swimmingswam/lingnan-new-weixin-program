// pages/hello/hello.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    require: {
      score: {
        image: "/images/score.png",
        title: "成绩",
        src:"/pages/chart/score/score"
      },
      cet: {
        image: "/images/cet.png",
        title: "四六级",
        src: "/pages/chart/cet/cet"
      },
      computer: {
        image: "/images/computer.png",
        title: "计算机",
        src: "/pages/chart/computer/computer"
      },
      putong: {
        image: "/images/putong.png",
        title: "普通话",
        src: "/pages/chart/putong/putong"
      },
      body: {
        image: "/images/body.png",
        title: "体侧",
        src: "/pages/chart/body/body"
      },
      server: {
        image: "/images/server.png",
        title: "中国知网",
        src: "/pages/chart/server/server"
      }}
  
 },
  onask:function(event){
    var url = event.currentTarget.dataset.src;
    console.log(url);
    wx.navigateTo({
      url: url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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