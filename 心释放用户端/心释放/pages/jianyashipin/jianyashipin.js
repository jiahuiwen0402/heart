/*
 * @Author: your name
 * @Date: 2021-02-08 20:46:44
 * @LastEditTime: 2021-02-22 20:31:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \心释放\pages\jianyashipin\jianyashipin.js
 */
// pages/jianyashipin/jianyashipin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    controls:false,
    display1:'block',
    display2:'none',
    shiping:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'http://120.26.176.101:8925/video/selectAllJust',
      method:'GET',
      data: {
        
      },
      header: {
        'content-type': 'application/json'
      },
      success :(res)=> { //这里也可以是箭头函数，也有必须使用箭头函数的情况
        that.setData({
          shiping:res.data//将数据给到data中
        })
      }
    })
  },
  binddianji: function( e ) {
    var that = this;
    that.setData( { 
      display1: 'none',
      display2:'block'
  });
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