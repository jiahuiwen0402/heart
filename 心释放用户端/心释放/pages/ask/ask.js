/*
 * @Author: your name
 * @Date: 2020-11-14 11:30:27
 * @LastEditTime: 2021-02-24 18:06:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \心释放\pages\ask\ask.js
 */
// pages/ask/ask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tuijianzixunshi:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'http://120.26.176.101:8925/master/selectAllJust',
      method:'GET',
      data: {
        
      },
      header: {
        'content-type': 'application/json'
      },
      success :(res)=> { //这里也可以是箭头函数，也有必须使用箭头函数的情况
        console.log(res.data);
        that.setData({
          tuijianzixunshi:res.data//将数据给到data中
        })
      }
    })
  },
  dianji:function(e){
    var that=this;
    var index=parseInt(e.currentTarget.dataset.index);
    console.log(index);
    wx.navigateTo({
      url: '../asker/asker?username='+that.data.tuijianzixunshi[index].username+'&briefIntroduction='+that.data.tuijianzixunshi[index].briefIntroduction+'&id='+that.data.tuijianzixunshi[index].id,
    })
  },
  xiangdang:function(e){
    wx.showToast({
      title:'请转移至咨询师端！',
      icon:'none',
      duration:2000
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