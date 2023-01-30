/*
 * @Author: your name
 * @Date: 2021-02-16 10:47:00
 * @LastEditTime: 2021-02-26 00:19:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \心释放咨询师\pages\mine\mine.js
 */
// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yonghuBiaoqian:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var app=getApp();
    wx.request({
      url: 'http://120.26.176.101:8925/personalLabel/selectAllJust',
      method:'GET',
      data:{
        master_id:app.globalData.userid
      },
      success:(e)=>{
        that.setData({
          yonghuBiaoqian:e.data
        })
      }
    })
  },
  
  shanchu:function(res){
    var index=parseInt(res.currentTarget.dataset.index);
    var that=this;
    var id=that.data.yonghuBiaoqian[index].id;
    wx.request({
      url: 'http://120.26.176.101:8925/personalLabel/deleteOne',
      method:'DELETE',
      header: { 
        "Content-Type": "application/x-www-form-urlencoded"
       }, 
      data:{
        id:id
      },
      success:(res)=>{
        if(res.data){
          wx.showToast({
            title:'删除标签成功！',
            icon:'success',
            duration:2000
           })
          that.onLoad();
        }

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