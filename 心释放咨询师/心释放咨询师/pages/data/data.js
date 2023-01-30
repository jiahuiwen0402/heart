// pages/data/data.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**
        * 页面配置
        */
       winWidth: 0,
       winHeight: 0,
       // tab切换
       currentTab: 0,
      image:"/图片/截图.png"
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
 

    var ctx = wx.createCanvasContext('customCanvas1');
    var ctx2 = wx.createCanvasContext('customCanvas2');
    var ctx3 = wx.createCanvasContext('customCanvas3');
    

    ctx.drawImage(that.data.image,10,9);
    ctx2.drawImage(that.data.image,10,9);
    ctx3.drawImage(that.data.image,10,9);
    //调用draw()开始绘制
    ctx.draw();
    ctx2.draw();
    ctx3.draw();
    /**
     * 获取系统信息
     */
    wx.getSystemInfo( {
 
      success: function( res ) {
        that.setData( {
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
 
    });
  },
  /**
     * 滑动切换tab
     */
    bindChange: function( e ) {
 
      var that = this;
      that.setData( { currentTab: e.detail.current });
   
    },
    /**
     * 点击tab切换
     */
    swichNav: function( e ) {
   
      var that = this;
   
      if( this.data.currentTab === e.target.dataset.current ) {
        return false;
      } else {
        that.setData( {
          currentTab: e.target.dataset.current
        })
      }
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