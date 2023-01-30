/*
 * @Author: your name
 * @Date: 2021-02-19 16:07:09
 * @LastEditTime: 2021-02-26 00:35:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \心释放咨询师\pages\biaoqian\biaoqian.js
 */
// pages/biaoqian/biaoqian.js
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
  value:function(e){
    var that=this;
    that.setData({
      value:e.detail.value
    })
  },

  save:function(res){
    var that=this;
    var app=getApp();
    wx.request({
      url: 'http://120.26.176.101:8925/personalLabel/insertOne',
      method:'POST',
      data:{
        name:that.data.value,
        master_id:app.globalData.userid
      },
      header: { 
        "Content-Type": "application/x-www-form-urlencoded"
       },
       success:(e)=>{
         console.log(e);
         wx.switchTab({
          url: '../mine/mine',
          success: function (res){
            var page = getCurrentPages().pop();
            page.onLoad();
          }
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