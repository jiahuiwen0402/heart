/*
 * @Author: your name
 * @Date: 2021-02-02 21:39:35
 * @LastEditTime: 2021-02-05 13:38:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \心释放\pages\tiaozhuan\tiaozhuan.js
 */
// pages/tiaozhuan/tiaozhuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(function () {
      // wx.redirectTo({
      // url: ‘…/index/index’
      // })
      //navigateTo switchTab
      wx.redirectTo({
        url: "../denglu/denglu"
      }) 
      }, 3000)
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