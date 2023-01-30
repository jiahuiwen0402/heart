/*
 * @Author: your name
 * @Date: 2021-02-06 20:12:12
 * @LastEditTime: 2021-02-26 00:59:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \心释放\pages\gerenxinxi\gerenxinxi.js
 */
// pages/gerenxinxi/gerenxinxi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myPic:"",
    myName:"",
    mysex:"",
    sex:"",
    briefIntroduction:"",
    birthday:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var app=getApp();
    var id=app.globalData.userid;
    wx.request({
      url: 'http://120.26.176.101:8925/user/selectOne',
      method:'GET',
      data:{
        id:id,
      },
      header:{
        'content-type': 'application/json'
      },
      success:(e)=>{
          var sex=0;
      wx.getUserInfo({
        
        success: function(res) {
            // wx.switchTab({
            //   url: "../home/home"
            // }) 
            that.setData({
              myPic:res.userInfo.avatarUrl,
              myName:res.userInfo.nickName,
            });
        }
      })
        that.setData({
          briefIntroduction:e.data.briefIntroduction,
          birthday:e.data.birthday,
          sex:e.data.sex
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