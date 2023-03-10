var app = getApp()
// pages/dingdan/dingdan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**
        * 页面配置
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    arr:[],
    zixunshi:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that = this;
    var app=getApp();
    wx.request({
      url: 'http://120.26.176.101:8925/order/selectByUserId',
      method:"GET",
      data: {
        user_id:app.globalData.userid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      success :(res)=> {
        console.log(res);
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
    /**
     * 获取系统信息
     */
    wx.getSystemInfo( {
 
      success: function( res ) {
        that.setData( {
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
 
    });
  },
  /**
     * 滑动切换tab
     */
  bindChange: function( e ) {
 
    var that = this;
    that.setData( { currentTab: e.detail.current });
 
  },
  /**
   * 点击tab切换
   */
  swichNav: function( e ) {
 
    var that = this;
 
    if( this.data.currentTab === e.target.dataset.current ) {
      return false;
    } else {
      that.setData( {
        currentTab: e.target.dataset.current
      })
    }
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