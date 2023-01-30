/*
 * @Author: your name
 * @Date: 2021-02-05 11:03:02
 * @LastEditTime: 2021-02-25 16:54:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \心释放\pages\minePinggu\minePinggu.js
 */
// pages/minePinggu/minePinggu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:"/首页修改_slices/Snipaste_2021-02-25_16-37-48.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var ctx = wx.createCanvasContext('customCanvas');
    
    console.log(ctx);
    ctx.setFillStyle('#3b3b3b');//文字颜色：默认黑色
    ctx.setFontSize(15);//设置字体大小，默认10
    ctx.fillText("趋势图", 20, 20);//绘制文本
    ctx.drawImage(that.data.image, 15, 30)
    ctx.fillText("心理健康评估曲线", 100, 180);
    //调用draw()开始绘制
    ctx.draw();
    
   
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