/*
 * @Author: your name
 * @Date: 2021-02-24 18:08:05
 * @LastEditTime: 2021-02-24 18:19:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \心释放\pages\zuixinruzhu\zuixinruzhu.js
 */
// pages/zuixinruzhu/zuixinruzhu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    briefIntroduction:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://120.26.176.101:8925/master/selectNewest',
      success:(res)=>{
        var that=this;
        that.setData({
          username:res.data.username,
          briefIntroduction:res.data.briefIntroduction
        })
      }
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