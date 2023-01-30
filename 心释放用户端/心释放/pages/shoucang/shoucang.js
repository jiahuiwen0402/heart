/*
 * @Author: your name
 * @Date: 2021-02-15 11:01:50
 * @LastEditTime: 2021-02-24 18:27:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \心释放\pages\shoucang\shoucang.js
 */
// pages/shoucang/shoucang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"姓名",
    birthday:"20010910",
    arr:[],
    zixunshi:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var app=getApp();
    wx.request({
      url: 'http://120.26.176.101:8925/collections/selectMy',
      method:"GET",
      data: {
        user_id:app.globalData.userid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      success :(res)=> {
        
        that.setData({
          arr:res.data
        })
        for(var index=0;index<that.data.arr.length;index++){
          wx.request({
            url: 'http://120.26.176.101:8925/master/selectOne',
            data:{
              id:that.data.arr[index].masterId
            },
            success:(e)=>{
              console.log(e.data);
              that.data.zixunshi.push(e.data);
              this.setData({
                zixunshi:that.data.zixunshi
              })
            }
          })
        }
      }

    })
  },
  yuyue:function(e){
    var that=this;
    var app=getApp();
    console.log(e);
    var index=e.currentTarget.dataset.index;
    wx.request({
      url: 'http://120.26.176.101:8925/collections/deleteOne',
      data:{
        id:that.data.arr[index].id
      },
      method:"DELETE",
      header: { 
         "Content-Type": "application/x-www-form-urlencoded"
        }, 
        success:(res)=>{
          console.log(res);
          wx.request({
            url: 'http://120.26.176.101:8925/order/createOne',
            data:{
              user_id:app.globalData.userid,
              master_id:that.data.zixunshi[index].id,
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
               var that=this;
                console.log(res);
                wx.showToast({
                  title:'预约成功',
                  icon:'success',
                  duration:2000
                 })
                 that.onLoad();
             }
          })
          // if(res.data){
          
          // }
          
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