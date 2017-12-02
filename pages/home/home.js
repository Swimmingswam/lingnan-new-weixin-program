// pages/hello/hello.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: {
      title: "厉害了！今年岭师8个省级科研平台获立项创新高",
      date: "2017-10-13",
      content: "2017年度我校获8个省级科研平台，立项数在我校历年平台立项建设中居榜首。其中“特殊儿童心理评估与康复重点实验室”获广东省普通高校哲学社会科学重点实验室。",
      image: "/images/1.jpg"
    }
  },
  enter_school: function () {

  },
  enteracticle:function(event){
    wx.navigateTo({
      url: '../article/article'
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