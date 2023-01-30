/*
 * @Author: your name
 * @Date: 2021-02-08 20:46:44
 * @LastEditTime: 2021-02-27 22:56:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \心释放\pages\qingsongdiantai\qingsongdiantai.js
 */
// pages/qingsongdiantai/qingsongdiantai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [

      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      url:"/首页修改_slices/1.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'http://120.26.176.101:8925/music/selectAllJust',
      success:(res)=>{
        console.log(res.data);
        that.setData({
          imgUrls:res.data
        })
      }
    })
  },
  swiperChange(e) {
    const that = this;
    that.setData({
    swiperIndex: e.detail.current,
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