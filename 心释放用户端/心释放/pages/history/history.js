/*
 * @Author: your name
 * @Date: 2021-02-05 11:00:11
 * @LastEditTime: 2021-02-22 20:46:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit7
 * @FilePath: \心释放\pages\history\history.js
 */
// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myPic:"",
    myhistory:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app=getApp();
    var that = this;
    wx.getUserInfo({
      
      success: function(res) {
          // wx.switchTab({
          //   url: "../home/home"
          // }) 
          console.log(res.userInfo);
          that.setData({
            myPic:res.userInfo.avatarUrl,
          });
          wx.request({
            url: 'http://120.26.176.101:8925/mood/selectByUserId',
            data:{
              user_id:app.globalData.userid
            },
            success:(e)=>{
              that.setData({
                myhistory:e.data
              })
              
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