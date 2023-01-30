/*
 * @Author: your name
 * @Date: 2021-02-02 17:41:11
 * @LastEditTime: 2021-02-24 18:02:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \心释放\pages\asker\asker.js
 */
// pages/asker/asker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    briefIntroduction:"",
    masterid:"",

    shoucangid:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      username:options.username,
      briefIntroduction:options.briefIntroduction,
      masterid:options.id
    })
  },
  shoucang:function(e){
    var that=this;
    var app=getApp();
    var cishu=app.globalData.shoucangcishu;
    cishu++;
    app.globalData.shoucangcishu=cishu;
    console.log(cishu);
    if(cishu%2==1){
      wx.request({
        url: 'http://120.26.176.101:8925/collections/insertOne',
        data:{
          user_id:app.globalData.userid,
          master_id:that.data.masterid
        },
        method:"POST",
        header: { 
           "Content-Type": "application/x-www-form-urlencoded"
          }, 
          success:(res)=>{
            console.log(res);
            that.setData({
              shoucangid:res.data.id
            })
            wx.showToast({
              title:'收藏成功',
              icon:'success',
              duration:2000
             })
          }
      })
    }else{
      wx.request({
        url: 'http://120.26.176.101:8925/collections/deleteOne',
        data:{
          
          id:that.data.shoucangid
        },
        method:"DELETE",
        header: { 
           "Content-Type": "application/x-www-form-urlencoded"
          }, 
          success:(res)=>{
            console.log(res);
            if(res.data){
              wx.showToast({
              title:'删除收藏成功',
              icon:'success',
              duration:2000
             })
            }
            
          }
      })
    }
  },
  nowyuyue:function(res){
    var that=this;
    var app=getApp();
    console.log(res);
    wx.request({
            url: 'http://120.26.176.101:8925/order/createOne',
            data:{
              user_id:app.globalData.userid,
              master_id:that.data.masterid,
              appointment_place:"xxx小区xx街道",
              consult_way:"面对面咨询",
              pay_money:"300",
              appointment_time:"20210402"
            },
            method:'POST',
            header: { 
              "Content-Type": "application/x-www-form-urlencoded"
             }, 
             success:(res)=>{
                console.log(res);
                wx.showToast({
                  title:'预约成功',
                  icon:'success',
                  duration:2000
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