/*
 * @Author: your name
 * @Date: 2021-02-18 18:54:04
 * @LastEditTime: 2021-02-27 01:14:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \心释放咨询师\pages\yuyuetixing\yuyuetixing.js
 */
// pages/yuyuetixing/yuyuetixing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:[],
    displayOne:"",
    displayTwo:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var app=getApp();
    var that=this;
    wx.request({
      url: 'http://120.26.176.101:8925/order/selectForDate',
      data:{
        master_id:app.globalData.userid
      },
      success:(res)=>{
        console.log(res.data);
        that.setData({
          date:res.data
        })
      }
    })
  },
  onChange(e){
    var that=this;
    that.setData({
      displayOne:"none",
      displayTwo:"block"
    })
    for(var index=0;index<that.data.date.length;index++){
      if(e.detail.dateString==that.data.date[index]){
        that.setData({
          displayOne:"block",
          displayTwo:"none"
        })
      }
    }
    
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.calendar = this.selectComponent("#calendar");
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