/*
 * @Author: your name
 * @Date: 2020-11-14 11:30:27
 * @LastEditTime: 2021-02-05 09:32:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \心释放\pages\mine\mine.js
 */
// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myPic:"/PNG/256 px/finn.png",
    myName:"",
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      
      success: function(res) {
          // wx.switchTab({
          //   url: "../home/home"
          // }) 
          console.log(res.userInfo);
          that.setData({
            myPic:res.userInfo.avatarUrl,
            myName:res.userInfo.nickName,
          });
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