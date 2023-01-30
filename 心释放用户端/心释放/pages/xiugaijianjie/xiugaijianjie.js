/*
 * @Author: your name
 * @Date: 2021-02-21 16:21:22
 * @LastEditTime: 2021-02-23 21:18:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \心释放\pages\xiugaijianjie\xiugaijianjie.js
 */
// pages/xiugaijianjie/xiugaijianjie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  setvalue:function(e){
    var that=this;
    that.setData({
      value:e.detail.value
    })
  },
  baocun:function(e){
    var that=this;
    var app=getApp();
    var id=app.globalData.userid;
    var introduction=that.data.value;
    console.log(app.globalData.userid);
    wx.request({
      url: 'http://120.26.176.101:8925/user/updateOne',
      method:'PUT',
      data:{
        id:id,
        brief_introduction:introduction
      },
      header:{
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success:(e)=>{
        console.log(e);
        wx.redirectTo({
          url: '../gerenxinxi/gerenxinxi',
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